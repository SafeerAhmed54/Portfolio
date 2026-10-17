import { fireEvent, render, screen } from "@testing-library/react";
import Project from "../project";

jest.mock("framer-motion", () => {
  const React = jest.requireActual("react");
  const motionComponents = new Map();
  const motionProps = new Set([
    "animate",
    "initial",
    "exit",
    "transition",
    "whileInView",
    "viewport",
    "variants",
    "whileHover",
    "whileTap",
  ]);

  return {
    motion: new Proxy(
      {},
      {
        get: (_target, element) => {
          if (!motionComponents.has(element)) {
            motionComponents.set(element, ({ children, ...props }) => {
              const domProps = Object.fromEntries(
                Object.entries(props).filter(([name]) => !motionProps.has(name))
              );

              return React.createElement(element, domProps, children);
            });
          }

          return motionComponents.get(element);
        },
      }
    ),
  };
});

describe("Project search", () => {
  it("filters projects by their technologies", () => {
    render(<Project />);

    fireEvent.change(screen.getByRole("searchbox", { name: "Search projects" }), {
      target: { value: "unity" },
    });

    expect(
      screen.getByRole("heading", { name: "Bazooka Blast" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Alpha Impact" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Notary Lawyer" })
    ).not.toBeInTheDocument();
    expect(screen.getByText("2 projects found")).toBeInTheDocument();
  });

  it("shows an empty state when no project matches", () => {
    render(<Project />);

    fireEvent.change(screen.getByRole("searchbox", { name: "Search projects" }), {
      target: { value: "no matching project" },
    });

    expect(screen.getByText(/No projects match/)).toBeInTheDocument();
  });
});

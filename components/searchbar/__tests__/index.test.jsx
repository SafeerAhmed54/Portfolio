import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "../index";

describe("SearchBar", () => {
  it("shows project search results and updates the query", () => {
    const onChange = jest.fn();

    render(
      <SearchBar
        value="react"
        onChange={onChange}
        resultCount={2}
        totalCount={5}
      />
    );

    expect(screen.getByRole("searchbox", { name: "Search projects" })).toHaveValue(
      "react"
    );
    expect(screen.getByText("2 projects found")).toBeInTheDocument();

    fireEvent.change(screen.getByRole("searchbox"), {
      target: { value: "unity" },
    });

    expect(onChange).toHaveBeenCalledWith("unity");
  });

  it("clears the query and announces when all projects are shown", () => {
    const onChange = jest.fn();

    render(
      <SearchBar
        value="react"
        onChange={onChange}
        resultCount={2}
        totalCount={5}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Clear project search" }));

    expect(onChange).toHaveBeenCalledWith("");
  });

  it("shows all projects for a blank query", () => {
    render(
      <SearchBar value=" " onChange={jest.fn()} resultCount={1} totalCount={5} />
    );

    expect(screen.getByText("Showing all 5 projects")).toBeInTheDocument();
  });

  it("uses singular result text", () => {
    render(
      <SearchBar value="react" onChange={jest.fn()} resultCount={1} totalCount={5} />
    );

    expect(screen.getByText("1 project found")).toBeInTheDocument();
  });
});

"use client";

const SearchBar = ({ value, onChange, resultCount, totalCount }) => {
  const resultLabel = `${resultCount} ${resultCount === 1 ? "project" : "projects"} found`;

  return (
    <div className="mb-10" role="search" aria-label="Search projects">
      <div className="relative max-w-xl">
        <label htmlFor="project-search" className="sr-only">
          Search projects
        </label>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" strokeWidth="2" />
          <path d="m16 16 4 4" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          id="project-search"
          type="text"
          role="searchbox"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search projects, technologies, or categories..."
          className="min-h-12 w-full rounded-lg border border-gray-700 bg-gray-950/80 py-3 pl-12 pr-12 text-white placeholder:text-gray-500 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
          aria-describedby="project-search-results"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-2 top-1/2 flex min-h-10 min-w-10 -translate-y-1/2 items-center justify-center rounded-md text-gray-400 transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Clear project search"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="m6 6 12 12M18 6 6 18"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>
      <p
        id="project-search-results"
        className="mt-3 text-sm text-gray-400"
        aria-live="polite"
      >
        {value.trim() ? resultLabel : `Showing all ${totalCount} projects`}
      </p>
    </div>
  );
};

export default SearchBar;

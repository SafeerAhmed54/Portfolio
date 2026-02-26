import '@testing-library/jest-dom'

// Mock window.scrollTo which is not implemented in jsdom
global.window.scrollTo = jest.fn();

// Mock window dimensions for mobile viewport testing
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 375, // Mobile viewport width
});

Object.defineProperty(window, 'innerHeight', {
  writable: true,
  configurable: true,
  value: 667, // Mobile viewport height
});

// Mock window.matchMedia with smart media query evaluation
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  configurable: true,
  value: jest.fn().mockImplementation((query) => {
    // Parse max-width queries
    const maxWidthMatch = query.match(/max-width:\s*(\d+)px/);
    if (maxWidthMatch) {
      const maxWidth = parseInt(maxWidthMatch[1], 10);
      return {
        matches: window.innerWidth <= maxWidth,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      };
    }
    
    // Parse prefers-reduced-motion - default to false unless test overrides
    if (query.includes('prefers-reduced-motion')) {
      return {
        matches: false, // Default: no reduced motion preference
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      };
    }
    
    // Default: no match
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  }),
});
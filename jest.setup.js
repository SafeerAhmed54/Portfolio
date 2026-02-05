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
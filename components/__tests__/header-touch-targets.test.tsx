import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../header';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <button {...props}>{children}</button>,
    svg: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <svg {...props}>{children}</svg>,
    path: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <path {...props}>{children}</path>,
    header: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <header {...props}>{children}</header>,
    nav: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <nav {...props}>{children}</nav>,
    span: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => children,
}));

// Mock createPortal to render in the same container
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (children: React.ReactNode) => children,
}));

describe('Header Touch Target Sizing', () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    });
    
    // Mock window.innerWidth for mobile viewport (767px is below 768px breakpoint)
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 767,
    });
    
    // Mock matchMedia for orientation
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: query === '(orientation: portrait)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test('mobile menu button meets minimum touch target size (48px)', () => {
    render(<Header />);
    
    const mobileMenuButton = screen.getByRole('button', { 
      name: /open mobile navigation menu/i 
    });
    
    expect(mobileMenuButton).toBeInTheDocument();
    
    // Check computed styles for minimum touch target size
    const minHeight = mobileMenuButton.style.minHeight;
    const minWidth = mobileMenuButton.style.minWidth;
    
    expect(minHeight).toBe('48px');
    expect(minWidth).toBe('48px');
  });

  test('desktop navigation links meet minimum touch target size (48px)', () => {
    render(<Header />);
    
    // Get desktop navigation links (hidden on mobile with md:flex)
    const homeLink = screen.getByRole('link', { name: /home/i });
    
    expect(homeLink).toBeInTheDocument();
    
    // Check computed styles for minimum touch target size
    const minHeight = homeLink.style.minHeight;
    const minWidth = homeLink.style.minWidth;
    const padding = homeLink.style.padding;
    
    expect(minHeight).toBe('48px');
    expect(minWidth).toBe('48px');
    expect(padding).toBe('12px 16px');
  });

  test('desktop resume button meets minimum touch target size (48px)', () => {
    render(<Header />);
    
    const resumeButton = screen.getByRole('link', { 
      name: /download resume pdf file/i 
    });
    
    expect(resumeButton).toBeInTheDocument();
    
    // Check computed styles for minimum touch target size
    const minHeight = resumeButton.style.minHeight;
    
    expect(minHeight).toBe('48px');
  });

  test('all interactive elements have proper touch-action and tap highlight styles', () => {
    render(<Header />);
    
    // Get all interactive elements
    const mobileMenuButton = screen.getByRole('button', { 
      name: /open mobile navigation menu/i 
    });
    const resumeButton = screen.getByRole('link', { 
      name: /download resume pdf file/i 
    });
    const homeLink = screen.getByRole('link', { name: /home/i });
    
    // Check touch-action and tap highlight properties
    [mobileMenuButton, resumeButton, homeLink].forEach(element => {
      expect(element.style.touchAction).toBe('manipulation');
      expect(element.style.WebkitTapHighlightColor).toBe('rgba(6, 182, 212, 0.1)');
    });
  });

  test('mobile navigation links meet enhanced touch target size (56px) when menu is open', async () => {
    render(<Header />);
    
    // Open mobile menu by clicking the button
    const mobileMenuButton = screen.getByRole('button', { 
      name: /open mobile navigation menu/i 
    });
    
    // Simulate click to open menu wrapped in act
    await act(async () => {
      mobileMenuButton.click();
      // Wait for state updates
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    // Wait for menu to appear and check navigation links
    // The mobile menu links should now be visible
    const allLinks = screen.getAllByRole('link');
    
    // Filter to get only the mobile navigation links (they have larger text and different styling)
    // Mobile links have text-2xl class and are inside the mobile menu overlay
    const mobileNavLinks = allLinks.filter(link => {
      const style = link.style;
      return style.minHeight === '56px' && style.minWidth === '56px';
    });
    
    // Should have 6 navigation links in mobile menu
    expect(mobileNavLinks.length).toBeGreaterThanOrEqual(6);
    
    // Check that mobile navigation links have enhanced touch targets
    mobileNavLinks.forEach(link => {
      const minHeight = link.style.minHeight;
      const minWidth = link.style.minWidth;
      
      expect(minHeight).toBe('56px');
      expect(minWidth).toBe('56px');
    });
  });

  test('mobile menu close button meets minimum touch target size (48px)', async () => {
    render(<Header />);
    
    // Open mobile menu
    const mobileMenuButton = screen.getByRole('button', { 
      name: /open mobile navigation menu/i 
    });
    
    await act(async () => {
      mobileMenuButton.click();
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    // Find all close buttons (there are two: the hamburger button and the overlay close button)
    const closeButtons = screen.getAllByRole('button', { 
      name: /close mobile navigation menu/i 
    });
    
    // Both should have proper touch targets
    closeButtons.forEach(closeButton => {
      expect(closeButton).toBeInTheDocument();
      
      // Check touch target size
      const minHeight = closeButton.style.minHeight;
      const minWidth = closeButton.style.minWidth;
      
      expect(minHeight).toBe('48px');
      expect(minWidth).toBe('48px');
    });
  });

  test('mobile resume button meets enhanced touch target size (56px)', async () => {
    render(<Header />);
    
    // Open mobile menu
    const mobileMenuButton = screen.getByRole('button', { 
      name: /open mobile navigation menu/i 
    });
    
    await act(async () => {
      mobileMenuButton.click();
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    // Find mobile resume button - it should have 56px min-height
    const allResumeButtons = screen.getAllByRole('link', { 
      name: /download resume/i 
    });
    
    // The mobile resume button has minHeight of 56px
    const mobileResumeButton = allResumeButtons.find(btn => btn.style.minHeight === '56px');
    
    expect(mobileResumeButton).toBeInTheDocument();
    
    // Check enhanced touch target size for mobile
    const minHeight = mobileResumeButton!.style.minHeight;
    
    expect(minHeight).toBe('56px');
  });
});
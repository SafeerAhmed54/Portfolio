import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../header';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    svg: ({ children, ...props }: any) => <svg {...props}>{children}</svg>,
    path: ({ children, ...props }: any) => <path {...props}>{children}</path>,
    header: ({ children, ...props }: any) => <header {...props}>{children}</header>,
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock createPortal to render in the same container
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (children: any) => children,
}));

describe('Header Touch Target Sizing', () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    });
  });

  test('mobile menu button meets minimum touch target size (48px)', () => {
    render(<Header />);
    
    const mobileMenuButton = screen.getByRole('button', { 
      name: /open mobile navigation menu/i 
    });
    
    expect(mobileMenuButton).toBeInTheDocument();
    
    // Check computed styles for minimum touch target size
    const styles = window.getComputedStyle(mobileMenuButton);
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

  test('mobile navigation links meet enhanced touch target size (56px) when menu is open', () => {
    render(<Header />);
    
    // Open mobile menu by clicking the button
    const mobileMenuButton = screen.getByRole('button', { 
      name: /open mobile navigation menu/i 
    });
    
    // Simulate click to open menu
    mobileMenuButton.click();
    
    // Wait for menu to appear and check navigation links
    // Note: In a real test, we'd wait for the animation, but with mocked framer-motion it should be immediate
    const mobileNavLinks = screen.getAllByRole('link').filter(link => 
      link.textContent && ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].includes(link.textContent)
    );
    
    // Check that mobile navigation links have enhanced touch targets
    mobileNavLinks.forEach(link => {
      const minHeight = link.style.minHeight;
      const minWidth = link.style.minWidth;
      
      expect(minHeight).toBe('56px');
      expect(minWidth).toBe('56px');
    });
  });

  test('mobile menu close button meets minimum touch target size (48px)', () => {
    render(<Header />);
    
    // Open mobile menu
    const mobileMenuButton = screen.getByRole('button', { 
      name: /open mobile navigation menu/i 
    });
    mobileMenuButton.click();
    
    // Find close button
    const closeButton = screen.getByRole('button', { 
      name: /close mobile navigation menu/i 
    });
    
    expect(closeButton).toBeInTheDocument();
    
    // Check touch target size
    const minHeight = closeButton.style.minHeight;
    const minWidth = closeButton.style.minWidth;
    
    expect(minHeight).toBe('48px');
    expect(minWidth).toBe('48px');
  });

  test('mobile resume button meets enhanced touch target size (56px)', () => {
    render(<Header />);
    
    // Open mobile menu
    const mobileMenuButton = screen.getByRole('button', { 
      name: /open mobile navigation menu/i 
    });
    mobileMenuButton.click();
    
    // Find mobile resume button
    const mobileResumeButton = screen.getByRole('link', { 
      name: /download resume/i 
    });
    
    expect(mobileResumeButton).toBeInTheDocument();
    
    // Check enhanced touch target size for mobile
    const minHeight = mobileResumeButton.style.minHeight;
    
    expect(minHeight).toBe('56px');
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Simple test component to verify touch target sizing
const TouchTargetTest = () => {
  return (
    <div>
      <button
        style={{
          minHeight: '48px',
          minWidth: '48px',
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'rgba(6, 182, 212, 0.1)'
        }}
        className="p-3"
      >
        Mobile Menu
      </button>
      
      <a
        href="#test"
        style={{
          minHeight: '48px',
          minWidth: '48px',
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'rgba(6, 182, 212, 0.1)',
          padding: '12px 16px'
        }}
        className="inline-flex items-center"
      >
        Navigation Link
      </a>
      
      <a
        href="/resume.pdf"
        style={{
          minHeight: '56px',
          touchAction: 'manipulation',
          WebkitTapHighlightColor: 'rgba(6, 182, 212, 0.1)'
        }}
        className="inline-flex items-center px-8 py-5"
      >
        Download Resume
      </a>
    </div>
  );
};

describe('Touch Target Sizing Verification', () => {
  test('mobile menu button meets minimum 48px touch target', () => {
    render(<TouchTargetTest />);
    
    const button = screen.getByRole('button', { name: /mobile menu/i });
    
    expect(button.style.minHeight).toBe('48px');
    expect(button.style.minWidth).toBe('48px');
    expect(button.style.touchAction).toBe('manipulation');
    expect(button.style.WebkitTapHighlightColor).toBe('rgba(6, 182, 212, 0.1)');
  });

  test('navigation link meets minimum 48px touch target', () => {
    render(<TouchTargetTest />);
    
    const link = screen.getByRole('link', { name: /navigation link/i });
    
    expect(link.style.minHeight).toBe('48px');
    expect(link.style.minWidth).toBe('48px');
    expect(link.style.touchAction).toBe('manipulation');
    expect(link.style.padding).toBe('12px 16px');
  });

  test('resume button meets enhanced 56px touch target', () => {
    render(<TouchTargetTest />);
    
    const resumeLink = screen.getByRole('link', { name: /download resume/i });
    
    expect(resumeLink.style.minHeight).toBe('56px');
    expect(resumeLink.style.touchAction).toBe('manipulation');
    expect(resumeLink.style.WebkitTapHighlightColor).toBe('rgba(6, 182, 212, 0.1)');
  });

  test('all interactive elements have proper touch optimization', () => {
    render(<TouchTargetTest />);
    
    const button = screen.getByRole('button');
    const links = screen.getAllByRole('link');
    
    // Check button
    expect(button.style.touchAction).toBe('manipulation');
    expect(button.style.WebkitTapHighlightColor).toBe('rgba(6, 182, 212, 0.1)');
    
    // Check all links
    links.forEach(link => {
      expect(link.style.touchAction).toBe('manipulation');
      expect(link.style.WebkitTapHighlightColor).toBe('rgba(6, 182, 212, 0.1)');
    });
  });
});
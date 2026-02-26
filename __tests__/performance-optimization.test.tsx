/**
 * Bug Condition Exploration Test - Performance Optimization
 * 
 * **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8**
 * 
 * CRITICAL: This test MUST FAIL on unfixed code - failure confirms the bug exists
 * 
 * This test encodes the expected behavior after the fix is implemented.
 * It will validate that the system properly detects device capabilities and
 * adapts animation complexity accordingly.
 * 
 * Expected outcome on UNFIXED code:
 * - Test FAILS because mobile devices render 40 particles instead of 15
 * - Test FAILS because touch devices render mouse components
 * - Test FAILS because low-end devices don't simplify animations
 * - Test FAILS because prefers-reduced-motion is ignored
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { fc, it } from '@fast-check/jest';
import AnimatedBackground from '@/components/background';
import InteractiveCursor from '@/components/interactive-cursor';
import MouseLights from '@/components/mouse-lights';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, style, animate, transition, variants, initial, ...props }: any) => (
      <div className={className} style={style} data-testid={props['data-testid']} {...props}>
        {children}
      </div>
    ),
  },
  useMotionValue: (initial: number) => ({
    set: jest.fn(),
    get: () => initial,
  }),
  useSpring: (value: any) => value,
}));

describe('Performance Optimization - Bug Condition Exploration', () => {
  describe('Property 1: Fault Condition - Performance Degradation on Limited Devices', () => {
    
    it('should render reduced particle count (15) on mobile devices (viewport <= 768px)', () => {
      // **Validates: Requirements 2.1, 2.5**
      // Simulate mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375, // Mobile width
      });
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 667, // Mobile height
      });

      const { container } = render(<AnimatedBackground />);
      
      // Count matrix particles (they have key starting with "matrix-")
      const matrixParticles = container.querySelectorAll('[class*="text-cyan-400"]');
      
      // EXPECTED: Should render 15 particles on mobile
      // ACTUAL (unfixed): Will render 40 particles
      expect(matrixParticles.length).toBe(15);
    });

    it('should NOT render InteractiveCursor on touch devices (maxTouchPoints > 0)', () => {
      // **Validates: Requirements 2.3, 2.6**
      // Simulate touch device
      Object.defineProperty(navigator, 'maxTouchPoints', {
        writable: true,
        configurable: true,
        value: 5, // Touch device
      });

      const { container } = render(<InteractiveCursor />);
      
      // EXPECTED: Should return null and not render anything
      // ACTUAL (unfixed): Will render cursor elements
      const cursorElements = container.querySelectorAll('[class*="cursor"]');
      expect(cursorElements.length).toBe(0);
      expect(container.firstChild).toBeNull();
    });

    it('should NOT render MouseLights on touch devices (maxTouchPoints > 0)', () => {
      // **Validates: Requirements 2.3, 2.6**
      // Simulate touch device
      Object.defineProperty(navigator, 'maxTouchPoints', {
        writable: true,
        configurable: true,
        value: 5, // Touch device
      });

      const { container } = render(<MouseLights />);
      
      // EXPECTED: Should return null and not render anything
      // ACTUAL (unfixed): Will render mouse light elements
      const lightElements = container.querySelectorAll('[class*="absolute"]');
      expect(lightElements.length).toBe(0);
      expect(container.firstChild).toBeNull();
    });

    it('should use simplified animations on low-end devices (CPU cores <= 4)', () => {
      // **Validates: Requirements 2.2, 2.4, 2.7**
      // Simulate low-end device
      Object.defineProperty(navigator, 'hardwareConcurrency', {
        writable: true,
        configurable: true,
        value: 4, // 4-core CPU (low-end threshold)
      });

      const { container } = render(<AnimatedBackground />);
      
      // EXPECTED: Should render fewer floating elements (6 instead of 12)
      // ACTUAL (unfixed): Will render 12 floating elements
      const floatingElements = container.querySelectorAll('[class*="border-2 border-cyan-400"]');
      
      // On low-end devices, should have reduced geometric elements
      // Unfixed code will have more elements
      expect(floatingElements.length).toBeLessThanOrEqual(8);
    });

    it('should respect prefers-reduced-motion preference', () => {
      // **Validates: Requirements 2.8**
      // Mock matchMedia to simulate prefers-reduced-motion
      const mockMatchMedia = jest.fn().mockImplementation((query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));

      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        configurable: true,
        value: mockMatchMedia,
      });

      const { container } = render(<AnimatedBackground />);
      
      // EXPECTED: Should render minimal or no particles when reduced motion is preferred
      // ACTUAL (unfixed): Will render all 40 particles regardless
      const matrixParticles = container.querySelectorAll('[class*="text-cyan-400"]');
      
      // With reduced motion, should have 0 or very few particles
      expect(matrixParticles.length).toBeLessThanOrEqual(5);
    });

    it('should disable scanning lines and large geometric shapes on mobile', () => {
      // **Validates: Requirements 2.1, 2.5**
      // Simulate mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });

      const { container } = render(<AnimatedBackground />);
      
      // EXPECTED: Should not render large geometric shapes on mobile
      // ACTUAL (unfixed): Will render all shapes
      const largeShapes = container.querySelectorAll('[class*="w-64 h-64"], [class*="w-48 h-48"], [class*="w-32 h-32"]');
      
      // On mobile, these resource-intensive shapes should be disabled
      expect(largeShapes.length).toBe(0);
    });

    it('should not add custom-cursor-active class on touch devices', () => {
      // **Validates: Requirements 2.3, 2.6**
      // Simulate touch device
      Object.defineProperty(navigator, 'maxTouchPoints', {
        writable: true,
        configurable: true,
        value: 5,
      });

      // Clear any existing classes
      document.body.className = '';

      render(<InteractiveCursor />);
      
      // EXPECTED: Should not add custom cursor class on touch devices
      // ACTUAL (unfixed): Will add the class
      expect(document.body.classList.contains('custom-cursor-active')).toBe(false);
    });
  });

  describe('Property-Based Test: Device Context Variations', () => {
    // Property-based test to explore various device configurations
    it.prop([
      fc.record({
        viewportWidth: fc.integer({ min: 320, max: 1920 }),
        viewportHeight: fc.integer({ min: 568, max: 1080 }),
        cpuCores: fc.integer({ min: 2, max: 16 }),
        maxTouchPoints: fc.integer({ min: 0, max: 10 }),
        prefersReducedMotion: fc.boolean(),
      })
    ])('should adapt performance based on device capabilities', (deviceContext) => {
      // **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8**
      
      // Setup device context
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: deviceContext.viewportWidth,
      });
      Object.defineProperty(window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: deviceContext.viewportHeight,
      });
      Object.defineProperty(navigator, 'hardwareConcurrency', {
        writable: true,
        configurable: true,
        value: deviceContext.cpuCores,
      });
      Object.defineProperty(navigator, 'maxTouchPoints', {
        writable: true,
        configurable: true,
        value: deviceContext.maxTouchPoints,
      });

      const mockMatchMedia = jest.fn().mockImplementation((query: string) => ({
        matches: query === '(prefers-reduced-motion: reduce)' && deviceContext.prefersReducedMotion,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));

      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        configurable: true,
        value: mockMatchMedia,
      });

      const isMobile = deviceContext.viewportWidth <= 768;
      const isLowEnd = deviceContext.cpuCores <= 4;
      const isTouchDevice = deviceContext.maxTouchPoints > 0;

      // Test AnimatedBackground
      const { container: bgContainer } = render(<AnimatedBackground />);
      const matrixParticles = bgContainer.querySelectorAll('[class*="text-cyan-400"]');

      if (isMobile) {
        // Mobile devices should render 15 particles
        expect(matrixParticles.length).toBeLessThanOrEqual(15);
      } else if (isLowEnd) {
        // Low-end devices should render reduced particles
        expect(matrixParticles.length).toBeLessThan(40);
      } else if (deviceContext.prefersReducedMotion) {
        // Reduced motion should have minimal particles
        expect(matrixParticles.length).toBeLessThanOrEqual(5);
      }

      // Test mouse components on touch devices
      if (isTouchDevice) {
        const { container: cursorContainer } = render(<InteractiveCursor />);
        const { container: lightsContainer } = render(<MouseLights />);
        
        // Touch devices should not render mouse components
        expect(cursorContainer.firstChild).toBeNull();
        expect(lightsContainer.firstChild).toBeNull();
      }
    });
  });
});

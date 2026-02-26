"use client";
import { useState, useEffect } from "react";

export interface PerformanceConfig {
  isMobile: boolean;
  isLowEnd: boolean;
  isTouchDevice: boolean;
  prefersReducedMotion: boolean;
  shouldReduceAnimations: boolean;
  shouldDisableMouseEffects: boolean;
  shouldUseSimplifiedAnimations: boolean;
  particleCount: number;
  floatingElementCount: number;
}

export function usePerformanceConfig(): PerformanceConfig {
  const [config, setConfig] = useState<PerformanceConfig>(() => {
    // SSR safety - return default high-end config on server
    if (typeof window === "undefined") {
      return {
        isMobile: false,
        isLowEnd: false,
        isTouchDevice: false,
        prefersReducedMotion: false,
        shouldReduceAnimations: false,
        shouldDisableMouseEffects: false,
        shouldUseSimplifiedAnimations: false,
        particleCount: 40,
        floatingElementCount: 12,
      };
    }

    return getPerformanceConfig();
  });

  useEffect(() => {
    // Update config on mount (for tests that set window properties before render)
    setConfig(getPerformanceConfig());
  }, []);

  return config;
}

function getPerformanceConfig(): PerformanceConfig {
  // Device detection with fallback for test environments
  // Use both matchMedia and direct innerWidth check for reliability
  const matchMediaMobile = window.matchMedia("(max-width: 768px)").matches;
  const directWidthCheck = window.innerWidth <= 768;
  const isMobile = matchMediaMobile || directWidthCheck;
  
  const isTouchDevice = navigator.maxTouchPoints > 0;
  const isLowEnd = navigator.hardwareConcurrency <= 4;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Determine performance settings
  const shouldReduceAnimations = isMobile || isLowEnd;
  const shouldDisableMouseEffects = isTouchDevice;
  const shouldUseSimplifiedAnimations = isLowEnd;

  // Adaptive particle count
  let particleCount = 40; // Desktop default
  let floatingElementCount = 12; // Desktop default

  if (prefersReducedMotion) {
    particleCount = 0;
    floatingElementCount = 0;
  } else if (isMobile) {
    particleCount = 15;
    floatingElementCount = 6;
  } else if (isLowEnd) {
    particleCount = 25;
    floatingElementCount = 8;
  }

  return {
    isMobile,
    isLowEnd,
    isTouchDevice,
    prefersReducedMotion,
    shouldReduceAnimations,
    shouldDisableMouseEffects,
    shouldUseSimplifiedAnimations,
    particleCount,
    floatingElementCount,
  };
}

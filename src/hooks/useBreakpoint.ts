import { useState, useEffect } from 'react';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

type Breakpoint = keyof typeof breakpoints;

export function useBreakpoint() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('sm');

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      let breakpoint: Breakpoint = 'sm';

      if (width >= breakpoints['2xl']) breakpoint = '2xl';
      else if (width >= breakpoints.xl) breakpoint = 'xl';
      else if (width >= breakpoints.lg) breakpoint = 'lg';
      else if (width >= breakpoints.md) breakpoint = 'md';

      setCurrentBreakpoint(breakpoint);
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  const isAbove = (breakpoint: Breakpoint): boolean => {
    return breakpoints[currentBreakpoint] >= breakpoints[breakpoint];
  };

  const isBelow = (breakpoint: Breakpoint): boolean => {
    return breakpoints[currentBreakpoint] < breakpoints[breakpoint];
  };

  return { currentBreakpoint, isAbove, isBelow };
}
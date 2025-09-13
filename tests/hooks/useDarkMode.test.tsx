import { renderHook, act } from '@testing-library/react';
import { useDarkMode } from '../../src/hooks/useDarkMode';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock as any;

describe('useDarkMode', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Mock document.documentElement
    Object.defineProperty(document.documentElement, 'classList', {
      value: {
        add: jest.fn(),
        remove: jest.fn(),
      },
      writable: true,
    });
  });

  test('initializes with false by default', () => {
    localStorageMock.getItem.mockReturnValue(null);
    const { result } = renderHook(() => useDarkMode());
    
    expect(result.current.isDarkMode).toBe(false);
  });

  test('toggles dark mode', () => {
    localStorageMock.getItem.mockReturnValue(null);
    const { result } = renderHook(() => useDarkMode());
    
    act(() => {
      result.current.toggle();
    });
    
    expect(result.current.isDarkMode).toBe(true);
  });

  test('persists dark mode to localStorage', () => {
    localStorageMock.getItem.mockReturnValue(null);
    const { result } = renderHook(() => useDarkMode());
    
    act(() => {
      result.current.toggle();
    });
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith('darkMode', 'true');
  });
});
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { NightModeSwitch } from "../src/components/NightModeSwitch";
import * as useDarkModeHook from "../src/hooks/useDarkMode";

describe("NightModeSwitch", () => {
  it("renders with default props", () => {
    jest.spyOn(useDarkModeHook, "useDarkMode").mockReturnValue({
      isDarkMode: false,
      toggle: jest.fn(),
    });
    const { getByRole } = render(<NightModeSwitch />);
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label", "Toggle dark mode");
  });

  it("shows sun icon when not in dark mode", () => {
    jest.spyOn(useDarkModeHook, "useDarkMode").mockReturnValue({
      isDarkMode: false,
      toggle: jest.fn(),
    });
    const { container } = render(<NightModeSwitch />);
    // Sun icon: should have a <circle> element
    expect(container.querySelector("circle")).toBeInTheDocument();
  });

  it("shows moon icon when in dark mode", () => {
    jest.spyOn(useDarkModeHook, "useDarkMode").mockReturnValue({
      isDarkMode: true,
      toggle: jest.fn(),
    });
    const { container } = render(<NightModeSwitch />);
    // Moon icon: should have a <path> element with moon shape
    expect(container.querySelector("path")).toBeInTheDocument();
  });

  it("calls toggle on click", () => {
    const toggle = jest.fn();
    jest.spyOn(useDarkModeHook, "useDarkMode").mockReturnValue({
      isDarkMode: false,
      toggle,
    });
    const { getByRole } = render(<NightModeSwitch />);
    fireEvent.click(getByRole("button"));
    expect(toggle).toHaveBeenCalled();
  });

  it("applies custom className", () => {
    jest.spyOn(useDarkModeHook, "useDarkMode").mockReturnValue({
      isDarkMode: false,
      toggle: jest.fn(),
    });
    const { getByRole } = render(<NightModeSwitch className="test-class" />);
    expect(getByRole("button")).toHaveClass("test-class");
  });
});
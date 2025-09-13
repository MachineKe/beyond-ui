import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../src/components/Input';

describe('Input', () => {
  test('renders input with placeholder', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  test('handles input changes', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    
    await user.type(input, 'hello');
    expect(handleChange).toHaveBeenCalledTimes(5); // One call per character
  });

  test('applies error variant classes', () => {
    render(<Input variant="error" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-danger-500');
  });

  test('applies size classes correctly', () => {
    render(<Input inputSize="lg" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('h-12', 'px-4');
  });
});
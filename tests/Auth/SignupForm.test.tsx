import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SignupForm } from '../../src/components/Auth/SignupForm';
import { AuthProvider } from '../../src/contexts/AuthContext';

// Mock the auth service
jest.mock('../../src/services/authService', () => ({
  authService: {
    signup: jest.fn(),
    getCurrentUser: jest.fn(() => null),
    isAuthenticated: jest.fn(() => false),
  },
}));

const renderWithAuth = (component: React.ReactElement) => {
  return render(
    <AuthProvider>
      {component}
    </AuthProvider>
  );
};

describe('SignupForm', () => {
  const mockOnSuccess = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders signup form with all fields', () => {
    renderWithAuth(<SignupForm onSuccess={mockOnSuccess} />);
    
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument();
  });

  test('validates password strength', async () => {
    const user = userEvent.setup();
    renderWithAuth(<SignupForm onSuccess={mockOnSuccess} />);
    
    const passwordInput = screen.getByLabelText(/^password$/i);
    
    // Test weak password
    await user.type(passwordInput, 'weak');
    await waitFor(() => {
      expect(screen.getByText(/weak/i)).toBeInTheDocument();
    });
    
    // Test strong password
    await user.clear(passwordInput);
    await user.type(passwordInput, 'StrongPassword123!');
    await waitFor(() => {
      expect(screen.getByText(/strong|excellent/i)).toBeInTheDocument();
    });
  });

  test('validates password confirmation', async () => {
    const user = userEvent.setup();
    renderWithAuth(<SignupForm onSuccess={mockOnSuccess} />);
    
    const passwordInput = screen.getByLabelText(/^password$/i);
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
    const submitButton = screen.getByRole('button', { name: /create account/i });
    
    await user.type(passwordInput, 'Password123!');
    await user.type(confirmPasswordInput, 'DifferentPassword123!');
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
    });
  });

  test('requires terms acceptance', async () => {
    const user = userEvent.setup();
    renderWithAuth(<SignupForm onSuccess={mockOnSuccess} />);
    
    const submitButton = screen.getByRole('button', { name: /create account/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/you must accept the terms/i)).toBeInTheDocument();
    });
  });

  test('validates name format', async () => {
    const user = userEvent.setup();
    renderWithAuth(<SignupForm onSuccess={mockOnSuccess} />);
    
    const nameInput = screen.getByLabelText(/full name/i);
    const submitButton = screen.getByRole('button', { name: /create account/i });
    
    await user.type(nameInput, '123');
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/name can only contain letters and spaces/i)).toBeInTheDocument();
    });
  });
});
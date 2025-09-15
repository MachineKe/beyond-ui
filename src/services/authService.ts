import Cookies from 'js-cookie';
import type { LoginCredentials, SignupData, AuthResponse, User } from '../types/auth';

// Mock API service - replace with actual API calls
class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';
  private readonly USER_KEY = 'auth_user';

  /**
   * Simulate API login
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock validation - replace with actual API call
    if (credentials.email === 'admin@example.com' && credentials.password === 'Password123!') {
      const user: User = {
        id: '1',
        email: credentials.email,
        name: 'John Doe',
        role: 'admin',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=64',
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      };

      const token = 'mock_jwt_token_' + Date.now();
      const refreshToken = 'mock_refresh_token_' + Date.now();

      // Store tokens
      const cookieOptions = {
        expires: credentials.rememberMe ? 30 : undefined, // 30 days if remember me
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict' as const,
      };

      Cookies.set(this.TOKEN_KEY, token, cookieOptions);
      Cookies.set(this.REFRESH_TOKEN_KEY, refreshToken, cookieOptions);
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));

      return { user, token, refreshToken };
    }

    throw new Error('Invalid email or password');
  }

  /**
   * Simulate API signup
   */
  async signup(data: SignupData): Promise<AuthResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock email validation - replace with actual API call
    if (data.email === 'existing@example.com') {
      throw new Error('An account with this email already exists');
    }

    const user: User = {
      id: Date.now().toString(),
      email: data.email,
      name: data.name,
      role: 'user',
      createdAt: new Date().toISOString(),
    };

    const token = 'mock_jwt_token_' + Date.now();
    const refreshToken = 'mock_refresh_token_' + Date.now();

    // Store tokens
    const cookieOptions = {
      expires: 7, // 7 days for new users
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict' as const,
    };

    Cookies.set(this.TOKEN_KEY, token, cookieOptions);
    Cookies.set(this.REFRESH_TOKEN_KEY, refreshToken, cookieOptions);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));

    return { user, token, refreshToken };
  }

  /**
   * Logout user and clear tokens
   */
  logout(): void {
    Cookies.remove(this.TOKEN_KEY);
    Cookies.remove(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  /**
   * Get current user from storage
   */
  getCurrentUser(): User | null {
    try {
      const userStr = localStorage.getItem(this.USER_KEY);
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  }

  /**
   * Get current token
   */
  getToken(): string | null {
    return Cookies.get(this.TOKEN_KEY) || null;
  }

  /**
   * Refresh authentication token
   */
  async refreshToken(): Promise<string> {
    const refreshToken = Cookies.get(this.REFRESH_TOKEN_KEY);
    
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    const newToken = 'mock_jwt_token_refreshed_' + Date.now();
    
    Cookies.set(this.TOKEN_KEY, newToken, {
      expires: 1, // 1 day
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    return newToken;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    const token = this.getToken();
    const user = this.getCurrentUser();
    return !!(token && user);
  }
}

export const authService = new AuthService();
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginGoogleAPI } from './authAPI';

// Thunk for Google login
export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (_, { dispatch }) => {
    // This will redirect to Google OAuth, so no further code runs here
    loginGoogleAPI();
    // After redirect/callback, handle user state in a callback page
  }
);
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: null | { id: string; email: string; role: string };
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ id: string; email: string; role: string }>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

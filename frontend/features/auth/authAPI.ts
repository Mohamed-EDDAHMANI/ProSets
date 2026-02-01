import api from "@/features/auth/api";
export async function loginGoogleAPI() {
  // Redirect to backend Google OAuth endpoint
  const { data } = await api.get('/auth/login/google');
  console.log('Redirecting to Google OAuth:', data);
  return data;
}

export async function registerGoogleAPI(profile: { email: string; firstName: string; lastName: string; role: string }) {
  const { data } = await api.post('/auth/register/google', profile);
  return data;
}

export async function logoutAPI() {
  const { data } = await api.post('/auth/logout');
  return data;
}
// Example API utility for auth
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function loginAPI(email: string, password: string) {
  console.log('Logging out user');
  const { data } = await api.post('/auth/login', { email, password });
  return data;
}

export async function registerAPI(email: string, password: string, firstName: string, lastName: string, role: string) {
  const { data } = await api.post('/auth/register', { email, password, firstName, lastName, role });
  return data;
}

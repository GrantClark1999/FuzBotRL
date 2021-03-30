import { createContext } from 'react';

const stub = (): never => {
  throw new Error('You forgot to wrap your component in <AuthProvider>.');
};

export type AuthState = {
  hasSharedId: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLoggedIn: boolean;
  isModerator: boolean;
  token?: string;
  opaqueId?: string;
  role?: string;
  userId?: string;
};

export type AuthMethods = {
  authFetch: (url: string, method: string) => Promise<Response | string>;
};

export type AuthContext = AuthState & AuthMethods;

export const initialState: AuthState = {
  hasSharedId: false,
  isAuthenticated: false,
  isLoading: true,
  isLoggedIn: false,
  // This does guarantee the user is a moderator- this is fairly simple to bypass - so pass the JWT and verify
  // server-side that this is true. This, however, allows you to render client-side UI for users without holding on a backend to verify the JWT.
  // Additionally, this will only show if the user shared their ID, otherwise it will return false.
  isModerator: false,
  token: undefined,
  // similar to mod status, this isn't always verifiable, so have your backend verify before proceeding.
  opaqueId: undefined,
  role: undefined,
  userId: undefined,
};

export default createContext<AuthContext>({
  authFetch: stub,
  ...initialState,
});

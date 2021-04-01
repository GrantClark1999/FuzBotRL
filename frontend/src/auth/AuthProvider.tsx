import jwt from 'jsonwebtoken';
import { ReactNode, useCallback, useEffect, useState } from 'react';

import AuthContext from './AuthContext';

const twitch = window?.Twitch?.ext;

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMod, setIsMod] = useState(false);
  const [opaqueId, setOpaqueId] = useState<string>();
  const [role, setRole] = useState<string>();
  const [token, setToken] = useState<string>();
  const [userId, setUserId] = useState<string>();

  // checks to ensure there is a valid token in the state
  const isAuthenticated = !!token && !!opaqueId;

  useEffect(() => {
    twitch.onAuthorized(({ token, userId }) => {
      authUpdate(token, userId);
      setIsLoading(false);
    });
  }, []);

  const authFetch = useCallback(
    (url: string, method = 'GET') => {
      return new Promise<Response | string>((resolve, reject) => {
        if (isAuthenticated) {
          let headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          };

          fetch(url, {
            method,
            headers,
          })
            .then((response) => resolve(response))
            .catch((e) => reject(e));
        } else {
          reject('Unauthorized');
        }
      });
    },
    [token]
  );

  // update the token and opaque id used in the useAuth hook.
  // this is naive, and will work with whatever token is returned. under no circumstances should you use this logic to trust private data- you should always verify the token on the backend before displaying that data.
  function authUpdate(token: string, opaqueId: string) {
    try {
      const { role, user_id } = (jwt.decode(token) ?? {}) as DecodedJWT;
      setIsMod(!!role && ['broadcaster', 'moderator'].includes(role));
      setOpaqueId(opaqueId);
      setRole(role);
      setToken(token);
      setUserId(user_id);
    } catch (err) {
      setToken(undefined);
      setOpaqueId(undefined);
    }
  }
  return (
    <AuthContext.Provider
      value={{
        authFetch,
        hasSharedId: !!userId,
        isAuthenticated,
        isLoading,
        isLoggedIn: opaqueId?.[0] === 'U' ? true : false,
        isModerator: isMod,
        token,
        opaqueId,
        role,
        userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

type DecodedJWT = {
  role?: string;
  user_id?: string;
};

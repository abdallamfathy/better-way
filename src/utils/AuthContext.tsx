import React, { createContext, useContext } from "react";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";

interface AuthContextProps {
  user: any;
  token: string | null;
  options: {
    headers: {
      Authorization: string;
      "Content-Type": string;
    };
  };
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const user = useIsAuthenticated();
  const auth = useAuthUser();
  const token = auth()?.token;
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const value = { user, token, options };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

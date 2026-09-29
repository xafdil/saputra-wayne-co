import { create } from "zustand";

interface AuthState {
  email: string | null;
  userToken: string | null;
  isLoggedIn: boolean;
  setLogin: (email: string, userToken: string) => void;
  setLogout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: localStorage.getItem("authEmail"),
  userToken: localStorage.getItem("userToken"),
  isLoggedIn: !!localStorage.getItem("authEmail"),

  setLogin: (email, userToken) => {
    localStorage.setItem("authEmail", email);
    localStorage.setItem("userToken", userToken);

    set({
      email,
      userToken,
      isLoggedIn: true,
    });
  },

  setLogout: () => {
    localStorage.removeItem("authEmail");
    localStorage.removeItem("userToken");

    set({
      email: null,
      userToken: null,
      isLoggedIn: false,
    });
  },
}));

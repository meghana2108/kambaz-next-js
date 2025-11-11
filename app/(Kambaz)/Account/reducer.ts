import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  dob?: string;
}

export interface AccountState {
  currentUser: User | null;
}

// ✅ Load from localStorage if available
const getStoredUser = (): User | null => {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("currentUser");
  return stored ? JSON.parse(stored) : null;
};

const initialState: AccountState = {
  currentUser: getStoredUser(),
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    // ✅ Sets or clears the currently signed-in user
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;

      // ✅ Persist to localStorage
      if (typeof window !== "undefined") {
        if (action.payload) {
          localStorage.setItem("currentUser", JSON.stringify(action.payload));
        } else {
          localStorage.removeItem("currentUser");
        }
      }
    },
  },
});

export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;

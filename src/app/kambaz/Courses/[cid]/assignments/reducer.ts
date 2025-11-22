import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "@/app/kambaz/Database";
import type { Assignment } from "@/app/kambaz/Database";
import { v4 as uuidv4 } from "uuid";

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState: db.assignments as Assignment[],
  reducers: {
    addAssignment: (state, action: PayloadAction<Omit<Assignment, '_id'>>) => {
      state.push({
        _id: uuidv4(),
        ...action.payload
      } as Assignment);
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      return state.filter((a) => a._id !== action.payload);
    },
    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      return state.map((a) =>
        a._id === action.payload._id ? { ...action.payload } : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
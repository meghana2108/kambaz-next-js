"use client";
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

interface Assignment {
  _id: string;
  name: string;
  course: string;
  modules: string;
  notavailableuntil: string;
  due: string;
  points: number;
}

interface AssignmentsState {
  assignments: Assignment[];
}

const initialState: AssignmentsState = {
  assignments: assignments as Assignment[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: a }) => {
      const newAssignment: Assignment = {
        _id: uuidv4(),
        name: a.name ?? "New Assignment",
        course: a.course,
        modules: a.modules ?? "1",
        notavailableuntil: a.notavailableuntil ?? "2025-01-01",
        due: a.due ?? "2025-01-10",
        points: a.points ?? 100,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: id }) => {
      state.assignments = state.assignments.filter((a) => a._id !== id);
    },
    updateAssignment: (state, { payload: updated }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === updated._id ? updated : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import * as db from "./Database/index"  ;
interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentsState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentsState = {
  enrollments: db.enrollments,
};

const enrollmentsSlice = createSlice ({
    name: "enrollments",
    initialState,
    reducers: {
        enrollInCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      const exists = state.enrollments.some(
        (enrollment) => enrollment.user === userId && enrollment.course === courseId
      );
      if (!exists) {
        state.enrollments.push({
          _id: new Date().getTime().toString(),
          user: userId,
          course: courseId,
        });
    }
},
unenrollFromCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
},
});
export const {enrollInCourse, unenrollFromCourse} = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
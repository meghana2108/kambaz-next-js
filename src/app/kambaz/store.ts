"use client";
import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courses/reducer";
import modulesReducer from "./Courses/[cid]/modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/[cid]/assignments/reducer";
import enrollmentReducer from "./enrollmentReducer";
const store = configureStore ({
    reducer: {coursesReducer,
        modulesReducer,
        accountReducer,
        assignmentsReducer,
        enrollmentReducer
    },
});
console.log("Store created:", store.getState());
export type RootState = ReturnType <typeof store.getState>;
export default store;
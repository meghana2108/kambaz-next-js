/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {createSlice} from "@reduxjs/toolkit";
import modules from "../../../Database/modules.json";
import {v4 as uuidv4} from "uuid";
const initialState = {
    modules: modules,
}
const moduleSlice = createSlice ({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, {payload:module}) => {
            const newModule: any = {
                _id: uuidv4,
                lessons: [],
                name: module.name,
                course: module.course
            };
            state.modules = [...state.modules, newModule] as any;
        },
         deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter(
        (m: any) => m._id !== moduleId);
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },
    },
});
export const { addModule, deleteModule, updateModule, editModule } = moduleSlice.actions;
export default moduleSlice.reducer;

"use client";

import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunction from "./PassingFunction";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariables from "./DateStateVariables";
import ObjectStateVariables from "./ObjectStateVariables";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponents from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import TodoList from "../lab4/ReduxExamples/todos/todoList";

// ✅ This component has Redux context (so useSelector works here)
function Lab4Content() {
  const todoState = useSelector((state: any) => state.todo);

  function sayHello() {
    alert("Hello");
  }

  return (
    <div id="wd-lab4">
      <h1> LAB 4 </h1>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunction thefunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariables />
      <ObjectStateVariables />
      <ArrayStateVariable />
      <ParentStateComponents />
      <ReduxExamples /> 
      <TodoList/>
      <hr />
    </div>
  );
}

// ✅ This component provides Redux context
export default function Lab4() {
  return (
    <Provider store={store}>
      <Lab4Content />
    </Provider>
  );
}

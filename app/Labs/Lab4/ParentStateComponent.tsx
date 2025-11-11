"use client";
import { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";

export default function ParentStateComponent() {
  const [counter, setCounter] = useState<number>(123);

  return (
    <div id="wd-parent-state" className="mb-3">
      <h2>Counter {counter}</h2>

      <ChildStateComponent counter={counter} setCounter={setCounter} />

      <hr />
    </div>
  );
}

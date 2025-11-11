"use client";
import { useState } from "react";
import { FormControl } from "react-bootstrap";

type Person = {
  name: string;
  age: number;
};

export default function ObjectStateVariable() {
  const [person, setPerson] = useState<Person>({ name: "Peter", age: 24 });

  return (
    <div id="wd-object-state-variables">
      <h2>Object State Variables</h2>

      {/* Show the full object state */}
      <pre>{JSON.stringify(person, null, 2)}</pre>

      {/* Name input */}
      <FormControl
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
        className="mb-2"
      />

      {/* Age input */}
      <FormControl
        type="number"
        value={person.age}
        onChange={(e) =>
          setPerson({ ...person, age: parseInt(e.target.value) || 0 })
        }
      />

      <hr />
    </div>
  );
}

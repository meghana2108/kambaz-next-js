"use client";

import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { redirect } from "next/navigation";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

// ✅ Define a User interface for type safety
interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  dob: string;
}

export default function Signup() {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    verifyPassword: "",
  });

  const signup = () => {
    if (!credentials.username || !credentials.password) {
      alert("Please fill all fields!");
      return;
    }
    if (credentials.password !== credentials.verifyPassword) {
      alert("Passwords do not match!");
      return;
    }

    // ✅ Load existing users safely
    const stored = localStorage.getItem("users");
    const users: User[] = stored ? JSON.parse(stored) : [];

    // ✅ Check for duplicates with proper typing
    const usernameExists = users.some(
      (u: User) => u.username === credentials.username
    );

    if (usernameExists) {
      alert("Username already exists!");
      return;
    }

    // ✅ Create a new user object
    const newUser: User = {
      _id: uuidv4(),
      username: credentials.username,
      password: credentials.password,
      firstName: "New",
      lastName: "User",
      email: `${credentials.username}@example.com`,
      role: "STUDENT",
      dob: "2000-01-01",
    };

    // ✅ Save to localStorage
    const updatedUsers: User[] = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // ✅ Update Redux store
    dispatch(setCurrentUser(newUser));

    // ✅ Redirect to profile
    redirect("/Account/Profile");
  };

  return (
    <div
      id="wd-signup-screen"
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <div
        className="border rounded p-4 shadow-sm bg-white"
        style={{ width: "350px" }}
      >
        <h3 className="text-center text-black mb-4">Sign Up</h3>

        <Form>
          <Form.Group className="mb-3" controlId="wd-username">
            <Form.Control
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-password">
            <Form.Control
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="wd-password-verify">
            <Form.Control
              type="password"
              placeholder="Verify Password"
              value={credentials.verifyPassword}
              onChange={(e) =>
                setCredentials({
                  ...credentials,
                  verifyPassword: e.target.value,
                })
              }
            />
          </Form.Group>

          <Button
            id="wd-signup-btn"
            className="w-100 mb-3"
            variant="primary"
            onClick={signup}
          >
            Sign up
          </Button>

          <div className="text-center">
            <Link href="/Account/Signin" id="wd-signin-link">
              Already have an account? Sign in
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

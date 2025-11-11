"use client";

import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { redirect } from "next/dist/client/components/navigation";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function Signup() {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    verifyPassword: "",
  });

  const signup = () => {
    if (!credentials.username || !credentials.password) return;
    if (credentials.password !== credentials.verifyPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = {
      _id: uuidv4(),
      username: credentials.username,
      password: credentials.password,
      firstName: "New",
      lastName: "User",
      email: `${credentials.username}@example.com`,
      role: "STUDENT",
      dob: "2000-01-01",
    };

    dispatch(setCurrentUser(newUser));
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

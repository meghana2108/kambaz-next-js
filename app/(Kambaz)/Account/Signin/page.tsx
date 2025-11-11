"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { useRouter } from "next/navigation";
import { Form, Button } from "react-bootstrap";
import * as db from "../../Database";

interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  dob?: string;
}

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignin = () => {
    // Load users from both sources
    const stored = localStorage.getItem("users");
    const storedUsers: User[] = stored ? JSON.parse(stored) : [];
    const allUsers: User[] = [...db.users, ...storedUsers];

    // Try to find user
    const found = allUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (found) {
      // Save to Redux + localStorage
      dispatch(setCurrentUser(found));
      localStorage.setItem("currentUser", JSON.stringify(found));
      router.push("/Dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      id="wd-signin-screen"
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <div
        className="border rounded p-4 shadow-sm bg-white"
        style={{ width: "350px" }}
      >
        <h3 className="text-center text-black mb-4">Sign In</h3>

        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {error && <div className="text-danger mb-2">{error}</div>}

          <Button
            id="wd-signin-btn"
            className="w-100 mb-3"
            variant="primary"
            onClick={handleSignin}
          >
            Sign in
          </Button>

          <div className="text-center">
            <a href="/Account/Signup" id="wd-signup-link">
              Don’t have an account? Sign up
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
}

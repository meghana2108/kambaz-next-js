"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as db from "../../Database";
import { setCurrentUser } from "../reducer";
import type { AppDispatch } from "../../store";
import type { User } from "../reducer";

export default function Signin() {
  // ✅ Local state for entered credentials
  const [credentials, setCredentials] = useState<{
    username?: string;
    password?: string;
  }>({});
  const dispatch = useDispatch<AppDispatch>();

  // ✅ Sign-in handler
  const signin = () => {
    const user: User | undefined = db.users.find(
      (u: User) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    // ❌ No match → ignore
    if (!user) return;

    // ✅ Match found → store in Redux and redirect
    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };

  return (
    <div id="wd-signin-screen" className="p-4" style={{ maxWidth: "400px" }}>
      <h1 className="mb-3">Sign In</h1>

      {/* Username */}
      <FormControl
        value={credentials.username ?? ""}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="mb-2"
        placeholder="Username"
        id="wd-username"
      />

      {/* Password */}
      <FormControl
        value={credentials.password ?? ""}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="mb-3"
        placeholder="Password"
        type="password"
        id="wd-password"
      />

      <Button
        onClick={signin}
        id="wd-signin-btn"
        className="w-100 mb-3"
        variant="primary"
      >
        Sign In
      </Button>

      <div className="text-center">
        <Link id="wd-signup-link" href="/Account/Signup">
          Don’t have an account? Sign up
        </Link>
      </div>
    </div>
  );
}

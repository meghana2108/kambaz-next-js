import React from "react";
import Link from "next/link";
export default function SignUp() {
    return (
        <div>
            <h1>Sign Up</h1>
            <input type="text" name="username" placeholder="Enter username" />
            <br />
            <input type="password" name="password" placeholder="Enter password" />
            <br />
            <Link href="profile">Sign Up</Link>
            <br />
            Already have an account? <Link href="signin">Sign In</Link>
        </div>
    );
}

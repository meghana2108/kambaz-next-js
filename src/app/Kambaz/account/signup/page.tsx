import React from "react";
import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function SignUp() {
    return (
        <div>
            <h1>Sign Up</h1>
            <FormControl id="wd-username" type="username" placeholder="username" className="mb-2" defaultValue="john"/>
            <FormControl id="wd-password" type="password" placeholder="password" className="mb-2" defaultValue="john123"/>
            <FormControl id="wd-verify-password" type="password" placeholder="verify password" className="mb-2" defaultValue="john123"/>
            <Link id="wd-signup-btn" href="profile" className="btn btn-primary w-100 mb-2">Sign Up</Link>
            Already have an account? <Link href="signin">Sign In</Link>
        </div>
    );
}

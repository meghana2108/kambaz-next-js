/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";
export default function SignIn() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const signin = () => {
        const user = db.users.find (
            (u:any) => 
                u.username === credentials.username &&
                u.password === credentials.password
        );
        if (!user) return;
        dispatch(setCurrentUser(user));
        redirect("../../kambaz/Dashboard");
    }
    return (
        <div id="wd-signin-screen">
            <h1>Sign In</h1>
            <FormControl id="wd-username" type="username" placeholder="username" className="mb-2" defaultValue={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
            <FormControl id="wd-password" type="password" placeholder="password" className="mb-2" defaultValue={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            <Button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100 mb-2">Sign In</Button>
            New User? <Link id="wd-signup-screen" href="/kambaz/Account/signup"> Sign Up</Link>
        </div>
    );
}

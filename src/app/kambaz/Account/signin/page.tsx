/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as client from "../client";
import Link from "next/link";
import { useRouter } from "next/navigation";  
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";

export default function SignIn() {
    const [credentials, setCredentials] = useState<any>({});
    const [error, setError] = useState(""); 
    const dispatch = useDispatch();
    const router = useRouter(); 

    const signin = async () => {
        try {
            console.log('Signing in with:', credentials);
            const user = await client.signin(credentials);
            console.log('User received:', user);
            
            if (!user) return;
            
            dispatch(setCurrentUser(user));
            router.push("/kambaz/Dashboard"); 
        } catch (error: any) {
            console.error('Signin error:', error);
            setError(error.response?.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <div id="wd-signin-screen">
            <h1>Sign In</h1>
            
            {error && (
                <div className="alert alert-danger">{error}</div>
            )}
            
            <FormControl 
                id="wd-username" 
                type="text" 
                placeholder="username" 
                className="mb-2" 
                value={credentials.username || ""}  
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            />
            <FormControl 
                id="wd-password" 
                type="password" 
                placeholder="password" 
                className="mb-2" 
                value={credentials.password || ""}  
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
            <Button 
                onClick={signin} 
                id="wd-signin-btn" 
                className="btn btn-primary w-100 mb-2"
            >
                Sign In
            </Button>
            
            New User? <Link id="wd-signup-link" href="/kambaz/Account/signup">Sign Up</Link>
        </div>
    );
}
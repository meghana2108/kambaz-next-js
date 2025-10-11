import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function SignIn() {
    return (
        <div id="wd-signin-screen">
            <h1>Sign In</h1>
            <FormControl id="wd-username" type="username" placeholder="username" className="mb-2" defaultValue="john doe"/>
            <FormControl id="wd-password" type="password" placeholder="password" className="mb-2" defaultValue="johndoe123"/>
            <Link id="wd-signin-btn" href="/kambaz/dashboard" className="btn btn-primary w-100 mb-2">Sign In</Link>
            New User? <Link id="wd-signup-screen" href="/kambaz/account/signup"> Sign Up</Link>
        </div>
    );
}

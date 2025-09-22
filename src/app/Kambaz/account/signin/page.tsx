import Link from "next/link";
export default function SignIn() {
    return (
        <div>
            <h1>Sign In</h1>
            <input type="text" name="username" placeholder="Enter username" />
            <br />
            <input type="password" name="password" placeholder="Enter password" />
            <br />
            <Link href="/kambaz/dashboard">Sign In</Link>
            <br />
            New User? <Link href="/kambaz/account/signup"> Sign Up</Link>
        </div>
    );
}

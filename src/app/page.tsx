import Link from "next/link";
export default function Kambaz() {
    return (
        <div>
            <h1>Kambaz</h1>
            <h2>This assignment belongs to Srivatsa Satishreddy</h2>
            Click here for Github <a href="https://github.com/Srivatsa0109" target="_blank" rel="noopener noreferrer">Srivatsa0109</a>
            <p>Welcome to Kambaz!</p>
            <Link href="/kambaz/account/signin">Sign In to Kambaz</Link>
            <br />
            <Link href="/labs/lab1">Click here to go to labs</Link>
        </div>
    );
}
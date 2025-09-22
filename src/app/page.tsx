import Link from "next/link";
export default function Kambaz() {
    return (
        <div>
            <h1>Kambaz</h1>
            <p>Welcome to Kambaz!</p>
            <Link href="/kambaz/account/signin">Sign In to Kambaz</Link>
        </div>
    );
}
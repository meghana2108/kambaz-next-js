import Link from "next/link";
export default function Accountnavigation() {
    return (
        <div>
            <ul>
                <li><Link href="/kambaz/account/signin">Sign in</Link></li>
                <li><Link href="/kambaz/account/signup">Sign up</Link></li>
                <li><Link href="/kambaz/account/profile">Profile</Link></li>
            </ul>
        </div>
    );
}

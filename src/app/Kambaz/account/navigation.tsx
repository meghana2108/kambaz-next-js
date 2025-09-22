import Link from "next/link";
export default function Accountnavigation() {
    return (
        <div>
            <ul>
                <li><Link href="signin">Sign in</Link></li>
                <li><Link href="signup">Sign up</Link></li>
                <li><Link href="profile">Profile</Link></li>
            </ul>
        </div>
    );
}

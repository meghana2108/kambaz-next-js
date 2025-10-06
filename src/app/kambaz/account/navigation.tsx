import Link from "next/link";
export default function Accountnavigation() {
    return (
        <div id="wd-account-navigation" className="wd list-group fs-6 rounded-0">
            <Link href="/kambaz/account/signin" className="list-group-item active border-0">SignIn</Link>
            <Link href="/kambaz/account/signup" className="list-group-item text-danger border-0">SignUp</Link>
            <Link href="/kambaz/account/profile" className="list-group-item border-0 text-danger">Profile</Link>
        </div>
    );
}

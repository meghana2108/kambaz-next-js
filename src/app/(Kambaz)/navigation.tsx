import Link from "next/link";
export default function Kambaznavigation() {
    return (
        <div>
            <ul>
                <li><a href="www.northeastern.edu" target="_blank" >Northeastern</a></li>
                <li><Link href="/account">Account</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/dashboard">Courses</Link></li>
                <li><Link href="/calendar">Calendar</Link></li>
                <li><Link href="/inbox">Inbox</Link></li>
                <li><Link href="/labs">Labs</Link></li>
            </ul>
        </div>
    );
}

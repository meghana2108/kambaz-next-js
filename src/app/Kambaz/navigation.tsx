import Link from "next/link";
export default function Kambaznavigation() {
    return (
        <div>
            <ul>
                <li><a href="https://www.northeastern.edu" target="_blank" rel="noopener noreferrer">Northeastern</a></li>
                <li><Link href="/kambaz/account/profile">Account</Link></li>
                <li><Link href="/kambaz/dashboard">Dashboard</Link></li>
                <li><Link href="/kambaz/dashboard">Courses</Link></li>
                <li><Link href="/kambaz/calendar">Calendar</Link></li>
                <li><Link href="/kambaz/inbox">Inbox</Link></li>
                <li><Link href="/labs">Labs</Link></li>
            </ul>
        </div>
    );
}

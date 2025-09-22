import Link from "next/link";
export default function Labs() {
    return (
        <div id="wd-labs-link">
            <h1>Labs</h1>
            <ul>
                <li>
                    <Link href="/labs/lab1">Lab 1 : HTML Examples</Link>
                </li>
                <li>
                    <Link href="/labs/lab2">Lab 2 : CSS Basics</Link>
                </li>
                <li>
                    <Link href="/labs/lab3">Lab 3 : JavaScript Fundamentals</Link>
                </li>
                <li>
                    <Link href="/">Kambaz</Link>
                </li>
            </ul>
        </div>
    );
}
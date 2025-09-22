import Link from "next/link";
export default function profile() {
    return (
        <div style={{ width: "300px" }}>
            <h3>Profile</h3>
            <input type="text" defaultValue="John Doe" placeholder="username"/><br />
            <input type="password" defaultValue="john123" placeholder="password"/><br />
            <input type="text" defaultValue="John" placeholder="first name"/><br />
            <input type="text" defaultValue="Doe" placeholder="last name"/><br />
            <input type="date" defaultValue="2025-09-14" placeholder="date"/><br />
            <input type="email" defaultValue="john.doe@example.com" placeholder="email"/>
            <select defaultValue="Faculty">
                <option value="Faculty">Faculty</option>
                <option value="Student">Student</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
            </select><br />
            <Link href="/">Sign out</Link><br />
        </div>
    );
}
import Link from "next/link";
import { FormControl, FormSelect } from "react-bootstrap";
export default function profile() {
    return (
        <div style={{ width: "300px" }}>
            <h3>Profile</h3>
            <FormControl id="wd-full-name" type="username" className="mb-2" placeholder="username" defaultValue="John Doe"/>
            <FormControl id="wd-password" type="password" className="mb-2" placeholder="password" defaultValue="johndoe123"/>
            <FormControl id="wd-first-name" className="mb-2" placeholder="first name" defaultValue="John"/>
            <FormControl id="wd-last-name" className="mb-2" placeholder="first name" defaultValue="Doe"/>
            <FormControl id="wd-date" className="mb-2" type="date" defaultValue="10/01/2025"/>
            <FormControl id="wd-email" className="mb-2" placeholder="john.doe@example.com"/> 
            <FormSelect className="mb-2">
                <option value="Faculty">Faculty</option>
                <option value="Student">Student</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
            </FormSelect>
            <Link id="wd-sign-out-btn" className="btn btn-primary w-100 mb-2"href="/kambaz/Account/signin">Sign out</Link>
        </div>
    );
}
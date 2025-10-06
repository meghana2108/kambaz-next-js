import { Nav, NavItem, NavLink} from "react-bootstrap";
import Link from "next/link";
export default function Home() {
    return (
                <Nav variant="pills">
                    <NavItem>
                        <NavLink href="/labs" as={Link}>Labs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/labs/lab1" as={Link}>Lab1</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/labs/lab2" as={Link}>Lab2</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/labs/lab3" as={Link}>Lab3</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/" as={Link}>Kambaz</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/Srivatsa0109" as={Link}>My GitHub</NavLink>
                    </NavItem>
                </Nav>
    );
}   
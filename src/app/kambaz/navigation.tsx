"use client";
import { MdAccountCircle } from "react-icons/md";
import { TfiDashboard } from "react-icons/tfi";
import { FaBook } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineInbox } from "react-icons/hi";
import { ImLab } from "react-icons/im";
import { ListGroupItem, ListGroup } from "react-bootstrap";
import "./index.css";
import Link from "next/link";
export default function Kambaznavigation() {
    return (
        <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{width:110}} id="wd-kambaz-navigation">
            <ListGroupItem className="bg-black text-center border-0" as="a" href="https://www.northeastern.edu/" id="wd-neu-link">
                <img src="/images/neu.png" width="75px" alt="Northeastern University" />
            </ListGroupItem>
            <ListGroupItem className="border-0 bg-black text-center">
                <Link href="/kambaz/account/profile" id="wd-account-link" className="text-white text-decoration-none">
                <MdAccountCircle className="fs-3 text-white" />
                <br />
                Account
                </Link>
            </ListGroupItem>
            <ListGroupItem className="border-0 bg-black text-center active">
                <Link href="/kambaz/dashboard" id="wd-dashboard-link" className="text-white text-decoration-none">
                <TfiDashboard className="fs-3 text-danger" />
                <br />
                Dashboard
                </Link>
            </ListGroupItem>
            <ListGroupItem className="border-0 bg-black text-center ">
                <Link href="/kambaz/courses/cs101/home" id="wd-courses-link" className="text-white text-decoration-none">
                <FaBook className="fs-3 text-danger" />
                <br />
                Courses
                </Link>
            </ListGroupItem>
            <ListGroupItem className="border-0 bg-black text-center ">
                <Link href="/kambaz/calendar" id="wd-calendar-link" className="text-white text-decoration-none">
                <FaCalendarAlt className="fs-3 text-danger" />
                <br />
                Calendar
                </Link>
            </ListGroupItem>
            <ListGroupItem className="border-0 bg-black text-center">
                <Link href="/kambaz/inbox" id="wd-inbox-link" className="text-white text-decoration-none">
                <HiOutlineInbox className="fs-3 text-danger" />
                <br />
                Inbox
                </Link>
            </ListGroupItem>
            <ListGroupItem className="border-0 bg-black text-center">
                <Link href="/labs" id="wd-labs-link" className="text-white text-decoration-none">
                <ImLab className="fs-3 text-danger" />
                <br />
                Labs
                </Link>
            </ListGroupItem>
        </ListGroup>
    );
}

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function KambazNavigation() {
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 110 }}
      id="wd-kambaz-navigation"
    >
      {/* Northeastern logo link */}
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      {/* Account */}
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Account"
          id="wd-account-link"
          className="text-white text-decoration-none"
        >
          <FaRegCircleUser className="fs-1 text-white" />
          Account
        </Link>
      </ListGroupItem>

      {/* Dashboard */}
      <ListGroupItem className="border-0 bg-white text-center">
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className="text-danger text-decoration-none"
        >
          <AiOutlineDashboard className="fs-1 text-danger" />
          Dashboard
        </Link>
      </ListGroupItem>

      {/* Courses */}
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Dashboard"
          id="wd-course-link"
          className="text-white text-decoration-none"
        >
          <LiaBookSolid className="fs-1 text-danger" />
          Courses
        </Link>
      </ListGroupItem>

      {/* Calendar */}
      <ListGroupItem className="border-0 bg-black text-center">
        <a
          href="https://northeastern.instructure.com/calendar#view_name=month&view_start=2025-09-22"
          target="_blank"
          rel="noopener noreferrer"
          id="wd-calendar-link"
          className="text-white text-decoration-none"
        >
          <IoCalendarOutline className="fs-1 text-danger" />
          Calendar
        </a>
      </ListGroupItem>

      {/* Inbox */}
      <ListGroupItem className="border-0 bg-black text-center">
        <a
          href="https://northeastern.instructure.com/conversations#filter=type=inbox"
          target="_blank"
          rel="noopener noreferrer"
          id="wd-inbox-link"
          className="text-white text-decoration-none"
        >
          <FaInbox className="fs-1 text-danger" />
          Inbox
        </a>
      </ListGroupItem>

      {/* Labs */}
      <ListGroupItem className="border-0 bg-black text-center">
        <Link
          href="/Labs"
          id="wd-labs-link"
          className="text-white text-decoration-none"
        >
          <LiaCogSolid className="fs-1 text-danger" />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}

import Link from "next/link";

export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Northeastern
      </a>
      <br />
      <Link href="/Account" id="wd-account-link">
        Account
      </Link>
      <br />
      <Link href="/Dashboard" id="wd-dashboard-link">
        Dashboard
      </Link>
      <br />
      <Link href="/Dashboard" id="wd-course-link">
        Courses
      </Link>
      <br />
      <a
        href="https://northeastern.instructure.com/calendar#view_name=month&view_start=2025-09-22"
        target="_blank"
        rel="noopener noreferrer"
        id="wd-calendar-link"
      >
        Calendar
      </a>
      <br />
      <a
        href="https://northeastern.instructure.com/conversations#filter=type=inbox"
        target="_blank"
        rel="noopener noreferrer"
        id="wd-inbox-link"
      >
        Inbox
      </a>
      <br />
      <Link href="/Labs" id="wd-labs-link">
        Labs
      </Link>
      <br />
    </div>
  );
}

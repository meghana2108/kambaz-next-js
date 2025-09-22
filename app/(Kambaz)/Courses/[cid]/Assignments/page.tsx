import Link from "next/link";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
        </li>
        <ul className="wd-assignment-list-item">
          3 MODULES | 5 QUESTIONS | DUE SEP 20, 2025 11:59PM | 100 POINTS
        </ul>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/234"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
        </li>
        <ul className="wd-assignment-list-item">
          2 MODULES | 6 QUESTIONS | DUE SEP 30, 2025 11:59PM | 100 POINTS
        </ul>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/345"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACTJS
          </Link>
        </li>
        <ul className="wd-assignment-list-item">
          4 MODULES | 7 QUESTIONS | DUE OCT 10, 2025 11:59PM | 100 POINTS
        </ul>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/456"
            className="wd-assignment-link"
          >
            A4 - NODEJS + EXPRESSJS
          </Link>
        </li>
        <ul className="wd-assignment-list-item">
          - MODULES | - QUESTIONS | DUE - , 2025 11:59PM | 100 POINTS
        </ul>
      </ul>
    </div>
  );
}

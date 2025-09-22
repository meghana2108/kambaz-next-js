import Link from "next/link";
import TOC from "./TOC"; // Adjust the path if your TOC is elsewhere

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>

      <p id="wd-name">Meghana Raghavendra</p>

      <p>
        <a
          id="wd-github"
          href="https://github.com/meghana2108/kambaz-next-js.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </p>

      {/* Table of Contents component */}
      <TOC />

      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples{" "}
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics{" "}
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

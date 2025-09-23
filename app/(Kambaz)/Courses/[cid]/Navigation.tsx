import Link from "next/link";

interface CourseNavigationProps {
  cid: string;
}

export default function CourseNavigation({ cid }: CourseNavigationProps) {
  return (
    <div id="wd-courses-navigation">
      <Link href={`/Courses/${cid}/Home`} id="wd-course-home-link">
        Home
      </Link>
      <br />
      <Link href={`/Courses/${cid}/Modules`} id="wd-course-modules-link">
        Modules
      </Link>
      <br />
      <Link
        href={`/Courses/${cid}/Assignments`}
        id="wd-course-assignments-link"
      >
        Assignments
      </Link>
      <br />

      <a
        href="https://piazza.com/class/mf08v5tcamaem/post/8"
        target="_blank"
        rel="noopener noreferrer"
        id="wd-course-piazza-link"
      >
        Piazza
      </a>
      <br />
      <a
        href="https://zoom.us/signin#/login"
        target="_blank"
        rel="noopener noreferrer"
        id="wd-course-zoom-link"
      >
        Zoom
      </a>
      <br />
      <a
        href="https://northeastern.instructure.com/courses/225988/quizzes"
        target="_blank"
        rel="noopener noreferrer"
        id="wd-course-quizzes-link"
      >
        Quizzes
      </a>
      <br />
      <a
        href="https://northeastern.instructure.com/courses/225988/grades"
        target="_blank"
        rel="noopener noreferrer"
        id="wd-course-grades-link"
      >
        Grades
      </a>
      <br />
      <a
        href="https://northeastern.instructure.com/courses/225988/users"
        target="_blank"
        rel="noopener noreferrer"
        id="wd-course-people-link"
      >
        People
      </a>
    </div>
  );
}

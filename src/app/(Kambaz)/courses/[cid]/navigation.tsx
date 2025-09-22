import Link from "next/link";
export default function CoursesNavigation() {
    return (
        <div id="wd-courses-navigation">
            <ul>
        <li><Link href="/courses/cs101/home" id="wd-course-cs101-home">Home</Link></li>
        <li><Link href="/courses/cs101/modules" id="wd-course-cs101-modules">Modules</Link></li>
        <li><Link href="/courses/cs101/piazza" id="wd-course-cs101-piazza">Piazza</Link></li>
        <li><Link href="/courses/cs101/zoom" id="wd-course-cs101-zoom">Zoom</Link></li>
        <li><Link href="/courses/cs101/assignments" id="wd-course-cs101-assignments">Assignments</Link></li>
        <li><Link href="/courses/cs101/quizzes" id="wd-course-cs101-quizzes">Quizzes</Link></li>
        <li><Link href="/courses/cs101/grades" id="wd-course-cs101-grades">Grades</Link></li>
        <li><Link href="/courses/cs101/people" id="wd-course-cs101-people">People</Link></li>
            </ul>
        </div>
    );
}

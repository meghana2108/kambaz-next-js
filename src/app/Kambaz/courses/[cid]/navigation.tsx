import Link from "next/link";
export default function CoursesNavigation() {
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-6 rounded-0">
        <Link href="/kambaz/courses/cs101/home" id="wd-course-cs101-home" className="list-group-item active border-0">Home</Link>
        <Link href="/kambaz/courses/cs101/modules" id="wd-course-cs101-modules" className="list-group-item text-danger border-0">Modules</Link>
        <Link href="/kambaz/courses/cs101/piazza" id="wd-course-cs101-piazza"className="list-group-item text-danger border-0">Piazza</Link>
        <Link href="/kambaz/courses/cs101/zoom" id="wd-course-cs101-zoom" className="list-group-item text-danger border-0">Zoom</Link>
        <Link href="/kambaz/courses/cs101/assignments" id="wd-course-cs101-assignments"className="list-group-item text-danger border-0">Assignments</Link>
        <Link href="/kambaz/courses/cs101/quizzes" id="wd-course-cs101-quizzes"className="list-group-item text-danger border-0">Quizzes</Link>
        <Link href="/kambaz/courses/cs101/grades" id="wd-course-cs101-grades"className="list-group-item text-danger border-0">Grades</Link>
        <Link href="/kambaz/courses/cs101/people" id="wd-course-cs101-people"className="list-group-item text-danger border-0">People</Link>
        <Link href="/kambaz/courses/cs101/exams" id="wd-course-cs101-exam"className="list-group-item text-danger border-0">Exams</Link>
        <Link href="/kambaz/courses/cs101/project" id="wd-course-cs101-project"className="list-group-item text-danger border-0">Project</Link>
        </div>
    );
}

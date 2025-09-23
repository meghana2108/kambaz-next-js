import Link from "next/link";

interface CourseNavigationProps {
  cid: string;
}

export default function CourseNavigation({ cid }: CourseNavigationProps) {
  return (
    <div id="wd-courses-navigation">
      <Link href={`/Courses/${cid}/Home`}>Home</Link>
      <br />
      <Link href={`/Courses/${cid}/Modules`}>Modules</Link>
      <br />
      <Link href={`/Courses/${cid}/Piazza`}>Piazza</Link>
      <br />
      <Link href={`/Courses/${cid}/Zoom`}>Zoom</Link>
      <br />
      <Link href={`/Courses/${cid}/Assignments`}>Assignments</Link>
      <br />
      <Link href={`/Courses/${cid}/Quizzes`}>Quizzes</Link>
      <br />
      <Link href={`/Courses/${cid}/Grades`}>Grades</Link>
      <br />
      <Link href={`/Courses/${cid}/People/Table`}>People</Link>
    </div>
  );
}

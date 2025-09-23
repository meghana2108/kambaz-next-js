import { redirect } from "next/navigation";

interface CoursesPageProps {
  params: Promise<{ cid: string }>;
}

export default async function CoursesPage({ params }: CoursesPageProps) {
  const { cid } = await params;
  redirect(`/Courses/${cid}/Home`);
}

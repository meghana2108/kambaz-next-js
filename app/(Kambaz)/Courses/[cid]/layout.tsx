import { ReactNode } from "react";
import { FaAlignJustify } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import { courses } from "../../Database";
import Breadcrumb from "./Breadcrumb";

type LayoutPropsForCourse = {
  children: ReactNode;
  params: Promise<{ cid: string }>;
};

export default async function CoursesLayout({
  children,
  params,
}: LayoutPropsForCourse) {
  const { cid } = await params;

  const course = courses.find((course) => course._id === cid);

  return (
    <div id="wd-courses" className="container-fluid">
      {/* ✅ Breadcrumb should be right here */}
      <Breadcrumb course={course} />
      <hr />

      {/* Layout structure */}
      <div className="d-flex">
        <div
          className="d-none d-md-block border-end p-3"
          style={{ width: "200px" }}
        >
          <CourseNavigation cid={cid} />
        </div>

        <div className="flex-fill p-3">{children}</div>
      </div>
    </div>
  );
}

"use client";

import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams<{ cid: string }>();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const course = courses.find((c) => c._id === cid);
  const [showNav, setShowNav] = useState(true);

  return (
    <div id="wd-courses" className="container-fluid">
      {/* ✅ Breadcrumb now controls toggle */}
      <Breadcrumb course={course} onToggle={() => setShowNav(!showNav)} />
      <hr />

      {/* ✅ Layout structure */}
      <div className="d-flex">
        {showNav && (
          <div
            className="border-end p-3 d-none d-md-block"
            style={{ width: "200px" }}
          >
            <CourseNavigation cid={cid as string} />
          </div>
        )}
        <div className="flex-fill p-3">{children}</div>
      </div>
    </div>
  );
}

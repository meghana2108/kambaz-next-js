import { ReactNode } from "react";
import CourseNavigation from "./navigation";
import { courses } from "../../Database";
import { FaAlignJustify } from "react-icons/fa6";
import BreadCrumb from "./BreadCrumb";
export default async function CoursesLayout({ children, params }: Readonly<{ children: ReactNode, params: Promise<{ cid: string }> }>) {
    const { cid } = await params;
    console.log("CID from URL:", cid);
    console.log("All courses:", courses);
    const course = courses.find((course) => course._id.toLowerCase() === cid.toLowerCase());
    console.log("Found course:", course);
    return (
       <div id="wd-courses">
        <h2 className="text-danger"> <FaAlignJustify className="me-4 fs-4 mb-1" /><BreadCrumb course={course} /></h2>
        <div className="d-flex">
            <div className="d-none d-md-block">
            <CourseNavigation />
            </div>
            <div className="flex-fill">
                {children}
            </div>
        </div>
       </div>
    );
}
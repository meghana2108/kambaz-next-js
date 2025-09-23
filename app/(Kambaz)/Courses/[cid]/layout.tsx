import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

type LayoutPropsForCourse = {
  children: ReactNode;
  params: Promise<{ cid: string }>;
};

export default async function CoursesLayout({
  children,
  params,
}: LayoutPropsForCourse) {
  const { cid } = await params;
  return (
    <div id="wd-courses">
      <h2>Courses {cid}</h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top" width="200">
              <CourseNavigation />
            </td>
            <td valign="top" width="100%">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";

export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // Example path: /Courses/RS101/Home → ['Courses', 'RS101', 'Home']
  const currentSection = pathSegments[2] || "Home";

  // Capitalize first letter
  const sectionName =
    currentSection.charAt(0).toUpperCase() + currentSection.slice(1);

  return (
    <h2 className="text-danger d-flex align-items-center gap-2">
      <FaAlignJustify className="fs-4 mb-1" />
      {course?.name || "Course"} &gt; {sectionName}
    </h2>
  );
}

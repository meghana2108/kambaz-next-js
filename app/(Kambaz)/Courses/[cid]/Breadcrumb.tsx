"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";

export default function Breadcrumb({
  course,
  onToggle,
}: {
  course: { name: string } | undefined;
  onToggle: () => void; // 👈 new prop
}) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentSection = pathSegments[2] || "Home";
  const sectionName =
    currentSection.charAt(0).toUpperCase() + currentSection.slice(1);

  return (
    <h2 className="text-danger d-flex align-items-center gap-2">
      {/* ✅ The one and only toggle icon */}
      <FaAlignJustify
        className="fs-4 mb-1"
        role="button"
        style={{ cursor: "pointer" }}
        onClick={onToggle}
        title="Toggle navigation"
      />
      {course?.name || "Course"} &gt; {sectionName}
    </h2>
  );
}

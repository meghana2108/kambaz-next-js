"use client";

import React from "react";
import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home" className="d-flex">
      {/* Left side: Modules */}
      <div className="flex-fill me-3">
        <Modules />
      </div>

      {/* Right side: Course Status (hidden on small screens) */}
      <div className="d-none d-lg-block">
        <CourseStatus />
      </div>
    </div>
  );
}

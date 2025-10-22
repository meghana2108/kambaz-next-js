"use client";

import { useParams } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { modules } from "../../../Database"; // relative path to index.ts
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

interface Lesson {
  _id: string;
  name: string;
}

interface Module {
  _id: string;
  name: string;
  course: string;
  lessons: Lesson[];
}

export default function Modules() {
  const { cid } = useParams();
  const courseModules: Module[] = modules.filter(
    (module: Module) => module.course === cid
  );

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />

      {courseModules.length === 0 ? (
        <div className="p-3 text-center">
          No modules available for this course yet.
        </div>
      ) : (
        <ListGroup id="wd-modules" className="rounded-0">
          {courseModules.map((module: Module) => (
            <ListGroupItem
              className="wd-module p-0 mb-5 fs-5 border-gray"
              key={module._id}
            >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  {module.name}
                </div>
                <ModuleControlButtons />
              </div>

              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: Lesson) => (
                    <ListGroupItem
                      className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between"
                      key={lesson._id}
                    >
                      <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        {lesson.name}
                      </div>
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </div>
  );
}

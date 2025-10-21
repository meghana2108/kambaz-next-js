"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap"
import { useParams } from "next/navigation";
import * as db from "../../../Database"
import ModulesControls from "./ModulesControls"
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
type Lesson = {
  _id: string;
  name: string;
  description: string;
  module: string;
};

type Module = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: Lesson[];
};

export default function Modules() {
  const { cid } = useParams();
  const modules: Module[] = db.modules.filter((module) => module.course === cid);

  return (
    <div>
      <br /><br /><br />
      <ListGroup id="wd-modules" className="rounded-0">
        <ModulesControls/>
        {modules.map((module) => (
          <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name} 
            </div>
            {module.lessons?.length && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson) => (
                  <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
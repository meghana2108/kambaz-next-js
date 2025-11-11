"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap"
import { useParams } from "next/navigation";
import { useState } from "react";
import ModulesControls from "./ModulesControls"
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { FormControl } from "react-bootstrap";
import ModulesControlsButton from "./ModuleControlsButton";
import { addModule, editModule, deleteModule, updateModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

export default function Modules() {
  const { cid } = useParams();
  const courseId = (Array.isArray(cid) ? cid[0] : cid) as string;
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const [moduleName, setModuleName] = useState("");
  const dispatch = useDispatch();
  
  return (
    <div>
      <br /><br /><br />
      <ListGroup id="wd-modules" className="rounded-0">
        <ModulesControls 
          setModuleName={setModuleName} 
          moduleName={moduleName} 
          addModule={() => {
            dispatch(addModule({ name: moduleName, course: courseId }));
            setModuleName("");
          }}
        />
        {modules.map((module) => (
          <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> 
              {!module.editing && module.name}
              {module.editing && (
                <FormControl 
                  className="w-50 d-inline-block"
                  onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(updateModule({ ...module, editing: false }));
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
              <ModulesControlsButton 
                moduleId={module._id} 
                deleteModule={(moduleId) => dispatch(deleteModule(moduleId))} 
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>
            {module.lessons?.length > 0 && (
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
"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap"
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import ModulesControls from "./ModulesControls"
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { FormControl } from "react-bootstrap";
import ModulesControlsButton from "./ModuleControlsButton";
import { editModule, updateModule, setModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const courseId = (Array.isArray(cid) ? cid[0] : cid) as string;
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);  
  const [moduleName, setModuleName] = useState("");
  const dispatch = useDispatch();
  
  const isFaculty = currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModule(modules));
  };
  useEffect (() => {
    fetchModules();
  },[]);

   const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    try {
      const module = await client.createModuleForCourse(cid, newModule);
      dispatch(setModule([...modules, module]));
      setModuleName("");
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to create module");
    }
  };

   const onRemoveModule = async (moduleId: string) => {
    try {
      await client.deleteModule(moduleId);
      dispatch(setModule(modules.filter((m: any) => m._id !== moduleId)));
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to delete module");
    }
  };

  const onUpdateModule = async (module: any) => {
    try {
      await client.updateModule(module);
      const newModules = modules.map((m: any) => m._id === module._id ? module : m);
      dispatch(setModule(newModules));
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to update module");
    }
  };

  return (
    <div>
      <br /><br /><br />
      <ListGroup id="wd-modules" className="rounded-0">
        {isFaculty && (
          <ModulesControls 
            setModuleName={setModuleName} 
            moduleName={moduleName} 
            addModule={onCreateModuleForCourse}
          />
        )}
        
        {modules.map((module) => (
          <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> 
              {!module.editing && module.name}
              {module.editing && isFaculty && (
                <FormControl 
                  className="w-50 d-inline-block"
                  onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
              {isFaculty && (
                <ModulesControlsButton 
                  moduleId={module._id} 
                  deleteModule={(moduleId) => onRemoveModule(moduleId)} 
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              )}
            </div>
            {module.lessons?.length > 0 && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson) => (
                  <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                    {isFaculty && <LessonControlButtons />}
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
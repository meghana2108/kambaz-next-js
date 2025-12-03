"use client";

import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControlsButton from "./ModuleControlsButton";
import { setModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import * as client from "../../client";

interface Lesson {
  _id: string;
  name: string;
}

interface Module {
  _id: string;
  name: string;
  description?: string;
  course: string;
  editing?: boolean;
  lessons?: Lesson[];
}

export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { modules, loading, error } = useSelector((state: RootState) => state.modulesReducer);

  const [moduleName, setModuleName] = useState("");
  const [editingValues, setEditingValues] = useState<Record<string, string>>({});

  const isFaculty = currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  const fetchModules = useCallback(async () => {
    if (!cid) return;
    try {
      const fetchedModules = await client.findModulesForCourse(cid);
      console.log("Fetched modules from API:", fetchedModules);
      console.log("First module structure:", fetchedModules[0]);
      dispatch(setModule(fetchedModules));
    } catch (err) {
      console.error("Error fetching modules:", err);
    }
  }, [cid, dispatch]);

  useEffect(() => {
    fetchModules();
  }, [fetchModules]);

  const onCreateModuleForCourse = async () => {
    if (!cid || !moduleName.trim()) return;

    const newModule = { name: moduleName.trim(), description: "", course: cid };

    try {
      const created = await client.createModuleForCourse(cid, newModule);
      dispatch(setModule([...modules, created]));
      setModuleName("");
    } catch (err) {
      console.error("Create module error:", err);
      alert("Failed to create module");
    }
  };

  const onRemoveModule = async (moduleIdentifier: string) => {
    try {
      const foundModule = modules.find((m) => 
        m._id === moduleIdentifier || 
        (m as any).id === moduleIdentifier || 
        m.name === moduleIdentifier
      );
      
      const deleteId = foundModule?._id || (foundModule as any)?.id || moduleIdentifier;
      await client.deleteModule(cid, deleteId);
      
      dispatch(setModule(modules.filter((m) => {
        const matches = m._id === moduleIdentifier || 
                       (m as any).id === moduleIdentifier || 
                       m.name === moduleIdentifier;
        return !matches;
      })));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete module");
    }
  };

  const handleEditModule = useCallback(
    (moduleIdentifier: string) => {
      console.log("Edit clicked for module:", moduleIdentifier);
      
      const updatedModules = modules.map((m) => {
        const matches = m._id === moduleIdentifier || 
                       (m as any).id === moduleIdentifier || 
                       m.name === moduleIdentifier;
        return matches ? { ...m, editing: true } : { ...m, editing: false };
      });
      
      dispatch(setModule(updatedModules));
    },
    [modules, dispatch]
  );

  const onUpdateModule = useCallback(
    async (moduleIdentifier: string) => {
      const newName = editingValues[moduleIdentifier];
      if (!newName) return;

      const foundModule = modules.find((m) => 
        m._id === moduleIdentifier || 
        (m as any).id === moduleIdentifier || 
        m.name === moduleIdentifier
      );

      if (!foundModule) {
        console.error("Cannot update module: module not found", moduleIdentifier);
        console.log("Available modules:", modules);
        console.log("Looking for identifier:", moduleIdentifier);
        alert("Update failed: Module not found!");
        return;
      }

      const body = { name: newName.trim(), description: foundModule.description || "", course: foundModule.course };

      try {
        const updateId = foundModule._id || (foundModule as any).id || moduleIdentifier;
        const updated = await client.updateModule(cid, updateId, body);
        
        const updatedModules = modules.map((m) => {
          const matchesModule = m._id === moduleIdentifier || 
                               (m as any).id === moduleIdentifier || 
                               m.name === moduleIdentifier;
          return matchesModule ? { ...m, ...updated, editing: false } : m;
        });
        
        dispatch(setModule(updatedModules));
        
        setEditingValues((prev) => {
          const newValues = { ...prev };
          delete newValues[moduleIdentifier];
          return newValues;
        });
      } catch (err) {
        console.error("Update error:", err);
        alert("Failed to update module");
      }
    },
    [modules, cid, dispatch, editingValues]
  );

  return (
    <div>
      {loading && modules.length === 0 && (
        <div className="text-center p-5">Loading modules...</div>
      )}

      {error && <div className="alert alert-danger">Error: {error}</div>}

      <ListGroup id="wd-modules" className="rounded-0">
        {isFaculty && (
          <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={onCreateModuleForCourse} />
        )}

        {modules.length > 0 ? (
          modules.map((moduleItem, index) => {
            const moduleId = moduleItem._id || (moduleItem as any).id || moduleItem.name || `module-${index}`;
            
            console.log("Rendering module:", { 
              name: moduleItem.name, 
              _id: moduleItem._id, 
              id: (moduleItem as any).id,
              usingId: moduleId,
              fullModule: moduleItem 
            });
            
            return (
              <ListGroupItem key={moduleId} className="wd-module p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" />

                  {!moduleItem.editing && moduleItem.name}

                  {moduleItem.editing && isFaculty && (
                    <FormControl
                      className="w-50 d-inline-block"
                      autoFocus
                      defaultValue={moduleItem.name}
                      onChange={(e) => {
                        setEditingValues((prev) => ({
                          ...prev,
                          [moduleId]: e.target.value,
                        }));
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          console.log("Enter pressed, moduleId:", moduleId);
                          console.log("Current module:", moduleItem);
                          onUpdateModule(moduleId);
                        }
                      }}
                    />
                  )}

                  {isFaculty && (
                    <ModulesControlsButton
                      moduleId={moduleId}
                      deleteModule={onRemoveModule}
                      editModule={() => handleEditModule(moduleId)}
                    />
                  )}
                </div>

                {moduleItem.lessons && moduleItem.lessons.length > 0 && (
                  <ListGroup className="wd-lessons rounded-0">
                    {moduleItem.lessons.map((lesson, lessonIndex) => {
                      const lessonId = lesson._id || (lesson as any).id || lesson.name || `lesson-${lessonIndex}`;
                      return (
                        <ListGroupItem key={lessonId} className="wd-lesson p-3 ps-1">
                          <BsGripVertical className="me-2 fs-3" />
                          {lesson.name}
                          {isFaculty && <LessonControlButtons />}
                        </ListGroupItem>
                      );
                    })}
                  </ListGroup>
                )}
              </ListGroupItem>
            );
          })
        ) : (
          <ListGroupItem className="text-center p-4 text-muted">
            No modules yet. Click &quot;Add Module&quot; to create one.
          </ListGroupItem>
        )}
      </ListGroup>
    </div>
  );
}
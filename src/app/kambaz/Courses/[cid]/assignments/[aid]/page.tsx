/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FormLabel, Row, Col, FormControl, FormSelect, FormCheck, Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/kambaz/store";
import { useRouter } from "next/navigation";
import { addAssignment, updateAssignment } from "../reducer";
export default function Assignmenteditor() {
    const {cid,aid } = useParams();
    const isNew = aid === "new";
    const router = useRouter();
    const dispatch = useDispatch();
    const existingAssignment = useSelector((state: RootState) => {
        return state.assignmentsReducer.find((a: any) => a._id === aid);
    });
    if (!isNew && !existingAssignment) {
        return <div>Assignment Not Found</div>;
    }
    const assignment = isNew ? 
    {title: "", description: "", points: 0, dueDate: "", availableFrom: "", availableUntil: ""} :
    existingAssignment!;
    return (
        <div id="wd-assignment-editor">
           <Row className="mb-3">
                <FormLabel>Assignment Name</FormLabel>
                <Col style={{maxWidth:"50%"}}>
                    <FormControl type="text" id="assignment-title" defaultValue={assignment.title}/>
                </Col>
           </Row>
            <Row className="mb-3">
                <Col style={{maxWidth:"50%"}}>           
                    <FormControl type="text" as="textarea" id="assignment-description" rows={8} defaultValue={assignment.description}/>
                </Col>
            </Row>
            <Row className="mb-3" >
                  <FormLabel className="col-2 text-end">Points</FormLabel>
                <Col className="col-8">
                    <FormControl type="number" id="assignment-points" defaultValue={assignment.points} style={{maxWidth:"49%"}}/>
                </Col>
            </Row>
            <Row className="mb-3">
               <FormLabel className="col-2 text-end">Assignment Group</FormLabel>
                <Col className="col-8">
                    <FormSelect defaultValue="ASSIGNMENTS" style={{maxWidth:"49%"}}> 
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECTS">PROJECTS</option>
                    </FormSelect>
                </Col>
            </Row>
             <Row className="mb-3">
                <FormLabel className="col-2 text-end">Display Grade as</FormLabel>
                <Col className="col-8">
                    <FormSelect defaultValue="Percentage" style={{maxWidth:"49%"}}> 
                        <option value="Percentage">Percentage</option>
                        <option value="Points">Points</option>
                    </FormSelect>
                </Col>
            </Row>
             <Row className="mb-3">
                <FormLabel className="col-2 text-end">Submission Type</FormLabel>
                <Col className="col-8">
                    <div className="border p-3" style={{maxWidth:"49%"}}>
                        <FormSelect defaultValue="Online" className="mb-3" style={{maxWidth:"49%"}}>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </FormSelect>
                        
                        <div>
                            <strong>Online Entry Options</strong>
                            <FormCheck type="checkbox" label="Text Entry" className="mt-2" />
                            <FormCheck type="checkbox" label="Website URL" defaultChecked />
                            <FormCheck type="checkbox" label="Media Recordings" />
                            <FormCheck type="checkbox" label="Student Annotation" />
                            <FormCheck type="checkbox" label="File Uploads" />
                        </div>
                    </div>
                </Col>
            </Row>
           <Row className="mb-3">
                <FormLabel className="col-2 text-end">Assign</FormLabel>
                <Col className="col-8">
                    <div className="border p-3" style={{maxWidth:"49%"}}>
                        <FormLabel><strong>Assign to</strong></FormLabel>
                        <FormControl type="text" defaultValue="Everyone" className="mb-3" />
                        
                        <FormLabel><strong>Due</strong></FormLabel>
                        <FormControl type="date" id="assignment-due" defaultValue={assignment.dueDate} className="mb-3"/>
                        
                        <Row>
                            <Col>
                                <FormLabel><strong>Available from</strong></FormLabel>
                                <FormControl type="date" id="assignment-availablefrom" defaultValue={assignment.availableFrom}/>
                            </Col>
                            <Col>
                                <FormLabel><strong>Until</strong></FormLabel>
                                <FormControl type="date" id="assignment-availableuntil" defaultValue={assignment.availableUntil}/>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <hr />
            <div className="float-end" >
            <Button variant="secondary" className="me-2" onClick={() => router.push(`/kambaz/Courses/${cid}/assignments`)}>Cancel</Button>
            <Button variant="danger" onClick={() => {
             if (isNew) {
            const newAssignment = {
            _id: crypto.randomUUID(),
            title: (document.getElementById("assignment-title") as HTMLInputElement).value,
            description: (document.getElementById("assignment-description") as HTMLTextAreaElement).value,
            points: Number((document.getElementById("assignment-points") as HTMLInputElement).value),
            course:cid,
            dueDate: (document.getElementById("assignment-due") as HTMLInputElement).value,
            availableFrom: (document.getElementById("assignment-availablefrom") as HTMLInputElement).value,
            availableUntil: (document.getElementById("assignment-availableuntil") as HTMLInputElement).value,
            };
            dispatch(addAssignment(newAssignment));
             } else {
            dispatch(updateAssignment({
            ...assignment,
            title: (document.getElementById("assignment-title") as HTMLInputElement).value,
            description: (document.getElementById("assignment-description") as HTMLTextAreaElement).value,
            points: Number((document.getElementById("assignment-points") as HTMLInputElement).value),
            }));
        }
        router.push(`/kambaz/Courses/${cid}/assignments`);
        }}>Save</Button>  
            </div>
        </div>
    );
}

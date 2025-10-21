"use client";
import { FormLabel, Row, Col, FormControl, FormSelect, FormCheck, Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";
export default function Assignmenteditor() {
    const {cid,aid } = useParams();
    const assignment = db.assignments.find ((a)=> a._id === aid);
    if (!assignment) {
        return <div>Assignment not found</div>;
    }
    return (
        <div id="wd-assignment-editor">
           <Row className="mb-3">
                <FormLabel>Assignment Name</FormLabel>
                <Col style={{maxWidth:"50%"}}>
                    <FormControl type="text" defaultValue={assignment.title}/>
                </Col>
           </Row>
            <Row className="mb-3">
                <Col style={{maxWidth:"50%"}}>           
                    <FormControl type="text" as="textarea" rows={8} defaultValue={assignment.description}/>
                </Col>
            </Row>
            <Row className="mb-3" >
                  <FormLabel className="col-2 text-end">Points</FormLabel>
                <Col className="col-8">
                    <FormControl type="number" defaultValue={assignment.points} style={{maxWidth:"49%"}}/>
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
                        <FormControl type="datetime" defaultValue={assignment.dueDate} className="mb-3"/>
                        
                        <Row>
                            <Col>
                                <FormLabel><strong>Available from</strong></FormLabel>
                                <FormControl type="datetime" defaultValue={assignment.availableFrom}/>
                            </Col>
                            <Col>
                                <FormLabel><strong>Until</strong></FormLabel>
                                <FormControl type="datetime" defaultValue={assignment.availableUntil}/>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <hr />
            <div className="float-end" >
            <Button variant="secondary" className="me-2">Cancel</Button>
            <Button variant="danger">Save</Button>  
            </div>
        </div>
    );
}

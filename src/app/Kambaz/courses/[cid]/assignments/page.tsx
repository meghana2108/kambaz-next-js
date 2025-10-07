import Link from "next/link";
import { ListGroup, ListGroupItem, Button, FormCheck, FormControl, InputGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../modules/LessonControlButtons";
import { FaEllipsisV, FaPlus, FaSearch } from "react-icons/fa";
import { SlBookOpen } from "react-icons/sl";
export default function AssignmentsPage() {
    return (
        <div>
            <div className="d-flex align-items-center gap-2 mb-3">
            <div className="position-relative" style={{width: "300px"}}>
                <FaSearch className="position-absolute" style={{left: "10px", top: "50%", transform: "translateY(-50%)", color: "#999"}} />
                <FormControl type="text" placeholder="Search..." style={{paddingLeft: "35px"}} />
            </div>
            <Button variant="secondary" size="sm" id="wd-add-group-btn" className="text-nowrap">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>
            <Button variant="danger" size="sm" id="wd-add-assignment-btn" className="text-nowrap">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            </div>
            <ListGroup className="rounded-0" id="wd-assignments">                
                <ListGroupItem className="wd-module p-0 mb-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-5"/> Assignments 
                 <div className="d-flex align-items-center float-end">
                    <span className="text-gray bg-transparent rounded-pill px-3 py-1 me-2" style={{ fontSize: "0.9rem" }}>
                    40% of Total
                    </span>
                    <Button variant="link" size="sm" className="me-1 p-0">
                    <FaPlus color="#F5F5F5" />
                    </Button>
                    <Button variant="link" size="sm" className="p-0">
                    <FaEllipsisV color="#F5F5F5" />
                    </Button>
                </div>
                </div>
                        <ListGroupItem className="wd-lesson p-3 ps-6">
                            <div className="d-flex align-items-start">
                                <BsGripVertical className="me-2 fs-5"/><SlBookOpen className="me-2 fs-5 text-success"/>
                                <div className="flex-fill">
                                <Link href="/kambaz/courses/cs101/assignments/1" className="wd-assignment-link">A1 - ENV+HTML</Link><LessonControlButtons/>
                                <p className="small mb-0">
                                    <span className="text-danger">Multiple Modules </span>| Not available until 15 Sep at 00:00 |</p>                      
                                <p className="small mb-0">Due 22 Sep at 23:59 | -/100 pts</p>
                            </div>
                        </div>
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-6">
                            <div className="d-flex align-items-start">
                            <BsGripVertical className="me-2 fs-5"/><SlBookOpen className="me-2 fs-5 text-success"/>
                                <div className="flex-fill">
                                    <Link href="/kambaz/courses/cs101/assignments/1" className="wd-assignment-link">A2 - CSS+BOOTSTRAP</Link><LessonControlButtons/>          
                                    <p className="small mb-0">
                                        <span className="text-danger">Multiple Modules </span>| Not available until 29 Sep at 00:00 |</p>                      
                                    <p className="small mb-0">Due 06 Oct at 23:59 | -/100 pts</p>                       
                                </div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem className="wd-lesson p-3 ps-6">
                            <div className="d-flex align-items-start">
                            <BsGripVertical className="me-2 fs-5"/><SlBookOpen className="me-2 fs-5 text-success"/>
                                <div className="flex-fill">
                                    <Link href="/kambaz/courses/cs101/assignments/1" className="wd-assignment-link">A3 - JS+REACT</Link><LessonControlButtons/>                      
                                    <p className="small mb-0">
                                    <span className="text-danger">Multiple Modules </span>| Not available until 06 Oct at 00:00 |</p>                      
                                    <p className="small mb-0">Due 20 Oct at 23:59 | -/100 pts</p>
                                </div>
                            </div>    
                        </ListGroupItem>
                </ListGroupItem>
                <ListGroupItem className="wd-module p-0 mb-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-5"/> Quizzes
                            <span className="float-end">
                                <Button variant="link"  size="sm" className="me-1">
                                    <FaPlus color="#F5F5F5"/>
                                </Button>
                                <Button variant="link" size="sm">
                                    <FaEllipsisV color="#F5F5F5" />
                                </Button>
                            </span>
                    </div>
                        <ListGroupItem className="wd-lesson p-3 ps-6">
                            <div className="d-flex align-items-start">
                                <BsGripVertical className="me-2 fs-5"/><SlBookOpen className="me-2 fs-5 text-success"/>
                                <div className="flex-fill">
                                    <Link href="/kambaz/courses/cs101/assignments/1" className="wd-quiz-link">Q1</Link><LessonControlButtons/>                      
                                    <p className="small mb-0">
                                        Not available until 22 Sep at 0:00 | Due 29 Sep at 23:59 | -/29 pts
                                    </p>
                                </div>
                            </div>
                        </ListGroupItem>
                                <ListGroupItem className="wd-lesson p-3 ps-6">
                                    <div className="d-flex align-items-start">
                                        <BsGripVertical className="me-2 fs-5"/><SlBookOpen className="me-2 fs-5 text-success"/>
                                        <div className="flex-fill">
                                        <Link href="/kambaz/courses/cs101/assignments/1" className="wd-quiz-link">Q2</Link><LessonControlButtons/>          
                                        <p>Not available until 29 Sep at 0:00 | Due 06 Oct at 23:59 | -/29 pts</p>
                                        </div>
                                    </div>
                                </ListGroupItem>
                </ListGroupItem>                
                <ListGroupItem className="wd-module p-0 mb-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-5"/> Exams 
                        <span className="float-end">
                            <Button variant="link"  size="sm" className="me-1">
                                <FaPlus color="#F5F5F5"/>
                            </Button>
                            <Button variant="link" size="sm">
                                <FaEllipsisV color="#F5F5F5" />
                            </Button>
                        </span>
                    </div>
                            <ListGroupItem className="wd-lesson p-3 ps-6">
                                <div className="d-flex align-items-start">
                                    <BsGripVertical className="me-2 fs-5"/><SlBookOpen className="me-2 fs-5 text-success"/>
                                    <div className="flex-fill">
                                        <Link href="/kambaz/courses/cs101/assignments/1" className="wd-exam-link">X1</Link><LessonControlButtons/>                      
                                        <p>Due 3 Nov at 23:59 | -/100 pts</p>
                                    </div>
                                </div>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-6">
                                <div className="d-flex align-items-start">
                                    <BsGripVertical className="me-2 fs-5"/><SlBookOpen className="me-2 fs-5 text-success"/>
                                    <div className="flex-fill">
                                        <Link href="/kambaz/courses/cs101/assignments/1" className="wd-exam-link">X2</Link><LessonControlButtons/>                      
                                        <p>Due 7 Dec at 23:59 | -/100 pts</p>
                                    </div>
                                </div>
                            </ListGroupItem>
                </ListGroupItem>
                <ListGroupItem className="wd-module p-0 mb-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-5"/> Projects 
                    <span className="float-end">
                        <Button variant="link"  size="sm" className="me-1">
                            <FaPlus color="#F5F5F5"/>
                        </Button>
                        <Button variant="link" size="sm">
                            <FaEllipsisV color="#F5F5F5" />
                        </Button>
                    </span>
                    </div>
                            <ListGroupItem className="wd-lesson p-3 ps-6">
                                <div className="d-flex align-items-start">
                                    <BsGripVertical className="me-2 fs-5"/><SlBookOpen className="me-2 fs-5 text-success"/>
                                    <div className="flex-fill">
                                        <Link href="/kambaz/courses/cs101/assignments/1" className="wd-project-link">Project - Kambaz Quizzes</Link><LessonControlButtons/>                      
                                        <p>Due 7 Dec at 23:59 | -/100 pts</p>
                                    </div>
                                </div>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-6">
                                <div className="d-flex align-items-start">
                                    <BsGripVertical className="me-2 fs-5"/><SlBookOpen className="me-2 fs-5 text-success"/>
                                    <div className="flex-fill">
                                        <Link href="/kambaz/courses/cs101/assignments/1" className="wd-project-link">Project - Kambaz Pazza</Link><LessonControlButtons/>                      
                                        <p>Due 7 Dec at 23:59 | -/100 pts</p>
                                    </div>
                                </div>
                            </ListGroupItem>
                           <ListGroupItem className="wd-lesson p-3 ps-6">
                                <div className="d-flex align-items-start">
                                    <BsGripVertical className="me-2 fs-5"/><SlBookOpen className="me-2 fs-5 text-success"/>
                                    <div className="flex-fill">
                                        <Link href="/kambaz/courses/cs101/assignments/1" className="wd-project-link">Project - Social Newtwork</Link><LessonControlButtons/>                      
                                        <p>Due 7 Dec at 23:59 | -/100 pts</p>
                                    </div>
                                </div>
                            </ListGroupItem>
                </ListGroupItem>
        </ListGroup>
        </div>
    );
}

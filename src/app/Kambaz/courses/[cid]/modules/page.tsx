import { ListGroup, ListGroupItem } from "react-bootstrap"
import ModulesControls from "./ModulesControls"
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

export default function modules() {
    return (
       <div>
            <ModulesControls/><br/><br/><br/>
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3"/> Week 1<LessonControlButtons/></div>
                    <ListGroup className="wd-lessons rounded-0">
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3"/>Learning Objectives<LessonControlButtons/>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"><BsGripVertical className="me-2 fs-3"/>Introduction to course<LessonControlButtons/></span>  
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"></span><BsGripVertical className="me-2 fs-3"/>What is Web Development?<LessonControlButtons/>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"></span><BsGripVertical className="me-2 fs-3"/>Setting up the Development Environment<LessonControlButtons/>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"></span><BsGripVertical className="me-2 fs-3"/> Creating React Web Applications<LessonControlButtons/>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"></span><BsGripVertical className="me-2 fs-3"/>Getting Started with Assignment 1<LessonControlButtons/>
                            </ListGroupItem>
                    </ListGroup>
                    <ListGroup className="wd-lessons rounded-0">
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3"/> Reading <LessonControlButtons/>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"></span><BsGripVertical className="me-2 fs-3"/>Full Stack Developer - Chapter 1 - Introduction<LessonControlButtons/>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"></span><BsGripVertical className="me-2 fs-3"/>Full Stack Developer - Chapter 2 - Creating a user<LessonControlButtons/>
                            </ListGroupItem>
                    </ListGroup>
                    <ListGroup className="wd-lessons rounded-0">
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3"/> Slides <LessonControlButtons/>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"></span><BsGripVertical className="me-2 fs-3"/>Introduction to Web Development<LessonControlButtons/>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"></span><BsGripVertical className="me-2 fs-3"/>Creating an HTTP server with Node.js<LessonControlButtons/>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"></span><BsGripVertical className="me-2 fs-3"/>Creating React Applications<LessonControlButtons/>
                            </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>Week 2 : Lecture 2 - Prototyping the React Kambaz User Interface with HTML<LessonControlButtons/>
                        </div>
                    <ListGroup className="wd-lessons rounded-0 list-group-flush">
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3"/>Learning Objectives<LessonControlButtons/>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"><BsGripVertical className="me-2 fs-3"/>Learn how to create user interface with HTML<LessonControlButtons/></span>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"><BsGripVertical className="me-2 fs-3"/>Keep Working on the Assignment<LessonControlButtons/></span>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"><BsGripVertical className="me-2 fs-3"/>Deploy the Assignment to Vercel<LessonControlButtons/></span>
                            </ListGroupItem>
                    </ListGroup>
                    <ListGroup className="wd-lessons rounded-0">
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3"/>Slides<LessonControlButtons/>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"><BsGripVertical className="me-2 fs-3"/>Introduction to HTML and DOM<LessonControlButtons/></span>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"><BsGripVertical className="me-2 fs-3"/>Formatting Web Content with Headings and Paragraphs<LessonControlButtons/></span>
                            </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
                <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>Week 3:  Lecture 3 - Styling Web Pages with CSS and Bootstrap, Assignment 2<LessonControlButtons/>
                        </div>
                    <ListGroup className="wd-lessons rounded-0">
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <BsGripVertical className="me-2 fs-3"/>Learning Objectives<LessonControlButtons/>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"><BsGripVertical className="me-2 fs-3"/>Introduction to CSS<LessonControlButtons/></span>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"><BsGripVertical className="me-2 fs-3"/>Selectors by tag ID<LessonControlButtons/></span>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"><BsGripVertical className="me-2 fs-3"/>Styling Color, and Background Color<LessonControlButtons/></span>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"><BsGripVertical className="me-2 fs-3"/>Styling Dimensions and positions<LessonControlButtons/></span>
                            </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                <span className="ms-4"><BsGripVertical className="me-2 fs-3"/>The box model - styling margins, borders, and paddings<LessonControlButtons/></span>
                            </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>
       </div>
    );
}

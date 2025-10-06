"use client";
import Link from "next/link";
import Image from "next/image";
import {Row, Col, CardImg, Card, CardBody, CardTitle, CardText, Button} from "react-bootstrap";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course-1" style={{width:300}}>
                    <Card>
                        <Link href="/kambaz/courses/cs101/home" className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <CardImg variant="top" src="/images/fsd.png" width="100%" height={160}/>
                        <CardBody>
                            <CardTitle id="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
                            <CardText className="wd-dashboard-course-description" style={{height:"100px"}}>
                                Full Stack Development
                            </CardText>
                            <Button variant="primary">Go</Button>
                        </CardBody>
                        </Link>
                        </Card>
                    </Col>
                     <Col className="wd-dashboard-course-2" style={{width:300}}>
                    <Card>
                        <Link href="/kambaz/courses/cs101/home" className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <CardImg variant="top" src="/images/ds.jpeg" width="100%" height={160}/>
                        <CardBody>
                            <CardTitle id="wd-dashboard-course-title text-nowrap overflow-hidden">DS201 React JS</CardTitle>
                            <CardText className="wd-dashboard-course-description" style={{height:"100px"}}>
                                Data Science
                            </CardText>
                            <Button variant="primary">Go</Button>
                        </CardBody>
                        </Link>
                        </Card>
                    </Col>
                     <Col className="wd-dashboard-course-3" style={{width:300}}>
                    <Card>
                        <Link href="/kambaz/courses/cs101/home" className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <CardImg variant="top" src="/images/cc.jpeg" width="100%" height={160}/>
                        <CardBody>
                            <CardTitle id="wd-dashboard-course-title text-nowrap overflow-hidden">CC301 React JS</CardTitle>
                            <CardText className="wd-dashboard-course-description" style={{height:"100px"}}>
                                Cloud Computing
                            </CardText>
                            <Button variant="primary">Go</Button>
                        </CardBody>
                        </Link>
                        </Card>
                    </Col>
                     <Col className="wd-dashboard-course-4" style={{width:300}}>
                    <Card>
                        <Link href="/kambaz/courses/cs101/home" className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <CardImg variant="top" src="/images/pdp.jpg" width="100%" height={160}/>
                        <CardBody>
                            <CardTitle id="wd-dashboard-course-title text-nowrap overflow-hidden">CS401 React JS</CardTitle>
                            <CardText className="wd-dashboard-course-description" style={{height:"100px"}}>
                                Programming Design Paradigm
                            </CardText>
                            <Button variant="primary">Go</Button>
                        </CardBody>
                        </Link>
                        </Card>
                    </Col>
                     <Col className="wd-dashboard-course-5" style={{width:300}}>
                    <Card>
                        <Link href="/kambaz/courses/cs101/home" className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <CardImg variant="top" src="/images/algo.jpeg" width="100%" height={160}/>
                        <CardBody>
                            <CardTitle id="wd-dashboard-course-title text-nowrap overflow-hidden">CS501 React JS</CardTitle>
                            <CardText className="wd-dashboard-course-description" style={{height:"100px"}}>
                                Algorithms
                            </CardText>
                            <Button variant="primary">Go</Button>
                        </CardBody>
                        </Link>
                        </Card>
                    </Col>
                     <Col className="wd-dashboard-course-6" style={{width:300}}>
                    <Card>
                        <Link href="/kambaz/courses/cs101/home" className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <CardImg variant="top" src="/images/ai.jpeg" width="100%" height={160}/>
                        <CardBody>
                            <CardTitle id="wd-dashboard-course-title text-nowrap overflow-hidden">CS601 React JS</CardTitle>
                            <CardText className="wd-dashboard-course-description" style={{height:"100px"}}>
                                Foundations of AI
                            </CardText>
                            <Button variant="primary">Go</Button>
                        </CardBody>
                        </Link>
                        </Card>
                    </Col>
                     <Col className="wd-dashboard-course-7" style={{width:300}}>
                    <Card>
                        <Link href="/kambaz/courses/cs101/home" className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <CardImg variant="top" src="/images/graphics.jpeg" width="100%" height={160}/>
                        <CardBody>
                            <CardTitle id="wd-dashboard-course-title text-nowrap overflow-hidden">CS701 React JS</CardTitle>
                            <CardText className="wd-dashboard-course-description" style={{height:"100px"}}>
                                Computer Graphics
                            </CardText>
                            <Button variant="primary">Go</Button>
                        </CardBody>
                        </Link>
                        </Card>
                    </Col>
                </Row>  
            </div>
        </div>
    );
}
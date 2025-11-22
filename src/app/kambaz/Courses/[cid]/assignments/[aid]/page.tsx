"use client";
import { FormLabel, Row, Col, FormControl, FormSelect, FormCheck, Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/kambaz/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { addAssignment, updateAssignment } from "../reducer";

export default function Assignmenteditor() {
    const { cid, aid } = useParams();
    const isNew = aid === "new";
    const router = useRouter();
    const dispatch = useDispatch();
    
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";
    
    const existingAssignment = useSelector((state: RootState) =>
    state.assignmentsReducer.find(a => a._id === aid));
    
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        points: 100,
        assignmentGroup: "ASSIGNMENTS",
        displayGradeAs: "Percentage",
        submissionType: "Online",
        dueDate: "",
        availableFrom: "",
        availableUntil: "",
        textEntry: false,
        websiteUrl: true,
        mediaRecordings: false,
        studentAnnotation: false,
        fileUploads: false,
    });
    
    useEffect(() => {
        if (!isNew && existingAssignment) {
            setFormData({
                title: existingAssignment.title || "",
                description: existingAssignment.description || "",
                points: existingAssignment.points || 100,
                assignmentGroup: existingAssignment.assignmentGroup || "ASSIGNMENTS",
                displayGradeAs: existingAssignment.displayGradeAs || "Percentage",
                submissionType: existingAssignment.submissionType || "Online",
                dueDate: existingAssignment.dueDate || "",
                availableFrom: existingAssignment.availableFrom || "",
                availableUntil: existingAssignment.availableUntil || "",
                textEntry: existingAssignment.textEntry || false,
                websiteUrl: existingAssignment.websiteUrl !== undefined ? existingAssignment.websiteUrl : true,
                mediaRecordings: existingAssignment.mediaRecordings || false,
                studentAnnotation: existingAssignment.studentAnnotation || false,
                fileUploads: existingAssignment.fileUploads || false,
            });
        }
    }, [isNew, existingAssignment]);
    
    useEffect(() => {
        if (currentUser && !isFaculty) {
            alert("Only faculty can create or edit assignments");
            router.push(`/kambaz/Courses/${cid}/assignments`);
        }
    }, [currentUser, isFaculty, router, cid]);
    
    if (!isNew && !existingAssignment) {
        return <div>Assignment Not Found</div>;
    }
    
    if (!isFaculty) {
        return <div className="alert alert-danger">Access Denied: Only faculty can edit assignments</div>;
    }
    
  const handleSave = () => {
    if (!cid) return;
    
    if (isNew) {
        const newAssignment = {
            _id: crypto.randomUUID(),
            ...formData,
            course: cid as string,
        };
        dispatch(addAssignment(newAssignment));
    } else {
        if (!existingAssignment) return; 
        dispatch(updateAssignment({
            ...existingAssignment,
            ...formData,
        }));
    }
    router.push(`/kambaz/Courses/${cid}/assignments`);
};

    return (
        <div id="wd-assignment-editor">
            <Row className="mb-3">
                <FormLabel>Assignment Name</FormLabel>
                <Col style={{maxWidth:"50%"}}>
                    <FormControl 
                        type="text" 
                        id="assignment-title" 
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                </Col>
            </Row>
            
            <Row className="mb-3">
                <Col style={{maxWidth:"50%"}}>           
                    <FormControl 
                        type="text" 
                        as="textarea" 
                        id="assignment-description" 
                        rows={8} 
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                </Col>
            </Row>
            
            <Row className="mb-3">
                <FormLabel className="col-2 text-end">Points</FormLabel>
                <Col className="col-8">
                    <FormControl 
                        type="number" 
                        id="assignment-points" 
                        value={formData.points} 
                        onChange={(e) => setFormData({...formData, points: Number(e.target.value)})}
                        style={{maxWidth:"49%"}}
                    />
                </Col>
            </Row>
            
            <Row className="mb-3">
                <FormLabel className="col-2 text-end">Assignment Group</FormLabel>
                <Col className="col-8">
                    <FormSelect 
                        value={formData.assignmentGroup}
                        onChange={(e) => setFormData({...formData, assignmentGroup: e.target.value})}
                        style={{maxWidth:"49%"}}
                    > 
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
                    <FormSelect 
                        value={formData.displayGradeAs}
                        onChange={(e) => setFormData({...formData, displayGradeAs: e.target.value})}
                        style={{maxWidth:"49%"}}
                    > 
                        <option value="Percentage">Percentage</option>
                        <option value="Points">Points</option>
                    </FormSelect>
                </Col>
            </Row>
            
            <Row className="mb-3">
                <FormLabel className="col-2 text-end">Submission Type</FormLabel>
                <Col className="col-8">
                    <div className="border p-3" style={{maxWidth:"49%"}}>
                        <FormSelect 
                            value={formData.submissionType}
                            onChange={(e) => setFormData({...formData, submissionType: e.target.value})}
                            className="mb-3"
                        >
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </FormSelect>
                        
                        <div>
                            <strong>Online Entry Options</strong>
                            <FormCheck 
                                type="checkbox" 
                                label="Text Entry" 
                                className="mt-2"
                                checked={formData.textEntry}
                                onChange={(e) => setFormData({...formData, textEntry: e.target.checked})}
                            />
                            <FormCheck 
                                type="checkbox" 
                                label="Website URL"
                                checked={formData.websiteUrl}
                                onChange={(e) => setFormData({...formData, websiteUrl: e.target.checked})}
                            />
                            <FormCheck 
                                type="checkbox" 
                                label="Media Recordings"
                                checked={formData.mediaRecordings}
                                onChange={(e) => setFormData({...formData, mediaRecordings: e.target.checked})}
                            />
                            <FormCheck 
                                type="checkbox" 
                                label="Student Annotation"
                                checked={formData.studentAnnotation}
                                onChange={(e) => setFormData({...formData, studentAnnotation: e.target.checked})}
                            />
                            <FormCheck 
                                type="checkbox" 
                                label="File Uploads"
                                checked={formData.fileUploads}
                                onChange={(e) => setFormData({...formData, fileUploads: e.target.checked})}
                            />
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
                        <FormControl 
                            type="date" 
                            id="assignment-due" 
                            value={formData.dueDate}
                            onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                            className="mb-3"
                        />
                        
                        <Row>
                            <Col>
                                <FormLabel><strong>Available from</strong></FormLabel>
                                <FormControl 
                                    type="date" 
                                    id="assignment-availablefrom" 
                                    value={formData.availableFrom}
                                    onChange={(e) => setFormData({...formData, availableFrom: e.target.value})}
                                />
                            </Col>
                            <Col>
                                <FormLabel><strong>Until</strong></FormLabel>
                                <FormControl 
                                    type="date" 
                                    id="assignment-availableuntil" 
                                    value={formData.availableUntil}
                                    onChange={(e) => setFormData({...formData, availableUntil: e.target.value})}
                                />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            
            <hr />
            
            <div className="float-end">
                <Button 
                    variant="secondary" 
                    className="me-2" 
                    onClick={() => router.push(`/kambaz/Courses/${cid}/assignments`)}
                >
                    Cancel
                </Button>
                <Button 
                    variant="danger" 
                    onClick={handleSave}
                >
                    Save
                </Button>  
            </div>
        </div>
    );
}
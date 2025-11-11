"use client";

import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { updateAssignment } from "../../Assignments/reducer";
import { useState } from "react";

interface Assignment {
  _id: string;
  name: string;
  description: string; // ✅ added back
  course: string;
  modules: string;
  notavailableuntil: string;
  due: string;
  points: number;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const dispatch = useDispatch();
  const router = useRouter();

  const { assignments } = useSelector(
    (state: RootState) => state.assignmentReducer
  ) as { assignments: Assignment[] };

  const existing = assignments.find((a) => a._id === aid && a.course === cid);

  const [assignment, setAssignment] = useState<Assignment>(
    existing || {
      _id: "",
      name: "",
      description: "",
      course: cid,
      modules: "",
      notavailableuntil: "",
      due: "",
      points: 0,
    }
  );

  if (!existing) {
    return (
      <div className="p-4 text-center">
        <h4>Assignment not found</h4>
        <Button
          variant="secondary"
          className="mt-3"
          onClick={() => router.push(`/Courses/${cid}/Assignments`)}
        >
          Back to Assignments
        </Button>
      </div>
    );
  }

  const handleSave = () => {
    dispatch(updateAssignment(assignment));
    router.push(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div
      id="wd-assignments-editor"
      className="p-4"
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      <h4 className="fw-bold mb-4">Edit Assignment</h4>

      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label className="fw-semibold">Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={assignment.name}
            onChange={(e) =>
              setAssignment({ ...assignment, name: e.target.value })
            }
          />
        </Form.Group>

        {/* ✅ Description */}
        <Form.Group className="mb-4" controlId="wd-description">
          <Form.Label className="fw-semibold">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter assignment details..."
            value={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          />
        </Form.Group>

        {/* Points */}
        <Form.Group as={Row} className="mb-3" controlId="wd-points">
          <Form.Label column sm={3} className="fw-semibold">
            Points
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="number"
              value={assignment.points}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  points: parseInt(e.target.value, 10) || 0,
                })
              }
            />
          </Col>
        </Form.Group>

        {/* Assign Section */}
        <h6 className="fw-bold mb-2">Assign</h6>
        <Card className="mb-4 border-1 shadow-sm">
          <Card.Body>
            <Row>
              <Col md={4}>
                <Form.Group controlId="wd-due-date">
                  <Form.Label className="fw-semibold small">Due</Form.Label>
                  <Form.Control
                    type="date"
                    value={assignment.due}
                    onChange={(e) =>
                      setAssignment({ ...assignment, due: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="wd-available-from">
                  <Form.Label className="fw-semibold small">
                    Available From
                  </Form.Label>
                  <Form.Control
                    type="date"
                    value={assignment.notavailableuntil}
                    onChange={(e) =>
                      setAssignment({
                        ...assignment,
                        notavailableuntil: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="wd-available-until">
                  <Form.Label className="fw-semibold small">Until</Form.Label>
                  <Form.Control type="date" value="" readOnly />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" id="wd-cancel-btn" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="danger" id="wd-save-btn" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

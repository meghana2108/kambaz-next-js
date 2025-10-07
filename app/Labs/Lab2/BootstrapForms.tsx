"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  FormControl,
  FormLabel,
  FormCheck,
  Row,
  Col,
  Button,
  InputGroup,
  FormSelect,
} from "react-bootstrap";

const FormsExample = () => {
  return (
    <div>
      {/* Basic Forms */}
      <div id="wd-css-styling-forms" className="mb-5">
        <h2>Forms</h2>
        <FormLabel>Email address</FormLabel>
        <FormControl type="email" placeholder="name@example.com" />
        <FormLabel>Example textarea</FormLabel>
        <FormControl as="textarea" rows={3} />
      </div>

      {/* Dropdowns */}
      <div id="wd-css-styling-dropdowns" className="mb-5">
        <FormSelect>
          <option value="0" defaultChecked>
            Open this select menu
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </FormSelect>
      </div>

      {/* Switches */}
      <div id="wd-css-styling-switches" className="mb-5">
        <FormCheck
          type="switch"
          defaultChecked={false}
          label="Unchecked switch checkbox input"
        />
        <FormCheck
          type="switch"
          defaultChecked={true}
          label="Checked switch checkbox input"
        />
        <FormCheck
          type="switch"
          defaultChecked={false}
          label="Unchecked disabled switch checkbox input"
          disabled
        />
        <FormCheck
          type="switch"
          defaultChecked={true}
          label="Checked disabled switch checkbox input"
          disabled
        />
      </div>

      {/* Range with proper slider */}
      <div id="wd-css-styling-range-and-sliders" className="mb-5">
        <h3>Example range</h3>
        <input type="range" className="form-range" min={0} max={5} step={0.5} />
      </div>

      {/* Addons */}
      <div id="wd-css-styling-addons" className="mb-5">
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
          <FormControl />
        </InputGroup>
        <InputGroup>
          <FormControl />
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
        </InputGroup>
      </div>

      {/* Responsive forms 1 */}
      <div id="wd-css-responsive-forms-1" className="mb-5">
        <h3>Responsive forms</h3>

        <Form.Group className="mb-3" controlId="email1">
          <Row>
            <FormLabel column sm={2}>
              {" "}
              Email{" "}
            </FormLabel>
            <Col sm={10}>
              <FormControl type="email" defaultValue="email@example.com" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password1">
          <Row>
            <FormLabel column sm={2}>
              {" "}
              Password{" "}
            </FormLabel>
            <Col sm={10}>
              <FormControl type="password" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="textarea2">
          <Row>
            <FormLabel column sm={2}>
              {" "}
              Bio{" "}
            </FormLabel>
            <Col sm={10}>
              <FormControl as="textarea" style={{ height: "100px" }} />
            </Col>
          </Row>
        </Form.Group>
      </div>

      {/* Responsive forms 2 */}
      <div id="wd-css-responsive-forms-2" className="mb-5">
        <h3>Responsive forms</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formHorizontalEmail">
            <Row>
              <FormLabel column sm={2}>
                {" "}
                Email{" "}
              </FormLabel>
              <Col sm={10}>
                {" "}
                <FormControl type="email" placeholder="Email" />{" "}
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorizontalPassword">
            <Row>
              <FormLabel column sm={2}>
                {" "}
                Password{" "}
              </FormLabel>
              <Col sm={10}>
                {" "}
                <FormControl type="password" placeholder="Password" />{" "}
              </Col>
            </Row>
          </Form.Group>

          <fieldset>
            <Row className="mb-3">
              <FormLabel as="legend" column sm={2}>
                {" "}
                Radios{" "}
              </FormLabel>
              <Col sm={10}>
                <FormCheck
                  type="radio"
                  label="First radio"
                  name="formHorizontalRadios"
                  defaultChecked
                />
                <FormCheck
                  type="radio"
                  label="Second radio"
                  name="formHorizontalRadios"
                />
                <FormCheck
                  type="radio"
                  label="Third radio"
                  name="formHorizontalRadios"
                />
                <br />
                <FormCheck
                  type="checkbox"
                  label="Remember me"
                  name="formHorizontalRadios"
                />
              </Col>
            </Row>
          </fieldset>

          <Col>
            {" "}
            <Button type="submit">Sign in</Button>{" "}
          </Col>
        </Form>
      </div>
    </div>
  );
};

export default FormsExample;

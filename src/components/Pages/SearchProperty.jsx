import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SearchProperty() {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      firmName: "",
      regNo: "",
      jurisdiction: "",
    },

    // yup Validation
    validationSchema: Yup.object({
      name: Yup.string()
        .max(22, "Name must be 22 characters or less.")
        .required(),
      number: Yup.number()
        .required()
        .min(10, "The number is too short")
        .max(10, "The phone number should not exceed 10 characters")
        .positive(),
      email: Yup.string().email("Invalid email address").required(),
      firmName: Yup.string().required("Please type in a valid Firm Name "),
      regNo: Yup.number().required(
        "Please type in a valid Registration Number"
      ),
      jurisdiction: Yup.string().required("type in your jurisdiction"),
    }),
  });

  console.log(formik.values);
  // first step install yup for form validation and formik for state
  console.log(formik.errors);

  return (
    <>
      <Container style={{ minHeight: "60vh" }}>
        <Row className="mt-5">
          <Col className="py-4">
            <small>Step 1 of 5</small>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-3 fw-bold text-primary">Apply</h1>
          </Col>
        </Row>
        <Row className="text-danger mt-3 mb-5">
          <Col>
            <h4>
              You have selected Planner please fill the information below and
              proceed
            </h4>
          </Col>
        </Row>

        <hr className="my-5" />
        <Form className="mb-5" onSubmit={formik.handleSubmit}>
          <Row className="text-primary mt-5 mb-5 fw-bold">
            <Col>
              <h4>Planner Information</h4>
            </Col>
          </Row>
          <Row>
            {" "}
            <Form.Group className="mb-3 col-md-4">
              {/* <Form.Label>{formik.errors.name ? formik.errors.name : "Name of the Planner"} </Form.Label> */}

              <Form.Control
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Enter Full name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4">
              <Form.Label>Phone contact </Form.Label>
              <Form.Control
                name="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                placeholder="Phone contact"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4">
              <Form.Label> Email Address</Form.Label>
              <Form.Control
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4">
              <Form.Label> Registration No.</Form.Label>
              <Form.Control
                name="regNo"
                value={formik.values.regNo}
                onChange={formik.handleChange}
                type="text"
                placeholder="firm name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4">
              <Form.Label> Firm</Form.Label>
              <Form.Control
                name="firmName"
                value={formik.values.firmName}
                onChange={formik.handleChange}
                type="text"
                placeholder="firm name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4">
              <Form.Label> Jurisdiction</Form.Label>
              <Form.Control
                name="jurisdiction"
                value={formik.values.jurisdiction}
                onChange={formik.handleChange}
                type="text"
                inputMode="numeric"
                placeholder="Jurisdiction"
              />
            </Form.Group>
            {/* <p>{formik.values}</p> */}
            <Form.Control type="submit" />
          </Row>
        </Form>
      </Container>
    </>
  );
}

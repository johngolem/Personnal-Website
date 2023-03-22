import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function IndividualRegistration() {
  const formik = useFormik({
    initialValues: {
      companyName: "",
      regNo: "",
      country: "",
      kraPin: "",
      physicAdd: "",
      postalAdd: "",
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
            <h4>Company Registration</h4>
          </Col>
        </Row>

        <hr className="my-5" />
        <Form className="mb-5" onSubmit={formik.handleSubmit}>
          <Row className="text-primary mt-5 mb-5 fw-bold">
            <Col>
              <h4>Registration ...</h4>
            </Col>
          </Row>
          <Row>
            {" "}
            <Form.Group className="mb-3 col-md-4">
              <Form.Label>Company Name </Form.Label>
              <Form.Control
                name="idNumber"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                placeholder="Company Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4">
              <Form.Label>ID Serial Number </Form.Label>
              <Form.Control
                name="idSerialNumber"
                value={formik.values.idSerialNumber}
                onChange={formik.handleChange}
                placeholder="Enter ID Serial Number "
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4">
              <Form.Label>Mother's Maiden Name </Form.Label>
              <Form.Control
                name="motherMaiden"
                value={formik.values.motherMaiden}
                onChange={formik.handleChange}
                placeholder="Mother's Maiden Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4">
              <Form.Label>First Name </Form.Label>
              <Form.Control
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4">
              <Form.Label>Other Name </Form.Label>
              <Form.Control
                name="otherName"
                value={formik.values.otherName}
                onChange={formik.handleChange}
                placeholder="Other Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4">
              <Form.Label>Last Name </Form.Label>
              <Form.Control
                name="surName"
                value={formik.values.surName}
                onChange={formik.handleChange}
                placeholder="Surname "
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4">
              <Form.Label>Sex </Form.Label>
              <Form.Control
                name="sex"
                value={formik.values.sex}
                onChange={formik.handleChange}
                placeholder="Sex"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4">
              <Form.Label> Physical Address</Form.Label>
              <Form.Control
                name="physicAdd"
                value={formik.values.physicAdd}
                onChange={formik.handleChange}
                type="address"
                placeholder="Physical Address"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4">
              <Form.Label> Postal Address.</Form.Label>
              <Form.Control
                name="regNo"
                value={formik.values.postalAdd}
                onChange={formik.handleChange}
                type="text"
                placeholder="Postal Address"
              />
            </Form.Group>
            {/* <Form.Group className="mb-3 col-md-4">
              <Form.Label> Jurisdiction</Form.Label>
              <Form.Control
                name="jurisdiction"
                value={formik.values.jurisdiction}
                onChange={formik.handleChange}
                type="text"
                inputMode="numeric"
                placeholder="Jurisdiction"
              />
            </Form.Group> */}
            {/* <p>{formik.values}</p> */}
            {/* <Form.Control type="submit" /> */}
            <button type="submit">Verify</button>
          </Row>
        </Form>
      </Container>
    </>
  );
}

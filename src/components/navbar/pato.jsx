import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logoNy.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ChevronDown } from "react-feather";

function MainNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <div>
        <Navbar
          bg="success"
          // bg="primary"
          className="navbg"
          expand="false"
          style={{ zIndex: "1100", paddingBottom: "0" }}
        >
          <Container className=" text-white d-none d-md-none d-lg-block d-xl-block d-xxl-block">
            <Row>
              <Col md="2" sm="12" className="bg-white roundedbottom ">
                <Navbar.Brand as={Link} to="/">
                  <img
                    alt=""
                    src={logo}
                    width="80%"
                    className="d-inline-block align-bottom py-1 px-3 "
                  />
                </Navbar.Brand>
              </Col>
              <Col md="8" sm="6" className="  fw-bold text-sm-start mt-auto">
                {" "}
                <h4 className=" text-md-start ms-5 fw-bold text-sm-start mt-auto">
                  <span className="fw-light">Department of </span>
                  Lands, Physical planning, housing{" "}
                  <span className="fw-light">and </span>
                  {""}urban development.
                </h4>
              </Col>
              <Col md="2" lg="2" sm="6" className="mt-auto">
                {" "}
                <div
                  style={{
                    borderRadius: "10px 10px 0px 0px",
                    paddingBottom: "0px",
                    marginBottom: "0px",
                  }}
                  className="text-pink col-lg-10 fw-semibold bg-yellow text-center fs-5"
                  variant="white"
                  size="lg"
                  onClick={toggleShow}
                >
                  <ChevronDown size={35} />
                  Menu
                </div>
              </Col>
            </Row>
          </Container>

          <Container
            fluid
            className=" text-white d-block d-md-block d-lg-none d-xl-none d-xxl-none"
          >
            <Row className="bg-white">
              <Col md="2" sm="3" xs="3" className="bg-white ">
                {" "}
                <Navbar.Brand to="/">
                  <img
                    alt=""
                    as={Link}
                    src={logo}
                    width="100%"
                    className="d-inline-block align-bottom py-2"
                  />
                </Navbar.Brand>
              </Col>
              <Col md="10" sm="8" xs="9" className="  text-sm-start mt-auto ">
                {" "}
                <p className="fs-6 fw-bold text-primary">
                  <span className="fw-light">Department of lands,</span>
                  Physical planning, housing and urban development.
                </p>
              </Col>
            </Row>
            <Row className="navbg ">
              {" "}
              <Col md="3" sm="5" xs="6" className=" ms-auto pt-2">
                {" "}
                <div className="text-center">
                  {" "}
                  <Button
                    style={{
                      borderRadius: "17px 17px 0px 0px",
                      padding: "3px",
                    }}
                    className="text-warning col-6 col-md-7  col-sm-7 col-xs-5 fw-bold"
                    variant="yellow"
                    size="lg"
                    onClick={toggleShow}
                  >
                    Menu
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>{" "}
        <div style={{ minHeight: "3px" }} className="bg-white"></div>
        <Offcanvas
          backdrop={false}
          show={show}
          onClick={handleClose}
          onHide={handleClose}
          placement="top"
          style={{
            marginTop: "8vh",
            minHeight: "230px",
          }}
          className="shadow d-none d-md-none d-lg-block d-xl-block d-xxl-block"
        >
          <Container>
            {" "}
            <Nav
              style={{
                marginTop: "8vh",
              }}
              defaultActiveKey="/home"
              className="flex-column  "
            >
              <Nav.Link
                onClick={handleClose}
                as={Link}
                to="/"
                className=" fs-5 fw-lights"
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={handleClose}
                as={Link}
                to="/services"
                className=" fs-4 fw-semibold"
              >
                Login{" "}
              </Nav.Link>

              <Nav.Link
                onClick={handleClose}
                as={Link}
                to="services"
                className=" fs-4 fw-semibold"
              >
                Services
              </Nav.Link>
            </Nav>
          </Container>
        </Offcanvas>
        <Offcanvas
          backdrop={false}
          show={show}
          onHide={handleClose}
          placement="top"
          style={{
            marginTop: "9vh",

            minHeight: "300px",
          }}
          className="pt-5 shadow d-block d-md-block d-lg-none d-xl-none d-xxl-none"
        >
          <Container>
            {" "}
            <Nav
              style={{
                marginTop: "5vh",
              }}
              className="flex-column "
            >
              <Nav.Link
                onClick={handleClose}
                as={Link}
                to="/"
                className=" fs-5 fw-lights"
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={handleClose}
                as={Link}
                to="/estateandhousing"
                className=" fs-4 fw-semibold"
              >
                Estates & Housing{" "}
              </Nav.Link>
              <Nav.Link
                onClick={handleClose}
                as={Link}
                to="urbanplanninganddevelopment"
                className=" fs-4 fw-semibold"
              >
                Urban Planning & Development
              </Nav.Link>
            </Nav>
          </Container>
        </Offcanvas>
      </div>
    </>
  );
}

export default MainNav;

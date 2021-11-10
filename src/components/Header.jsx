import { useContext, useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavLink,
  Badge,
  Card,
  Row,
  Col,
  Image,
  Button,
  Offcanvas,
} from "react-bootstrap";
import rootContext from "../context";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { HiMenuAlt2 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";

const Header = () => {
  const { item, itemValue, add, setAdd } = useContext(rootContext);
  const [showCart, setShowCart] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  return (
    <Container className="wrapper">
      <Navbar className="align-items-center justify-content-between">
        <HiMenuAlt2
          size="2.3rem"
          className="p-1 pb-2 me-1 d-md-none"
          onClick={() => setShowCanvas(true)}
        />
        <Offcanvas show={showCanvas} onHide={() => setShowCanvas(false)}>
          <Offcanvas.Header closeButton>
            <Navbar.Brand href="#" className="pb-3">
              <img src="./images/logo.svg" alt="Sneakers Logo" />
            </Navbar.Brand>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="">
              <NavLink href="#" className="fw-bold fs-3">
                Collections
              </NavLink>
              <NavLink href="#" className="fw-bold fs-3">
                Men
              </NavLink>
              <NavLink href="#" className="fw-bold fs-3">
                Women
              </NavLink>
              <NavLink href="#" className="fw-bold fs-3">
                About
              </NavLink>
              <NavLink href="#" className="fw-bold fs-3">
                Contact
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        <Navbar.Brand href="#" className="pb-3">
          <img src="./images/logo.svg" alt="Sneakers Logo" />
        </Navbar.Brand>

        <Nav className="ms-1 ms-lg-3 me-auto d-none d-md-flex">
          <NavLink className="link ms-1 ms-lg-3 py-5" href="#">
            Collections
          </NavLink>
          <NavLink className="link ms-1 ms-lg-3 py-5" href="#">
            Men
          </NavLink>
          <NavLink className="link ms-1 ms-lg-3 py-5" href="#">
            Women
          </NavLink>
          <NavLink className="link ms-1 ms-lg-3 py-5" href="#">
            About
          </NavLink>
          <NavLink className="link ms-1 ms-lg-3 py-5" href="#">
            Contact
          </NavLink>
        </Nav>

        <NavLink
          className="cart ms-auto ms-md-0"
          onClick={() => setShowCart(!showCart)}
        >
          <AiOutlineShoppingCart className="cartIcon" />
          <Badge
            className={`badge ${add ? "" : "d-none"}`}
            size="sm"
            pill
            bg="primary"
          >
            {itemValue}
          </Badge>
        </NavLink>
        <NavLink href="#" className="ms-0 ms-lg-4 px-0">
          <Image
            className="avatar"
            src="./images/image-avatar.png"
            alt="Avatar"
            roundedCircle
          />
        </NavLink>
        <hr className="hr bg-lightGray" />
      </Navbar>

      {showCart && (
        <Card className="card border-0 shadow-lg">
          <Card.Header className="fw-bold d-flex align-items-center justify-content-between">
            Cart{" "}
            <GrFormClose
              onClick={() => setShowCart(false)}
              className="closeBtn"
            />
          </Card.Header>
          {add ? (
            <Card.Body>
              <Row className="d-flex align-self-center justify-content-between">
                <Col
                  xs={3}
                  className="d-flex align-self-center justify-content-center"
                >
                  <Image
                    className="image"
                    src={item.images[0]}
                    alt="Item"
                    fluid
                  />
                </Col>
                <Col xs={7}>
                  <small className="small text-paragraph fw-bold">
                    {item.title}
                  </small>
                  <br />
                  <small className="small text-paragraph fw-bold">
                    ${item.price} x {itemValue}
                    <span className="text-heading ms-2">
                      ${(item.price * itemValue).toFixed(2)}
                    </span>
                  </small>
                </Col>
                <Col
                  xs={2}
                  className="d-flex align-self-center justify-content-center"
                >
                  <ImBin className="binIcon" onClick={() => setAdd(false)} />
                </Col>
              </Row>
              <Button variant="primary text-white fs-6 fw-bold w-100 mt-3 mb-2">
                Checkout
              </Button>
            </Card.Body>
          ) : (
            <Card.Body>
              <Card.Title className="p-3 p-md-5 text-center fw-bold text-paragraph">
                Your cart is empty.
              </Card.Title>
            </Card.Body>
          )}
        </Card>
      )}
    </Container>
  );
};

export default Header;

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
} from "react-bootstrap";
import rootContext from "../context";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImBin } from "react-icons/im";

const Header = () => {
  const { item, itemValue } = useContext(rootContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <Container className="wrapper">
      <Navbar className="align-items-center justify-content-between">
        <Navbar.Brand href="/" className="pb-3">
          <img src="./images/logo.svg" alt="Sneakers Logo" />
        </Navbar.Brand>

        <Nav className="ms-1 ms-lg-3 me-auto d-none d-md-flex">
          <NavLink className="link ms-1 ms-lg-3 py-5" href="/">
            Collections
          </NavLink>
          <NavLink className="link ms-1 ms-lg-3 py-5" href="/">
            Men
          </NavLink>
          <NavLink className="link ms-1 ms-lg-3 py-5" href="/">
            Women
          </NavLink>
          <NavLink className="link ms-1 ms-lg-3 py-5" href="/">
            About
          </NavLink>
          <NavLink className="link ms-1 ms-lg-3 py-5" href="/">
            Contact
          </NavLink>
        </Nav>

        <NavLink
          className="cart ms-auto ms-md-0"
          onClick={() => setShowCart(!showCart)}
        >
          <AiOutlineShoppingCart className="cartIcon" />
          <Badge
            className={`badge ${itemValue > 0 ? "" : "d-none"}`}
            size="sm"
            pill
            bg="primary"
          >
            {itemValue}
          </Badge>
        </NavLink>
        <NavLink href="/" className="ms-0 ms-lg-4 px-0">
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
          <Card.Header className="fw-bold">Cart</Card.Header>
          {itemValue > 0 ? (
            <Card.Body>
              <Row>
                <Col xs={3}>
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
                <Col xs={2}>
                  <ImBin className="binIcon" />
                </Col>
              </Row>
              <Button variant="primary text-white fs-6 fw-bold w-100 mt-3 mb-2">
                Checkout
              </Button>
            </Card.Body>
          ) : (
            <Card.Body>
              <Card.Title className="p-5 text-center fw-bold text-paragraph">
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

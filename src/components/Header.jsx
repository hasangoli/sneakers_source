import { Container, Navbar, Nav, NavLink, Badge } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = ({ cardItems, setCardItems }) => {
  return (
    <Container>
      <Navbar className="navbar align-items-center justify-content-center">
        <Navbar.Brand href="/" className="pb-3">
          <img src="./images/logo.svg" alt="Sneakers Logo" />
        </Navbar.Brand>

        <Nav className="ms-3 me-auto">
          <NavLink className="link ms-3 py-5" href="/">
            Collections
          </NavLink>
          <NavLink className="link ms-3 py-5" href="/">
            Men
          </NavLink>
          <NavLink className="link ms-3 py-5" href="/">
            Women
          </NavLink>
          <NavLink className="link ms-3 py-5" href="/">
            About
          </NavLink>
          <NavLink className="link ms-3 py-5" href="/">
            Contact
          </NavLink>
        </Nav>

        <NavLink href="/" className="cart">
          <AiOutlineShoppingCart className="cartIcon" />
          <Badge
            className={`badge ${cardItems > 0 ? "" : "d-none"}`}
            size="sm"
            pill
            bg="primary"
          >
            {cardItems}
          </Badge>
        </NavLink>
        <NavLink href="/">
          <img
            className="avatar ms-4"
            src="./images/image-avatar.png"
            alt="Avatar"
            roundedCircle
          />
        </NavLink>
        <hr className="hr bg-lightGray" />
      </Navbar>
    </Container>
  );
};

export default Header;

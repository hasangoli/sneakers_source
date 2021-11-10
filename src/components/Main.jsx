import { useContext, useState } from "react";
import { Container, Row, Col, Image, Badge, Button } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TiPlus, TiMinus } from "react-icons/ti";
import rootContext from "../context";

const Main = () => {
  const [image, setImage] = useState(0);

  const { item, itemValue, setItemValue } = useContext(rootContext);

  const increment = () => setItemValue(itemValue + 1);
  const decrement = () => {
    if (itemValue > 0) {
      setItemValue(itemValue - 1);
    }
  };

  return (
    <Container className="container px-md-1 px-lg-5">
      <Row>
        <Col sx={12} md={6} className="p-3 p-lg-5">
          <Image
            src={item.images[image]}
            alt="Product Thumbnail"
            className="image"
            fluid
          />
          <Row>
            {item.thumbnails.map((thumbnail, index) => (
              <Col key={index} className="mt-4">
                <Image
                  className={`image ${image === index ? "active" : ""}`}
                  onClick={() => {
                    setImage(index);
                  }}
                  src={thumbnail}
                  fluid
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col sx={12} md={6} className="p-3 p-lg-5 my-auto">
          <p className="fs-6 fw-bold text-primary text-uppercase">
            {item.company}
          </p>
          <h1 className="fw-bold mb-4">{item.title}</h1>
          <p className="text-paragraph mb-4">{item.body}</p>
          <Row>
            <Col xs md={3}>
              <h4 className="fw-bold">${item.price}</h4>
            </Col>
            <Col xs className="me-auto">
              <Badge bg="secondary" className="text-primary">
                {item.off}%
              </Badge>
            </Col>
            <Col className="ms-auto" xs md={12}>
              <p className="text-gray fw-bold fs-6 text-decoration-line-through">
                ${item.realPrice}
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between mt-0 mt-lg-5">
            <Col
              as={Row}
              className="d-flex align-self-center justify-content-around ms-lg-3 bg-secondary p-2 rounded"
              xs={12}
              md={4}
            >
              <Col
                xs={4}
                className="d-flex align-self-center justify-content-center"
              >
                <TiMinus className="input-icon" onClick={decrement} />
              </Col>
              <Col
                xs={4}
                className="d-flex align-self-center justify-content-center"
              >
                <span className="span fw-bold text-heading">{itemValue}</span>
              </Col>
              <Col
                xs={4}
                className="d-flex align-self-center justify-content-center"
              >
                <TiPlus className="input-icon" onClick={increment} />
              </Col>
            </Col>
            <Button
              as={Col}
              xs={12}
              md={7}
              className="text-white py-2 mt-3 mt-lg-0 d-flex align-items-center justify-content-center fw-bold"
            >
              <AiOutlineShoppingCart className="me-3" />
              Add to cart
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

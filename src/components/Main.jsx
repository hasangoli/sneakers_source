import { useState } from "react";
import { Container, Row, Col, Image, Badge, Button } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";

const Main = ({ cardItems, setCardItems }) => {
  const [image, setImage] = useState(0);

  const item = {
    company: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    body: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: "125.00",
    off: "50",
    realPrice: "250.00",
    images: [
      "./images/image-product-1.jpg",
      "./images/image-product-2.jpg",
      "./images/image-product-3.jpg",
      "./images/image-product-4.jpg",
    ],
    thumbnails: [
      "./images/image-product-1-thumbnail.jpg",
      "./images/image-product-2-thumbnail.jpg",
      "./images/image-product-3-thumbnail.jpg",
      "./images/image-product-4-thumbnail.jpg",
    ],
  };

  return (
    <Container className="p-5">
      <Row>
        <Col sx="6" className="p-5">
          <Image
            src={item.images[image]}
            alt="Product Thumbnail"
            className="image"
            fluid
          />
          <Row>
            {item.thumbnails.map((thumbnail, index) => (
              <Col className="mt-4">
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
        <Col sx="6" className="p-5 my-auto">
          <p className="fs-6 fw-bold text-primary text-uppercase">
            {item.company}
          </p>
          <h1 className="fw-bold">{item.title}</h1>
          <p className="text-paragraph">{item.body}</p>
          <Row>
            <Col xs={3}>
              <h4 className="fw-bold">${item.price}</h4>
            </Col>
            <Col>
              <Badge bg="secondary" className="text-primary">
                {item.off}%
              </Badge>
            </Col>
          </Row>
          <p className="text-gray fw-bold fs-6 text-decoration-line-through">
            ${item.realPrice}
          </p>
          <Row>
            <Col as={Row} xs={5}>
              <Col xs={3}>
                <HiMinusSm />
              </Col>
              <Col xs={6}>
                <input className="input" type="number" />
              </Col>
              <Col xs={3}>
                <HiPlusSm />
              </Col>
            </Col>
            <Button
              as={Col}
              xs={7}
              className="text-white py-2 d-flex align-items-center justify-content-center fw-bold"
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
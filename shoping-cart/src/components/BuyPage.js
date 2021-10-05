import React, { useEffect, useState } from "react";
import Axios from "axios";
import { random, commerce, datatype } from "faker";
import { Container, Row, Col } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "API_KEY";
const url = `https://api.pexels.com/search?query=laptop&per_page=6&page=1`;
const localUrl = `https://api.jsonbin.io/b/615c6b2a9548541c29be58fd`;

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);
  // console.log(product);

  //   const fetchPhotos = async () => {
  //     const response = await Axios.get(url, {
  //       headers: { Authorization: apiKey },
  //     });
  //   };

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localUrl);
    // console.log(data);

    const { photos } = data;
    // console.log(photos);

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: datatype.uuid(),
    }));

    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h2 className="text-success text-center">Laptop Store</h2>
      <Row>
        {product.map((prod) => (
          <Col md={4} key={prod.id}>
            <CartItem product={prod} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;

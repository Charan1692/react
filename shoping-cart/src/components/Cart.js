import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  Col,
  Row,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container fluid>
      <h2 className="text-center text-success">User Cart</h2>
      <ListGroup className="border-success">
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img
                  src={item.tinyImage}
                  className="d-block mx-auto my-auto mt-3 rounded"
                  height="80px"
                  alt="tiny"
                />
              </Col>
              <Col className="text-center">
                <ListGroup>
                  <ListGroupItem>{item.productName}</ListGroupItem>
                  <ListGroupItem>Price: ${item.productPrice}</ListGroupItem>
                  <ListGroupItem>
                    <Button
                      onClick={() => removeItem(item)}
                      color="danger"
                      outline
                      className="w-100"
                    >
                      Remove
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>

      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3 border-success">
          <CardHeader className="bg-success text-white">Grand Total</CardHeader>
          <CardBody>
            <p>
              Your amount for {cartItem.length} product is {amount}
            </p>
            <Button onClick={buyNow} color="success" outline className="w-100">
              Buy Now
            </Button>
          </CardBody>
        </Card>
      ) : (
        <h3 className="text-center text-warning">Cart Empty</h3>
      )}
    </Container>
  );
};

export default Cart;

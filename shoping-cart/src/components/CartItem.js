import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const CartItem = ({ product, addInCart }) => {
  return (
    <Card className="border-success mb-2 px-2 py-2">
      <CardImg src={product.smallImage} top height="250px" width="100%" />
      <CardBody className="text-center">
        <CardTitle>
          <h5 className="text-success">{product.productName}</h5>
        </CardTitle>
        <CardText>
          <span className="text-success">Price:</span> ${product.productPrice}
        </CardText>
        <Button
          onClick={() => addInCart(product)}
          color="success"
          outline
          className="w-100"
        >
          Add to Cart
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;

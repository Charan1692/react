import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Navbar, NavbarBrand } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";
import { FaShoppingCart } from "react-icons/fa";

const App = () => {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      return toast("ALREADY ADDED IN CART", { type: "error" });
    }

    setCartItem([...cartItem, item]);
    return toast("Product Added to Cart", { type: "success" });
  };

  const buyNow = () => {
    setCartItem([]);
    return toast("Purchase Complete", { type: "success" });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
    return toast("Item Removed", { type: "warning" });
  };

  return (
    <>
      <Navbar color="success" light expand="md">
        <NavbarBrand className="text-white ms-3">
          Shopping Chart <FaShoppingCart />
        </NavbarBrand>
      </Navbar>
      <Container fluid>
        <ToastContainer />
        <Row>
          <Col md={8}>
            <BuyPage addInCart={addInCart} />
          </Col>
          <Col md={4}>
            <Cart buyNow={buyNow} removeItem={removeItem} cartItem={cartItem} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;

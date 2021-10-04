import React, { useState } from "react";
// components
import Icon from "./components/Icon";
// bootstarp
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, Container, Col, Row } from "reactstrap";
// message popups
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// styles
import "./styles/style.css";

// array
const itemArray = new Array(9).fill("Empty");
// console.log(itemArray);

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("Empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (
      itemArray[0] !== "Empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2]
    ) {
      setWinMessage(`${itemArray[0]} Won...`);
    } else if (
      itemArray[3] !== "Empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} Won...`);
    } else if (
      itemArray[6] !== "Empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} Won...`);
    } else if (
      itemArray[0] !== "Empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} Won...`);
    } else if (
      itemArray[1] !== "Empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} Won...`);
    } else if (
      itemArray[2] !== "Empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} Won...`);
    } else if (
      itemArray[0] !== "Empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} Won...`);
    } else if (
      itemArray[2] !== "Empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} Won...`);
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemArray[itemNumber] === "Empty") {
      itemArray[itemNumber] = isCross ? "Cross" : "Circle";
      setIsCross(!isCross);
    } else {
      return toast("ALREADY FILLED", { type: "error" });
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5 m-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="my-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <button
                className="btn btn-outline-warning w-100"
                onClick={reloadGame}
              >
                Reload Game
              </button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} Turn...
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card
                onClick={() => changeItem(index)}
                key={index}
                className="bg-warning"
              >
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

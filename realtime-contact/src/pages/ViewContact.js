import React, { useContext } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { ContactContext } from "../context/Context";

const ViewContact = () => {
  const { state } = useContext(ContactContext);
  // destructuring contact from the state
  // and rendering it in state
  //FIXME: DONE destructure contact from state
  const { contact } = state;
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col md="5" className="offset-md-3">
          <Card className="border-secondary">
            <CardBody className="text-center ">
              <img
                height="150"
                width="150"
                className="cardImg profile border-secondary"
                src={contact?.picture}
                alt="profile"
              />
              <CardTitle>
                <h1 className="text-secondary">
                  <strong>{contact?.name}</strong>
                </h1>
              </CardTitle>
              <CardSubtitle>
                <h3 className="text-secondary">{contact?.phoneNumber}</h3>
              </CardSubtitle>
              <a
                className="btn btn-outline-secondary btn-block"
                target="_blank"
                href={`mailto:{contact?.email}`}
                rel="noreferrer"
              >
                {contact?.email}
              </a>

              <a
                className="btn btn-outline-secondary btn-block"
                target="_blank"
                //TODO: DONE add google maps
                href={`https://maps.google.com/?=${contact?.address}`}
                rel="noreferrer"
              >
                {contact?.address}
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewContact;

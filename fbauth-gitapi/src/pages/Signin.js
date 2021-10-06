import React, { useContext, useState } from "react";
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import firebase from "firebase/compat/app";
import { UserContext } from "../context/UserContext";

const Signin = () => {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        setUser({
          email: response.user?.email,
          uid: response.user?.uid,
        });
      })
      .catch((err) => {
        console.error(err);
        toast(err.message, { type: "error" });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };

  if (user?.uid) {
    return <Redirect to="/" />;
  } else {
    return (
      <Container className="text-center">
        <Row>
          <Col lg={6} className="offset-lg-3 mt-5">
            <Card className="border-info">
              <Form onSubmit={handleSubmit}>
                <CardHeader className="bg-info text-white">
                  User Signin
                </CardHeader>
                <CardBody>
                  <FormGroup row>
                    <Label for="email" sm={3}>
                      Email
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="email"
                        placeholder="Enter email.."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-2"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="password" sm={3}>
                      Password
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="password"
                        placeholder="Enter password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-2"
                      />
                    </Col>
                  </FormGroup>
                  <Button type="submit" outline color="info" className="w-100">
                    Signin
                  </Button>
                </CardBody>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Signin;

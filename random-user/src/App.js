import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import Axios from "axios";

const App = () => {
  const [users, setUsers] = useState({});
  console.log(users);

  const fetchData = async () => {
    const { data } = await Axios.get(`https://randomuser.me/api/`);
    // console.log(data);
    setUsers(data.results[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="mt-5 bg-light">
      <Row>
        <Col md={6} className="offset-md-3">
          <Card className="px-2 py-2 border-warning">
            <img
              src={users.picture?.large}
              className="card-img-top rounded-circle img-fluid img-thumbnail d-block mx-auto border-warning"
              style={{
                height: "150px",
                width: "150px",
              }}
              alt="profile"
            />
            <CardBody>
              <CardTitle>
                <h1 className="text-center text-warning">
                  {users.name?.title} {users.name?.first} {users.name?.last}
                </h1>
              </CardTitle>
              <CardText>
                <ListGroup className="text-center">
                  <ListGroupItem className="border-warning">
                    Email: {users.email}
                  </ListGroupItem>
                  <ListGroupItem className="border-warning">
                    Gender: {users.gender}
                  </ListGroupItem>
                  <ListGroupItem className="border-warning">
                    Location: {users.location?.country}
                  </ListGroupItem>
                  <ListGroupItem className="border-warning">
                    Contact: {users.phone}
                  </ListGroupItem>
                  <ListGroupItem className="border-warning">
                    Age: {users.dob?.age}
                  </ListGroupItem>
                </ListGroup>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

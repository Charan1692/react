import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";
import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import UserCard from "../components/UserCard";
import Repos from "../components/Repos";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [gitUser, setGitUser] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      // console.log(data);
      setQuery("");
      setGitUser(data);
    } catch (err) {
      console.error(err);
      toast("USER NOT FOUND", { type: "error" });
    }
  };

  if (!user?.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <Container>
      <Row className="mt-2">
        <Col md="4">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter GitHub Username..."
            />
            <InputGroupAddon addonType="append">
              <Button
                onClick={fetchData}
                className="text-white rounded-0"
                color="info"
              >
                Fetch User
              </Button>
            </InputGroupAddon>
          </InputGroup>
          {gitUser ? <UserCard gitUser={gitUser} /> : ""}
        </Col>
        <Col md="8">
          {gitUser ? <Repos repos_url={gitUser.repos_url} /> : ""}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

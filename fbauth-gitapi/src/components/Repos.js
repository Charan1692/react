import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import Axios from "axios";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div>
            <h4 className="text-info">
              <strong>{repo.name}</strong>
            </h4>
            <h6 className="text-success">
              <strong>Language: {repo.language}</strong>
            </h6>
            <h6 className="text-secondary">
              <strong>Description: {repo.description}</strong>
            </h6>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;

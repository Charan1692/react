import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({ gitUser }) => {
  return (
    <Card className="border-info text-center my-2">
      <img
        src={gitUser.avatar_url}
        className="img-fluid img-thumbnail"
        style={{ height: "50vh" }}
        alt="profile"
      />
      <CardBody>
        <div>
          <h4 className="text-info text-center">
            Name: <strong>{gitUser.name}</strong>
          </h4>
          <h6 className="text-info text-center">
            Location: <strong>{gitUser.location}</strong>
          </h6>
          <h6 className="text-info text-center">
            <strong>{gitUser.bio}</strong>
          </h6>
          <h6 className="text-info text-center">
            Available for Hiring:
            <strong>
              {gitUser.hireable ? (
                <span className="text-success">Yes</span>
              ) : (
                <span className="text-danger">Nop</span>
              )}
            </strong>
          </h6>
          <h6 className="text-success text-center">
            Followers: <strong>{gitUser.followers}</strong>
          </h6>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserCard;

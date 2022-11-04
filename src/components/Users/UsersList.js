import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {/* an array of user objects */}
        {props.users.map((user) => (
          <li>
            {/* has a name property and an age property */}
            {user.name} ({user.age} years old){" "}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;

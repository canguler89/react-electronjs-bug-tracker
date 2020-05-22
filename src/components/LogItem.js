import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const LogItem = (props) => {
  return (
    <tr>
      <td>
        <Badge variant={setVariant()}></Badge>
        {props.log.priority}
      </td>
      <td>{props.log.text}</td>
      <td>{props.log.user}</td>
      <td>{props.log.created}</td>
      <td>
        <Button variant="danger">X</Button>
      </td>
    </tr>
  );
};

export default LogItem;

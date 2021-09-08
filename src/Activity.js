import React from "react";
import "./Activity.css";

function Activity( { time, description, key } ) {

  return (
    <tr key={key}>
      <td>{time}</td>
      <td>{description}</td>
    </tr>
  )
}

export default Activity;

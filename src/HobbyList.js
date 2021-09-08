import React from "react";
import "./HobbyList.css";

function HobbyList( { hobbies } ) {

  const listItem = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)

  switch (!hobbies.length) {
    case true: return null
    case false: return (
      <div className="row" style={{marginTop: 30}}>
        <h4>Hobbies</h4>
        <div className="row" style={{margin: 30}}>
          <ul>{listItem}</ul>
        </div>
      </div>
    )
  }
}

export default HobbyList;

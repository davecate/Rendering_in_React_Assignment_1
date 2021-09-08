import React from "react";

function Header( { name, birthday, imageSrc } ) {
  return (
    <div className="row">
      <div className="col p-0">
          <img src={imageSrc} className="w-100"/>
      </div>
      <div className="col">
        <div className="container">
          <div className="row">
            <h1 className>{name}</h1>
          </div>
          <div className="row">
            <h2>Birthday: {birthday}</h2> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import Activity from "./Activity.js"
import "./ActivityList.css";

function ActivityList( { activities } ) {

  const list = activities.map(({time, description}, index) => 
    <tbody>
      <Activity key={index} time={time} description={description}/>
    </tbody>
)

  return (
    <div className="row" style={{margin: "auto", borderStyle: "solid"}}>
      <table>
        {list}
      </table>
    </div>
  )
}

export default ActivityList;

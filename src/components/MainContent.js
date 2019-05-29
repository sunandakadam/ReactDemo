import React from "react";

function MainContent(props){
    return(
        <div className="main-content">
          <p>Name:{props.name}</p>
          <p>Designation:{props.Designation}</p>
          <hr/>
        </div>
        
    )
}
export default MainContent
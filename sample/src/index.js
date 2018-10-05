import React from "react";
import ReactDom from "react-dom";

import Something from "../../dist/common.es";

const App = () => {
  return (
    <div> 
      Hello World 
    
      <Something />
    </div>  
  )
}

ReactDom.render(<App />, document.getElementById("app"));
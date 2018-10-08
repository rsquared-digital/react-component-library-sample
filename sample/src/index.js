import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import { Textbox, Button } from "../../dist/common.es";

const AppWrapper = styled.div`
  button {
    margin-left: 5px;
  }
`

const App = () => {
  return (
    <AppWrapper> 
      <Textbox onChange={(e) => console.log(e)}>
      </Textbox>
      <Button 
        text="Button"
        onClick={(e) => console.log(e)}
      ></Button>
    </AppWrapper>  
  )
}

ReactDom.render(<App />, document.getElementById("app"));
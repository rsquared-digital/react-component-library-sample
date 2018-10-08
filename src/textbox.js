import React from "react";
import styled from "styled-components";

const TextboxWrapper = styled.input`
  background: #fff;
  padding: 5px 10px;
  border: solid 1px #aaa;
  border-radius: 3px;
`

const Textbox = (props) => {
  return (
    <TextboxWrapper 
      type="text"
      onChange={props.onChange}>
    </TextboxWrapper>
  )
}

export default Textbox;
import React, {useState} from "react";

function Title(props){
  
return(
    <input type="text" 
    placeholder="escreva seu título."
    onChange={e => props.SwitchTitle(e.target.value)}/> //e = event
   );
};

export default Title;
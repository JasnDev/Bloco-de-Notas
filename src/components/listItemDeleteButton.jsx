import React, {useState} from "react";

function ListItems (props){
    return(
    <div>
      <input type="checkbox"
        onChange={e => props.setChecked(e.target.checked, props.index)}
      />
      <input type="text"
        placeholder="Adicione uma descrição."
        onChange={e => props.switchDescription(e.target.value, props.index)}
      />
      <button onClick={() => props.deleteState(props.index)}>X</button>
    </div>
    )
};

export default ListItems
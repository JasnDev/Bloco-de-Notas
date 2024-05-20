import React, {useState} from "react";

function CheckBox () {
    const [checked, setCheked] = useState(false);
    return(
        <input type="checkbox"
        onChange={e => setCheked(e.target.checked)}/>
    );
};

export default CheckBox;
import React, {useState} from "react";
import Title from "./title";
import ListItems from "./listItemDeleteButton";
import Button from "./buttonAdd";
import {v4} from 'uuid';

function List (){
    const [title, setTitle] = useState('');
    const [listOn, setList] = useState([
        {id: v4(), marked: false, description: ''}
    ]);
    function addItem (){
        setList([...listOn, {id: v4(), marked: false, description: ''}]);
    };

    const SwitchTitle = value => setTitle(value);
    function switchDescription (value, index) {
        const arrayAux = [...listOn] 
        arrayAux[index] = value
        setList(arrayAux);
    };


    function setChecked (checked, index) {
        const arrayAux = [...listOn]
        arrayAux[index] = {...listOn[index], marked: checked}
        setList(arrayAux)
    };

    function deleteState (index){
        const arrayAux = [...listOn]
        arrayAux.splice(index, 1);
        setList(arrayAux);
    };

    return(
        <>
        <Title  
            SwitchTitle = {SwitchTitle}
        />
        { listOn.map((item, index) =>(
            <ListItems 
            switchDescription = {switchDescription}
            setChecked = {setChecked}
            deleteState = {deleteState}
            index = {index}
            key = {listOn[index].id}
            />
        ))}

        <Button addItem = {addItem} />
        </>
    )
}

export default List;
import React from "react";
import { useState } from "react";

function NewNumber(props){
    const [number, setNumber] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [group, setGroup] = useState();

    function handleNumber(event) {
        setNumber(event.target.value)
    }
    function handleName(event) {
        setName(event.target.value)
    }
    function handleEmail(event) {
        setEmail(event.target.value)
    }
    function handleGroup(event) {
        setGroup(event.target.value)
    }
    function handleSaveClick(event) {
        event.preventDefault();
        let newNumbers = {
            name: name,
            number: number,
            email: email,
            group: group
        }
        props.addNumberFunction(newNumbers)
    }
    return(
        <div>
            <form>
                <h3>Add new number</h3>
                <input type="number" onChange={handleNumber} value={number} />
                <h3>Add name</h3>
                <input type="text" onChange={handleName} value={name} />
                <h3>Add e-mail</h3>
                <input type="text" onChange={handleEmail} value={email} />
                <h3>Add group</h3>
                <input type="text" onChange={handleGroup} value={group} />
                <button onClick={handleSaveClick}>Save</button>
                
            </form>
        </div>
    )
}

export default NewNumber
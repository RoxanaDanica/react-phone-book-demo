import React from "react";
import App from "./App";

function SeeNumbers(props) {
    function handleDelete(number) {
        console.log(number);
        props.deleteFunction(number)
    }
    
    return(
        <div>
            {props.numbers.map((item, index) => {
                return (
                    <div>
                        <h2>{item.name}</h2>
                        <h4>{item.number}</h4>
                        <h3>{item.email}</h3>
                        <h3>{item.group}</h3>
                        <button onClick={() => {handleDelete(item.number)}} >delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default SeeNumbers
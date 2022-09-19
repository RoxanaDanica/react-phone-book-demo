import React from "react";
import './NewNumber';
import { useState } from "react";
import NewNumber from "./NewNumber";
import SeeNumbers from "./SeeNumbers";

function App() {
  const [content, setContent] = useState();
  const [number, setNumber] = useState();
  const [newNumber, setNewNumber] = useState();

  function seeNumber() {
    setContent(<SeeNumbers numbers={myNumber} deleteFunction={deleteElement} />)
  }

  function addNumber() {
    setContent(<NewNumber addNumberFunction={addNewNumber} />)
    }

    let initialNumbers = [
      {
        number: 727562744,
        name : 'Alex',
        email : 'Alex@yahoo.com',
        group : 'newTravel' 
      },
      {
        number: 727576321,
        name : 'Gica Ionescu',
        email : 'Ionescu@yahoo.com',
        group : '-'
      },
      {
        number: 727562743,
        name : 'Gica Popescu',
        email : 'popescu@yahoo.com',
        group : 'newTravel' 
      },
      {
        number: 732787259,
        name : 'Marinescu' ,
        email : 'Marinescu90@yahoo.com' ,
        group : 'newTravel' 
      },
      {
        number: 732787346,
        name : 'Andreea' ,
        email : 'Andreea92@yahoo.com' ,
        group : 'friends' 
      },
      {
        number: 738587346,
        name : 'Ionut' ,
        email : 'ionutz@yahoo.com' ,
        group : 'friends' 
      },
      {
        number: 738587377,
        name : 'Ionel' ,
        email : 'ionel98@yahoo.com' ,
        group : 'friends' 
      },
    ]
    const [myNumber, setMyNumber] = useState(initialNumbers)

    function addNewNumber(newNumber) {
      let aux = myNumber;
      aux.push(newNumber);
      setMyNumber(aux);
    }

    function deleteElement(number){
      console.log('in app: ' + number)
      let aux = myNumber;
      let index = -1;
      for(let i=0; i<aux.length; i++){
        if(aux[i].number==number){
          index = i;
        }
      }
      if(index==-1){
        return 
      }
      aux.splice(index, 1);
      setMyNumber(aux);
      console.log(myNumber)
      seeNumber();
    }


  return (
    <div>
      <button onClick={seeNumber}>Show the phone number</button>
      <button onClick={addNumber}>Add new phone number</button>

      <div>
        {content}
      </div>
    </div>
  );
}

export default App;

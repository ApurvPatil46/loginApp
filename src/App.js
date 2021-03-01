import React,{useContext, useState} from "react";
import {NameOfPikachu , MovesOfPikachu} from "./Context" 

const App = () => {
    const [num , setNum] = useState();

    const Name = useContext(NameOfPikachu);
    const Moves = useContext(MovesOfPikachu);
    
    let NumberClicled = {num}
    return(
        <>
            <div style = {{
                position : "fixed",
                left : "50%",
                top: "50%",
                marginTop : "-50px",
                marginLeft : "-100px"}}>
                
                <h1>Pokemon</h1>
                
                <select value = {num} onChange = {(event) => {
                    setNum(event.target.value)
                }}>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "25">25</option>
                </select>
                <h2>You Have Choose {NumberClicled}</h2>
                <h3>The Name of Pokemon is {Name} </h3>
                <h3>The Number of Moves are {Moves}</h3>
            </div>
        </>
    );
}

export default App;

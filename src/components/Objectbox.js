import React from 'react';
import Persons from "./Persons";

function Objectbox (props) {
    const people = [
        {
        name:"Annie ",
        age:25,
        Occupation:"Graphic Designer ",
    },
        {
            name:"Samuel",
            age:23,
            Occupation:"Web Developer ",
        },
        {
            name:"Jeff ",
            age:21,
            Occupation:"Programmer ",
        }
        ]
    return (
        <div>
            {people.map((reacters) =>(
                <h1> Name: {reacters.name} <br/>age:{reacters.age} <br/>Occupation:{reacters.Occupation}</h1>
            ))}

        </div>
    );
}

export default Objectbox;
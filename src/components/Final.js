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
                 <Persons fname={reacters.name} Yrs={reacters.age} job={reacters.Occupation}/>
            ))}

        </div>
    );
}

export default Objectbox;
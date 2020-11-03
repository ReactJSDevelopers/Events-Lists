import React from 'react';

function Persons({fname,Yrs,job}) {
    return (
        <div>
            <h1>{fname} {Yrs} {job}</h1>
        </div>
    );
}

export default Persons;
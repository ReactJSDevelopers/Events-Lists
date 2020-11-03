import React, {useState} from 'react';

function Counter(props) {
    const initialValue = 0
    const [count, setCount] = useState(initialValue)

    const incrementBy5 = () =>{
        for(let i=0 ; i<=4;i++)
        {
            setCount(num => num + 1)
        }
    }

    return (
        <div>
            <button onClick={incrementBy5}>I have been clicked {count} times</button>
        </div>
    );
}

export default Counter;
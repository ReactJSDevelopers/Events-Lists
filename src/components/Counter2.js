import React, {useState} from 'react';

function Counter(props) {
    const initialValue = 0
    const [count, setCount] = useState(initialValue)


    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>I have been clicked {count} times</button>{/*//inline Arrow function*/}
        </div>
    );
}

export default Counter;
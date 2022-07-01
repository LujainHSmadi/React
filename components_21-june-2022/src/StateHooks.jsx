import { useState } from "react";

function StateHooks() {
    const [name, setName] = useState('show name');
    const [counter, setCounter] = useState(50);
    const showName = (e) => {
        setName(e)
    }

    const decriment = () => {
        setCounter(counter - 1);
    }
    const increment = () => {
        setCounter(counter + 1);
    }
    const multiplication = () => {
        setCounter(counter * 2);
    }
    return (
        <div className="container">
            <div className="container"> {counter}</div>
            <button onClick={increment} >Increment</button>
            <button onClick={decriment} >Decriment</button>
            <button onClick={multiplication}>x2</button>
            <div>
                <br />
                <br />
            <input type="text" onChange={e => setName(e.target.value)} />
            <div className="container"> {name}</div>

            </div>

            {/* <div className="container">    <button onClick={showName}>Click to show Name</button></div> */}
        </div>
    )
}
export default StateHooks;
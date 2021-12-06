import { useState } from "react";
import "./Counter.css";

function Counter(){
    const [counter , SetCounter] = useState(0);

    const checkCounter = (flag = true) => {
        if(counter >= 10){
            alert("HAHAHA");
        } else {
            (flag) ? SetCounter(counter+1) : SetCounter(counter-1);
        }
    }

    return (
        <>
            <div className="number">{counter}</div>
            <div>
                <button onClick={() => checkCounter()}>+</button>
                <button onClick={() => checkCounter(false)}>-</button>
            </div>
        </>
    );
}

export default Counter;
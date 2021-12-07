import { useState } from "react";
import "./Timer.css";

export default function Timer(){
    const [minute , setMinute] = useState(1);
    const [second , setSecond] = useState(0);
    const [counterVal , setCounterVal] = useState(0);
    const [displayer , setDisplayer] = useState("");

    const setNewTimer = (e) => {
        e.preventDefault();
        let newCounter = +minute * 60 + +second;
        setCounterVal(newCounter);
        setDisplayer(
            <div className="displayer">
                <div className="counter">{counterVal}</div>
                <div className="control_btns">
                    <button>START</button>
                    <button>PAUSE</button>
                    <button>STOP</button>
                    <button>RESET</button>
                </div>
            </div>
        );
    };

    return (
        <>
            <form method="POST" className="value_form" onSubmit={(e) => setNewTimer(e)}>
                <input type="number" placeholder="Minute" value={minute} onChange={(e) => setMinute(e.target.value)}/>
                <input type="number" placeholder="Second" value={second} onChange={(e) => setSecond(e.target.value)}/>
                <input type="submit" value="SET TIMER"/>
            </form>
            {displayer}
        </>
    );
}
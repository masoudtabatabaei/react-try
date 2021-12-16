import { memo } from "react";

function Todo({todos}){
    console.log('TOdos rendered...');
    return (
        <ul>
            {todos.map((todo , index) => {
                return (<li key={index}>{todo}</li>);
            })}
        </ul>
    );
}

export default memo(Todo);
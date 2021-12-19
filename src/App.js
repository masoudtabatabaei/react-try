import { useState , useEffect, useRef } from "react";
import './App.css';
import Todo from './Todo';

function App() {
  const [todos , setTodos] = useState(['Todo1' , 'Todo2']);
  const inputElem = useRef();

  const increment = () => {
    let input = inputElem.current;
    setTodos(prevTodos => [...prevTodos , input.value]);
    input.value = "";
    input.focus();
  }

  const handleInput = (e) => {
    inputElem.current.value = e.target.value;
  };

  return (
    <div className='container'>
      {/* <div>counter : {count.current}</div> */}
      <hr/>
      <input type='text' ref={inputElem} onChange={handleInput}/>
      <br/>
      <button onClick={increment}> + </button>
      <Todo todos={todos}/>
    </div>
  );
}

export default App;

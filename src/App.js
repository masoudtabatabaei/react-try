import { useState } from "react";
import './App.css';
import Todo from './Todo';

function App() {
  const [todos , setTodos] = useState(['Todo1' , 'Todo2']);
  const [counter , setCounter] = useState(0);

  const increment = () => {
    setCounter(c => c + 1);
    if(counter % 5 == 0){
      setTodos(prevTodos => [...prevTodos , 'Todo' + counter]);
    }
  };

  return (
    <div className='container'>
      <div>counter : {counter}</div>
      <hr/>
      <Todo todos={todos}/>
      <button onClick={increment}> + </button>
    </div>
  );
}

export default App;

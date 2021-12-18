import { useState , useEffect } from "react";
import './App.css';
import Todo from './Todo';

function App() {
  const [todos , setTodos] = useState(['Todo1' , 'Todo2']);
  const [counter , setCounter] = useState(0);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setCounter(c => c + 1);
    } , 1000);

    // console.log(timeout);

    return () => clearTimeout(timeout);
  });

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
      <button onClick={increment}> + </button>
      <Todo todos={todos}/>
    </div>
  );
}

export default App;

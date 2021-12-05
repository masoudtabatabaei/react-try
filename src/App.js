import { useState } from 'react';
import './App.css';

function App() {
  const [name , setName] = useState("Mahya");
  const [t , setTextArea] = useState("It is test description");
  const [selectVal , setSelectVal] = useState("C");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("name is : " + name + " description is : " + t + " select: " + selectVal);
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <input type="text" name="userName" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="number" name="password" value={name} onChange={(e) => setName(e.target.value)}/>
      <br/>
      <textarea value={t} onChange={(e) => setTextArea(e.target.value)}></textarea>
      <br/>
      <select value={selectVal} onChange={(e) => setSelectVal(e.target.value)}>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <button type="submit">Send</button>
    </form>
  );
}

export default App;

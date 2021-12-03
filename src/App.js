import './App.css';
import Car from './Car';

function App(props) {
  return (
    <div className="App-header">
      <p>Hello I am {props.name}</p>
      <Car/>
    </div>
  );
}

export default App;

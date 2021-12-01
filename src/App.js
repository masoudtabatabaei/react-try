import './App.css';
import { Slogan } from './Slogan';

function App(props) {
  return (
    <div className="App-header">
      <p>Hello {props.name}</p>
      <Slogan/>
    </div>
  );
}

export default App;

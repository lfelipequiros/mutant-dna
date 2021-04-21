import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let [inputData, setInputData] = useState();

  function onSubmit(){
    //ATP I'll assume data comes in a proper format
    let parsedData = JSON.parse(inputData);
    console.log(parsedData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Insert Test Data here and click submit : )</p>
        <p>{`Test Mentions a Data structure like {"asdfasdf","adfasdf"} and that't neither a JS array nor a valid OBJ, so please use an array ["asdf", "asdfasdf"]`}</p>
        <input type="text" placeholder="input string" onChange={(e)=> setInputData(e.target.value)}></input>
        <button name="submit" onClick={onSubmit}>submit</button>
      </header>
    </div>
  );
}

export default App;

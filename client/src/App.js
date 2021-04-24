import logo from './logo.svg';
import { useState } from 'react';
//import { firstApproach } from './utils/dnaAnalyzer';
import { postMutant } from './utils/api';
import './App.css';

function App() {

  let [inputData, setInputData] = useState("");

   const onSubmit = async () => {
    //ATP I'll assume data comes in a proper format
    let parsedData = JSON.parse(inputData);

    //something to make a quick and dirty benchmark
    let initTime = new Date();

    //call the approach and stop timmer
    await postMutant({ dnaSequence: parsedData });
    
    let endDate = new Date();

    //log the benchmark
    console.log("benchmark including POST time:", endDate-initTime);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Insert DNA sequence here and click submit : )</p>
        <p className="App-sidenote" >{`Test Mentions a Data structure like {"asdfasdf","adfasdf"} and that't neither a JS array nor a valid OBJ, so please use an array ["asdf", "asdfasdf"]`}</p>
        <input type="text" placeholder="input string" onChange={(e)=> setInputData(e.target.value)}></input>
        <button name="submit" onClick={onSubmit}>submit</button>
      </header>
    </div>
  );
}

export default App;

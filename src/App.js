import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Add from './Add';

function App() {
  const [sumData, setSumData] = useState(-1)
  const [errorData, setErrorData] = useState(null)
  const [textData, setTextData] = useState('')

  const setAddData = () => {
    try {
      const addString = Add(textData)
      setSumData(addString)
    } catch (e) {
      setErrorData(e.message)
    }
  }

  const onChangeText = (e) => {
    setSumData(-1)
    setErrorData(null)
    setTextData(e.target.value)
  }

  return (
    <div className="App">
      <div style={{ padding: 20, display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
        <h3>Incubyte TDD Assesment: Add</h3>
        <textarea
          type="text"
          placeholder="Enter the string for addition"
          rows={4}
          value={textData}
          onChange={onChangeText}
          style={{ padding: 10 }}
        >
          {textData}
        </textarea>
        <button onClick={setAddData} style={{ display: 'block', padding: 10, marginTop: 20 }} >Calculate</button>

        {sumData >= 0 && <h2>{sumData}</h2>}
        {errorData != null && <h2 style={{ color: 'red' }} >{errorData}</h2>}
      </div>
    </div>
  );
}

export default App;

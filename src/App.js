import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [sumData, setSumData] = useState(0)
  const [textData, setTextData] = useState('')

  const setAddData = () => {
    setSumData(0)
  }

  const onChangeText = (e) => {
    setTextData(e.target.value)
  }

  return (
    <div className="App">
      <div style={{ padding: 20, display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
        <h3>Incubyte TDD Assesment: Add</h3>
        <input type='text' value={textData} onChange={onChangeText} placeholder='Enter the string for addition' style={{ padding: 10 }} />
        <button onClick={setAddData} style={{ display: 'block', padding: 10, marginTop: 20 }} >Calculate</button>
      </div>
    </div>
  );
}

export default App;

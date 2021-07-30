import { useState } from 'react';
import './App.css';
import Systeme from './component/Systeme';

function App() {
  const [systeme, setSysteme] = useState('')

  return (
    <div className="App">
      <Systeme systeme={systeme} setSysteme={setSysteme}/>
    </div>
  );
}

export default App;

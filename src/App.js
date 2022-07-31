import React, {useState} from 'react'
import './App.css';
import Modal from './Components/modal/Modal';

function App() {
  const [show, setShow] = useState(false);

const handleClick =()=>{
      setShow(!show)
}

  return (
    <div className="App">
      <button onClick={handleClick}>
        click me
      </button>
      {
        show&&<Modal/>
      }
    </div>
  );
}

export default App;

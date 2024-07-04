import './App.css';
import { useState } from 'react';
import Home from './Components/Home';
import Fetch from './Components/Fetch';

function App() {
  const [city, setCity] = useState("");
  const [check, setCheck] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-4xl w-full p-4">
        {check ? (
          <Fetch city={city} setCity={setCity} check={check} setCheck={setCheck} />
        ) : (
          <Home city={city} setCity={setCity} check={check} setCheck={setCheck} />
        )}
      </div>
    </div>
  );
}

export default App;

// App.jsx

import React, { useState } from 'react';

function App() {
  const [msj, setMsj] = useState("Hello world (from changed state)!");

  const changeMessage = () => {
    setMsj("Hello my friend (from changed state)!");
  };

  return (
    <div>
      <h1>{msj}</h1>
      <button onClick={changeMessage}>Click me!</button>
    </div>
  );
}

export default App;

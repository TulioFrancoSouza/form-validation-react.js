import React, { useState } from 'react';

import InputField from './Components/InputField';

import './App.css';

function App() {

  const inputRef = React.useRef([
    React.createRef(), React.createRef()
  ]);

  const [data, setData] = useState({});

  const handleChange = (name, value) => {
    setData(prev => ({ ...prev, [name]: value }))
  }

  const submitForm = (e) => {
    e.preventDefault()
    let isValid = true;
    for(let i =0; i < inputRef.current.length; i++) {
      const valid = inputRef.current[i].current.validate()
    }
  }

  return (
    <div className="input-wrapper">
      <form onSubmit={submitForm}>
        <InputField
          ref={inputRef.current[0]}
          name='username'
          label='Username:'
          onChange={handleChange}
        />

        <InputField
          ref={inputRef.current[1]}
          name='password'
          label='Password:'
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

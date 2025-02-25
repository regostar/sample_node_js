import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/message')
            .then(response => response.json())
            .then(data => setMessage(data.message));
    }, []);

    return (
        <div>
            <h1>React + Node.js App</h1>
            <p>{message}</p>
        </div>
    );
}


export default App;

import React from 'react';
import Lista from './Lista';
import Rulebook from './Rulebook';
import '../assets/css/App.css';
const App = () => {
    return (
        <div className="container">
            <h1>R.I.P. Forecast 🪦</h1>
            <Lista />
            <Rulebook />
        </div>
    );
};

export default App;
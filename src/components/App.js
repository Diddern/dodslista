import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lista from './Lista';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Lista />} />
            </Routes>
        </Router>
    );
};

export default App;
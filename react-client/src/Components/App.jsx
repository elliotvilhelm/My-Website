import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import history from '../history'
import Haskell from './Haskell';


class App extends Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="home" element={<HomePage />} />
                    {/* <Route path="haskell" element={<Haskell />} /> */}
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;

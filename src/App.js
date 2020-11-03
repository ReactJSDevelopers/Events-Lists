import React, {Component} from 'react'
import logo from './logo.svg';
import Welcome from './components/Welcome'
//import Hello from './components/Hello'

import './App.css';
//import 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css';
//import 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
//import 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js';
import Counter from "./components/Counter";
import Counter2  from "./components/Counter2";
import Listing from "./components/Listing";
import Objectbox from "./components/Objectbox";
import Final from "./components/Final";
function App() {
  return (
    <div className="App">
        {/*<Listing/>*/}
        {/*<Objectbox/>*/}
        <Final/>
    </div>
  );
}

export default App;

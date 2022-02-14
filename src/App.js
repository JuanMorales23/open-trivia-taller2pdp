import './App.css';
import StartForm from './components/StartForm';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Trivia from './components/Trivia';

function App() {
  return (
    <Router>
        <div className="App">
        <Routes>
          <Route path="/">
            <StartForm></StartForm>
          </Route>
          <Route path="/trivia">
            <Trivia></Trivia>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

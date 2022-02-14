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
          <Route path="/" element={<StartForm />} />
          <Route path="/trivia" element={ <Trivia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

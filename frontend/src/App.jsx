import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;

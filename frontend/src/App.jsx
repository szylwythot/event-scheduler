import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import { LocalizationProvider } from '@mui/x-date-pickers';
// import { BrowserRouter } from "react-router-dom";
// date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    </LocalizationProvider>
  );
}

export default App;

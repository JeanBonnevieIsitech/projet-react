import './App.css';
import logo from './logo.svg';
// import HomePage from './pages/HomePage';
import {Routes, Route} from "react-router-dom";
// import Bonsoir from './components/Bonsoir';
import HomePage from './HomePage';
import TestPage from './TestPage';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path='/test' element={<TestPage/>}></Route>
        </Routes>
      </header>
    </div>
  )

}

export default App;

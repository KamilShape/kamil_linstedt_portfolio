import './App.css';
import {Link, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ul className="nav_list">
            <li className="nav_item"><Link to='/' className="nav_link">About me</Link></li>
            <li className="nav_item"><Link to='/projects' className="nav_link">Projects</Link></li>
            <li className="nav_item"><Link to='/contact' className="nav_link">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

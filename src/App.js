import {Link, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import './components/styles/home.css';
import './components/styles/media.css';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ul className="nav_list">
            <li className="nav_item"><Link to='/' className="nav_link description">About me</Link></li>
            <li className="nav_item"><Link to='/projects' className="nav_link description">Projects</Link></li>
            <li className="nav_item"><Link to='/contact' className="nav_link description">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <footer className="footer"><p className="description">Created by Kamil Linstedt © 2022</p></footer>
    </div>
  );
}

export default App;

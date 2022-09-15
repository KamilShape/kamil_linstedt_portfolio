
// import {TransitionGroup, CSSTransition} from "react-transition-group";

import './App.css';
import Routes from './components/AppRoutes.js';
import Nav from './components/Nav.js';
import './components/styles/home.css';
import './components/styles/media.css';
import './components/styles/projects.css';
import './components/styles/project.css';
import './components/styles/contact.css';

function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes/>
      <footer className="footer"><p className="description">Created by Kamil Linstedt © 2022</p></footer>
    </div>
  );
}

export default App;

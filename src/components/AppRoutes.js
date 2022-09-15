import {Routes, Route, useLocation} from "react-router-dom"
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import {AnimatePresence} from 'framer-motion'

function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </AnimatePresence>

  );
}

export default AppRoutes;

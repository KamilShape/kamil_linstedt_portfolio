import {Link} from "react-router-dom"

function Home() {
  return (
    <nav className="nav">
    <ul className="nav_list">
        <li className="nav_item"><Link to='/' className="nav_link description"><i className="fas fa-user description"></i> About me</Link></li>
        <li className="nav_item"><Link to='/projects' className="nav_link description"><i className="far fa-folder description"></i> Projects</Link></li>
        <li className="nav_item"><Link to='/contact' className="nav_link description"><i className="far fa-address-card description"></i> Contact</Link></li>
    </ul>
  </nav>
  );
}

export default Home;

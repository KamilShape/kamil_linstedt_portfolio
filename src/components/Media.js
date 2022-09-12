import './styles/media.css';
import github_logo from './images/github_logo.png'
import linkedin_logo from './images/linkedin_logo.png'



function Home() {
  return (
    <section className="media">
      <div className="link_border"><img className='link_icon' src={github_logo}/></div>
      <div className="link_border"><img className='link_icon' src={linkedin_logo} /></div>
    </section>
  );
}

export default Home;

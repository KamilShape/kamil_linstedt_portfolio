import './styles/media.css';
import github_logo from './images/github_logo.png'
import linkedin_logo from './images/linkedin_logo.png'



function Media() {
  return (
    <section className="media">
      <div className="icon_border"><img className='icon_image' src={github_logo}/></div>
      <div className="icon_border"><img className='icon_image' src={linkedin_logo} /></div>
    </section>
  );
}

export default Media;

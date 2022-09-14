import './styles/media.css';
import github_logo from './images/github_logo.png'
import linkedin_logo from './images/linkedin_logo.png'



function Media() {
  return (
    <section className="media">
      <a target='_blank' href="https://github.com/KamilShape"><div className="icon_border"><img className='icon_image' src={github_logo}/></div></a>
      <a target='_blank' href="https://www.linkedin.com/in/kamil-linstedt-506737201/"><div className="icon_border"><img className='icon_image' src={linkedin_logo} /></div></a>
    </section>
  );
}

export default Media;

import Media from './Media.js'
import resume from './images/resume.pdf'
function Contact() {
  return (
    <section className="contact section">
        <h1 className="section_title">contact me!</h1>
        <h2 className="section_title contact_title">I'm open to job offers!</h2>
        <h3 className="contact_data">e-mail: kamil.linstedt@gmail.com</h3>
        <h3 className="contact_data">phone: +48 609 105 289</h3>
        <a className="contact_button description" href={resume} target='_blank'>MY RESUME</a>
        <Media/>
    </section>
  );
}

export default Contact;

import Media from './Media.js'
import resume from './images/resume.pdf'
import {motion} from 'framer-motion'
function Contact() {
  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.8}}
    className="contact section">
        <h1 className="section_title">contact me!</h1>
        <h2 className="section_title contact_title">I'm open to job offers!</h2>
        <h3 className="contact_data contact_paragraph"><i className="far fa-envelope contact_paragraph"></i> e-mail: kamil.linstedt@gmail.com</h3>
        <h3 className="contact_data contact_paragraph"><i class="fas fa-phone contact_paragraph"></i> phone: +48 609 105 289</h3>
        <a className="contact_button description" href={resume} target='_blank'>MY RESUME</a>
        <Media/>
    </motion.section>
  );
}

export default Contact;

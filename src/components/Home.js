import Media from './Media.js'
import portrait from './images/portrait.png'
import {motion} from 'framer-motion'

function Home() {
  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration: 0.8}}
    className="home section"
    >
      <div className="home_wrapper wrapper">
        <div className="home_content">
          <p className="home_description description">Hello, my name is</p>
          <h1 className="home_title section_title">Kamil Linstedt</h1>
          <h2 className="home_title section_title">I really like to build websites.</h2>
          <p className="home_description description">I'm beginner junior front-end developer. I graduated from Civil Engineering at Gdansk University of technology. I've been learning programming since over a year. My main goal is to get a job as junior front-end developer and developing necessary skills and technologies in order to be a better programmer.</p>
        </div>
        <div className="home_photo-wrapper">
          <div className="home_photo photo">
              <img src={portrait} alt="portrait" className="home_portrait" />
          </div>
          <Media className='home_media'/>
        </div>        
      </div>
    </motion.section>
  );
}

export default Home;

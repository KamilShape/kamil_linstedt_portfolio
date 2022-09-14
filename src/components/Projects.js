import Media from './Media.js'
import Project from './Project'
import javascript_logo from './images/javascript_logo.png'
import css_logo from './images/css_logo.png'
import react_logo from './images/react_logo.png'
import vue_logo from './images/vue_logo.png'
import data from './data.js'

function Projects() {
  const projects = data.map(project => {
    return <Project 
    key={project.name} 
    title={project.title}
    description={project.description}
    link={project.link}
    ghlink={project.ghlink}
    />
  })
  return (
    <section className="projects section">
        <h1 className="section_title">my projects</h1>
        <div className="projects_icons">
          <div className="projects_wrapper">
            <div className="icon_border">
              <img src={javascript_logo} className="icon_image" />
            </div>
            <p className="icon_title">javascript</p>
          </div>
          <div className="projects_wrapper">
            <div className="icon_border">
              <img src={css_logo} className="icon_image" />
            </div>
            <p className="icon_title">css</p>
          </div>
          <div className="projects_wrapper">
            <div className="icon_border">
              <img src={react_logo} className="icon_image" />
            </div>
            <p className="icon_title">react</p>
          </div>
          <div className="projects_wrapper">
            <div className="icon_border">
              <img src={vue_logo} className="icon_image" />
            </div>
            <p className="icon_title">vue</p>
          </div>
        </div>
        <div className="projects_container">
        {projects}
          </div> 

        <Media/>
    </section>
  );
}

export default Projects;

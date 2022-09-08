import Media from './Media.js'

function Home() {
  return (
    <section className="home section">
      <div className="home_wrapper wrapper">
        <div className="home_content">
          <p className="home_description description">Hello, my name is</p>
          <h1 className="home_title section_title">Kamil Linstedt</h1>
          <h2 className="home_title section_title">I really like to build websites.</h2>
          <p className="home_description description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta autem ab id itaque aliquid minus perspiciatis ut sed provident quisquam, eligendi minima molestias labore corrupti veritatis eos illo, earum mollitia.</p>
        </div>
        <div className="home_photo-wrapper ">
          <div className="home_photo photo"></div>
          <Media className='home_media'/>
        </div>
      </div>
    </section>
  );
}

export default Home;

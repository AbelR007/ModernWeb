import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import './index.scss';
import Logo from "./Logo";

const Home = () => {
  return (
    <>
    <div className="container home-page">
      <div className="block-1">
        <div className="text-zone">
          <h1>Hi,<br/>I'm <span className="abelroy">Abel Roy</span></h1><br/>
          <span className="title-desc">Web Developer | Python Programmer | AI Enthusiast</span><br/>
          <Link to='/contact'><a className="btn">Know more</a></Link>
        </div>
        <Logo/>
      </div>
      <div className="block-2">
        <AboutMe/>
      </div>
    </div>
    <Loader type="square-spin"/>
    </>
  );
}

export default Home
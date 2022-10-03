import { Link } from 'react-router-dom';
import './index.scss';

const About = () => {
  return (
    <div className="container">
      <div className="text-area">
        <h1 className="heading">
          About <span className="me">&nbsp;me</span></h1>
        <p className="desc">
          A Dedicated Programmer Lover who is friendly, open, and helpful. My Hobbies include writing stories and playing chess. I have prior programming experience for 3 years with Python Programming Language. I have worked on various projects, including web development, UI UX, artificial intelligence, open-source APIs, etc...
        </p>
        <Link className="btn blue-btn">Contact me</Link>
      </div>
      <div className="image-area">
      </div>
    </div>
  )
};

export default About
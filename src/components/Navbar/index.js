import './index.scss';
import {Link, NavLink} from 'react-router-dom'
// import MyLogo from '../../assets/images/logo-abelroy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'


const Navbar = () => (
  <div className="navbar">
    <nav>
      <Link className='logo' to="/">
        &lt; abel roy. &gt;
        {/* <img src={MyLogo} alt="../../assets/images/logo-abelroy.png"> */}
      </Link>
      <div className="navigation">
        <NavLink activeclassName='active' className='link about-link' exact='true' to='/about'>
          About
        </NavLink>
        <NavLink activeclassName='active' className='link projects-link' exact='true' to='/projects'>
          Projects
        </NavLink>
        <NavLink activeclassName='active' className='link contact-link' exact='true' to='/contact'>
          Contact
        </NavLink>
      </div>
      <div className='social-links-div'>
        <ul className='social-links'>
          <li>
            <a target='_blank' href='https://www.linkedin.com/in/abelroy/'>
              <FontAwesomeIcon icon={faLinkedin} color='#252525'/>
            </a>
          </li>
          <li>
            <a target='_blank' href='https://github.com/AbelR007'>
              <FontAwesomeIcon icon={faGithub} color='#252525'/>
            </a>
          </li>
          <li>
            <a target='_blank' href='https://www.instagram.com/abelroy__/'>
              <FontAwesomeIcon icon={faInstagram} color='#252525'/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Navbar
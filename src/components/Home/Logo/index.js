import './index.scss';
import LogoGold from '../../../assets/images/LogoA_blue.png';
import { useRef } from 'react';

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container">
      {/* <img className='solid-logo' src={LogoGold} alt="A Logo"/> */}
      <svg 
        className = 'solid-logo'
        width="378" 
        height="386" 
        viewBox="0 0 278 286" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
      <path d="M40.7417 285.854L95.0635 32.2101L155.483 23.7187L277.614 252.564L226.807 259.704L201.331 210.45L102.462 224.345L91.2059 278.762L40.7417 285.854ZM110.389 183.606L182.481 173.474L123.029 59.32L136.074 57.4866L110.389 183.606Z" fill="#58BBC1"/>
      <path d="M34.7417 273.628L84.0582 20.6875L141.05 12.6778L258.176 242.226L210.251 248.961L185.807 199.563L92.5475 212.669L82.3429 266.938L34.7417 273.628ZM99.7153 172.036L167.717 162.479L110.68 47.9862L122.985 46.2568L99.7153 172.036Z" fill="#FFFCFC"/>
      </svg>
    </div>
  )
}

export default Logo
import { useRef } from "react";
import "./Navbar.scss";
import { images } from '../../constants';
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4';

const Navbar = () => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);
  const location = useLocation();

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  const log = (social) => {
    ReactGA.event({
      category: 'Button Navbar',
      action: social
    });
  }

  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      {/* <img className='background-image' src={images.background_rainbow} title="" alt=""/> */}
      <div className="container-fluid">
        {/* <div className="d-flex align-items-center mx-3 pt-3"> */}
          <a onClick={collapseNav} className="text-decoration-none" href="/">
            <div className="line">
              <img src={images.io_icon} title="io" alt="home page icon"/>
            </div>
          </a>  
        {/* </div> */}
        <div 
          className="social-container-collapsed navbar-toggler collapsed d-flex d-lg-none flex-row justify-content-around"
        >
            <div className="row align-items-center">
                    <div className="social__links">
                        <a href="https://open.spotify.com/artist/1FAJs3Ofs68Skmy2M6T3Lz?si=l3jGhsyWTsC-IrmjqgPPFg" onClick={()=>{log("spotify")}} target="_blank" rel="noreferrer"><i className="fa-brands fa-spotify"></i></a>
                        <a href="https://music.apple.com/it/artist/io/1579754734" onClick={()=>{log("applemusic")}} target="_blank" rel="noreferrer"><i className="fa-brands fa-apple"></i></a>
                        <a href="https://www.youtube.com/channel/UCjH6CUCoc-Epkq1rtB43agw" onClick={()=>{log("youtube")}} target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://www.instagram.com/andrea_ferrando/" onClick={()=>{log("instagram")}} target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="mailto:andrea.ferrando@icloud.com" onClick={()=>{log("email")}}><i className="fas fa-envelope"></i></a>
                     </div>
               </div>
        </div>
        <button
          ref={navButton}
          className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div
          ref={linksContainerRef}
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
            <li className={location.pathname === '/' ? "nav-item nav-item-selected" : "nav-item"}> 
              <a onClick={collapseNav} className="nav-link px-3" href="./">
                News
              </a>
            </li>
            <li className={location.pathname === '/music' ? "nav-item nav-item-selected" : "nav-item"}> 
              <a onClick={collapseNav} className="nav-link px-3" href="music">
                Music
              </a>
            </li>
            <li className={location.pathname === '/about' ? "nav-item nav-item-selected" : "nav-item"}> 
              <a onClick={collapseNav} className="nav-link px-3" href="about">
                About
              </a>
            </li>
            <li className={location.pathname === '/contact' ? "nav-item nav-item-selected" : "nav-item"}> 
              <a
                onClick={collapseNav}
                className="nav-link px-3"
                href="contact"
              >
                Contact
              </a>
            </li>
          </ul>
        <div>
          <div className="collapse navbar-collapse">
            <div className="social__links">
                <a href="https://open.spotify.com/artist/1FAJs3Ofs68Skmy2M6T3Lz?si=l3jGhsyWTsC-IrmjqgPPFg" target="_blank" rel="noreferrer"><i className="fa-brands fa-spotify"></i></a>
                <a href="https://music.apple.com/it/artist/io/1579754734" target="_blank" rel="noreferrer"><i className="fa-brands fa-apple"></i></a>
                <a href="https://www.youtube.com/channel/UCjH6CUCoc-Epkq1rtB43agw" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://www.instagram.com/andrea_ferrando/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="mailto:andrea.ferrando@icloud.com"><i className="fas fa-envelope"></i></a>
              </div>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

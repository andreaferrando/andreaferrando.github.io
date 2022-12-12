import React from "react";
import { images } from '../../constants';
import './Header.scss'
import IoButton from '../../components/IoButton/IoButton.jsx'

const Header = () => {  
  return (
    <>
      <div id="background">
        <img src={images.background} title="" alt=""  class="img-background"/>
      </div>
      <section id="news" className="header">
         <div className="container">
           <div className="row">
               <div className="col-lg-5"> 
                   <h6 className="header__hello">New Single OUT NOW</h6>
                   <h1 className="header__list">I'M NOT READY TO LET YOU GO</h1>
                   <div>
                    <IoButton
                      ahref="#/music"
                      title = "LISTEN NOW"
                      log = "listen now"
                    />
                  </div>
               </div>
               <div className="col-lg-7 header__flex">
               <img src={images.imnotready_vinyl} title="im not ready vinyl" alt="imnotready_vinyl"/>
             </div>
             </div>
         </div>
     </section>
 </>
 )
}

export default Header
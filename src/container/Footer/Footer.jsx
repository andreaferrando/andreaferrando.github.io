import React from 'react'
import './Footer.scss'
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    // <footer className='footer'>
      <div className="container-footer">
       <p className="footer__copy">Copyright &copy; {year} IO</p>
       </div>
    // </footer>
  )
}

export default Footer
import React from 'react'
import './Footer.scss'
const Footer = (props) => {
  const year = new Date().getFullYear();
  return (
    <div className="container-footer">
      <p className="footer__copy">Copyright &copy; {year} IO</p>
    </div>
  )
}

export default Footer
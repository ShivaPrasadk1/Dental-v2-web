import React from 'react'
import { FooterContent } from '../constants/constants'
import { Logo } from '../imageURLs/imageURLS'

function Footer() {
  return (
    <>
        <div className="footer-container">
          <div className="footer-left">
            <div className="logo"><img src={Logo} alt="Logo" /></div>
            <p>&copy; {FooterContent.copyRight}</p>
          </div>
          <div className="footer-middle">
            <h4>{FooterContent.Resource.title}</h4>
            <ul>
              {FooterContent.Resource.contents.map((content, index) => {
                return <li key={index}><a href="#">{content}</a></li>
              })}
            </ul>
          </div>
          <div className="footer-right">
            <h4>{FooterContent.Company.title}</h4>
            <ul>
              {FooterContent.Company.contents.map((content, index) => {
                return <li key={index}><a href="#">{content}</a></li>
              })}
            </ul>
            <div className="social-icons">
              {FooterContent.socailIcons.icons.map((icon, index) => {
                return <a key={index} href="#">{icon}</a>
              })}

            </div>
          </div>
        </div>
    </>
  )
}

export default Footer
import React from 'react';
import './Footer.css';


const Footer = () => {
  
  return (
	  <div className="footer">
	  <a href="https://github.com/LarryZhao0616/chicago-crime-map"> <i href="https://github.com/LarryZhao0616/chicago-crime-map" className="fa fa-github-square fa-2x fa-cog" aria-hidden="true"></i></a>
	  <a href="http://www.facebook.com"> <i className="fa fa-facebook-square fa-2x fa-cog" href="/" aria-hidden="true"></i></a>
	  <hr />
	  <p>Copyright &copy;2017 All Rights Reserved</p>
	  </div>
  );
};
//<div className="container" id="social-network-links">
  //      {links.map(linkItem => {
//          return (
          //  <a href={linkItem.link} key={linkItem.link}>
        //      <img src={linkItem.image} alt="social network link" />
      //      </a>
    //      );
  //      })}
//      </div>
export default Footer;

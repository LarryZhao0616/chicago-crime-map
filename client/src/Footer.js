import React from 'react';
import './Footer.css';


const Footer = () => {
  
  return (
	  <div className="footer">
	    <div className="copyright">
              <p>Copyright Sihan Larry Zhao © 2017-2018</p>
            </div>
	    <div className="icons">
	      <a href="http://www.linkedin.com/in/zhsh0616" target='_blank' rel="noopener noreferrer"> <i className="fa fa-linkedin-square fa-2x fa-cog" aria-hidden="true"></i></a>
	      <a href="https://github.com/LarryZhao0616/chicago-crime-map" target='_blank' rel="noopener noreferrer"> <i className="fa fa-github-square fa-2x fa-cog" aria-hidden="true"></i></a>
	      <a href="https://www.facebook.com/profile.php?id=1637227465" target='_blank' rel="noopener noreferrer"> <i className="fa fa-facebook-square fa-2x fa-cog" aria-hidden="true"></i></a>
	    </div>
	  </div>
  );
};

export default Footer;

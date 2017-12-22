import React from 'react';
import Footer from './Footer';
import './News.css';

class News extends React.Component{
    render(){
	
	return (
	    <div className="news">
	      <div className="news_content">
		<h1>Hello world</h1>
		</div>
		<Footer />
	    </div>
	);
    }
};

export default News;

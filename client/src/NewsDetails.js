import React from 'react';
import './News.css';

class NewsDetails extends React.Component{
/*
    constructor(props){
	super(props);
  }
*/

    render(){
//	console.log(this.props.news);
        return (
            <div className="news_holder">
	      <div className="news_words">
		<div className="news_title">
		  <a href={this.props.news.link} target='_blank' rel="noopener noreferrer"><h3>{this.props.news.title}</h3></a>
		</div>
		<div className="news_parts">
		  <p>{this.props.news.parts}</p>
		</div>
		<div className="date_from_hori">
		  <div className="news_date">
		    <p>{this.props.news.date}</p>
		  </div>
		  <div className="smallDivider">.</div>
		  <div className="news_from">
		    <p>from: {this.props.news.from}</p>
		  </div>
		</div>
	      </div>
	      <div className="news_image">
		<img src={this.props.news.src} alt="news_images"/>
	      </div>
            </div>
        );
    }
};

export default NewsDetails;

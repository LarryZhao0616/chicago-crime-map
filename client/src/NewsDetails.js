import React from 'react';
import './News.css';
import {Label} from 'react-bootstrap'
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
		  <a href={this.props.news.link} target='_blank' rel="noopener noreferrer"><p>{this.props.news.title}</p></a>
		</div>
		<div className="news_parts">
		  <p>{this.props.news.parts}</p>
		</div>
		<div className="date_from_hori">
		  <div className="news_date">
		    <Label>{this.props.news.date}</Label>
		  </div>
		<div className="news_from">
		    <Label>{this.props.news.from}</Label>
		  </div>
		</div>
	      </div>
	      <div className="news_image">
		<img src={this.props.news.imgsrc} alt="news_images"/>
	      </div>
            </div>
        );
    }
};

export default NewsDetails;

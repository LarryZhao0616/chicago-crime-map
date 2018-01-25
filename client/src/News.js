import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import NewsDetails from './NewsDetails';
import './News.css';
import axios from 'axios';

class News extends React.Component{
    constructor(props){
	super(props);
	this.state={
	    newsdata:[]
	};
    }

    componentDidMount() {
	axios.get('/newsdata').then(res => {
		this.setState({newsdata: res.data});
	});
    }
    
    render(){
	const newsList = this.state.newsdata.reverse() || [];
	
	return (
	    <div className="news">
	      <div className="news_content container">

		{newsList.map((news,i) => <NewsDetails key={i} news={news}/>)}

		</div>
		<Footer />
	    </div>
	);
    }
};

News.propTypes = {
    newsdata: PropTypes.array
};


News.defaultProps = {
    newsdata : []
};

export default News;

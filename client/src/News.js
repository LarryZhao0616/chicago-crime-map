import React from 'react';
import Footer from './Footer';
import NewsDetails from './NewsDetails';
import './News.css';

class News extends React.Component{
    render(){
	const a1 = {title:"CPD Business Alert- Robbery 1st District",
		    link:"https://home.chicagopolice.org/cpd-business-alert-robbery-1st-district/",
		    date:"Dec 31, 2017",
		    from:"Chicago Police Department",
		    src:"http://t7.rbxcdn.com/6848484ca438f883f83753446c274310",
		    parts:"This alert gives notice to businesses operating in the 1st (Central) District of robbery related incidents..."
		   };

	const a2 = {title:"2 dead, 24 wounded in Chicago shootings over New Year's weekend",
                    link:"http://abc7chicago.com/2-dead-24-wounded-in-chicago-shootings-over-new-years-weekend/2850833/",
                    date:"Jan 02, 2018",
                    from:"abc7chicago",
                    src:"http://cdn.abclocal.go.com/content/wls/images/cms/automation/images/2847081_630x354.jpg",
                    parts:"Two men were killed and 8 other people were wounded in the first 24 hours of 2018, raising the New Year's holiday weekend..."
                   };

	return (
	    <div className="news">
	      <div className="news_content container">
		<NewsDetails news={a1}/>
		<NewsDetails news={a2}/>
		</div>
		<Footer />
	    </div>
	);
    }
};

export default News;

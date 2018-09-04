import React from 'react';
import './Card.css';

const CardContent = () => {
	return  <div className="CardCont">
				<img className="FavIcon" src="https://ibin.co/3wnC6SgIOJud.png" alt="#"/>
				<a href="https://www.reactjs.org" className="CardH1">Get Started with React</a>
				<p className="CardContentP">React makes it painless to create interactive UIs. Design simple views for each state in you application. reactjs.org</p>;
			</div>
};

export default CardContent;
import React from 'react';

const HomeCard = (props) => (
	<div className="col-12 col-sm-4">
	<div className="card" style={{width: '20em'}}>
			<img className="card-img-top image-auto" src="https://www.w3schools.com/images/w3schools_green.jpg" alt="Card inage cap" />
			<div className="card-block">
		 		<h4 className="card-title"> {props.title}</h4>
		 		<p className="card-text"> {props.text} </p>
		 		<a href="" className="btn btn-primary" onClick={props.action}> GO GO GO </a>
		    </div>
		</div>
	</div>
);


export default HomeCard;
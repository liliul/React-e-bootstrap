import React from 'react';
import logo from './logo.svg';
import './App.css';

const HomeCard = (props) => (
	<div className="col-12 col-sm-4">
	<div className="card" style={{width: '20em'}}>
			<img className="card-img-top images-auto App-logo" src={logo} alt="Card inage cap" />
			<div className="card-block">
		 		<h4 className="card-title"> {props.title}</h4>
		 		<p className="card-text"> {props.text} </p>
		 		<button href="" className="btn btn-primary" onClick={props.action}> {props.title} </button>
		    </div>
		</div>
	</div>
);


export default HomeCard;
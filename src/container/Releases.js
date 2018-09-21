import React, { Component } from 'react';
import ReleasesForm from '../ui/ReleasesForm';

export default class Releases extends Component {

	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			releases: [
				{
					id: 1,
					releasesName: 'releases 01',
					releasesDate: '01/01/2018'
				},

				{
					id: 2,
					releasesName: 'releases 02',
					releasesDate: '01/01/2019'
				},

				{
					id: 3,
					releasesName: 'releases 03',
					releasesDate: '01/01/2020'
				},

				{
					id: 4,
					releasesName: 'releases 04',
					releasesDate: '01/01/2021'
				}

			]
		}
	}

	handleSubmit(e, {name, date}){
		e.preventDefault();
		var state = this.state;
		var myReleases = {
			id: state.releases.length + 1,
			releasesName: name,
			releasesDate: date
		}
		this.setState({releases: state.releases.concat(myReleases)});
	}
	render() {
		return(
			<div className="container" style={{paddingTop: '25px'}} >
				<ReleasesForm submitHandle={this.handleSubmit} />
				<table className="table table-hover">
					  <thead>
					    <tr>
					      <th></th>
					      <th>Releases LILIU</th>
					      <th>Releases LILIU</th>
					      <th>Name</th>
					    </tr>
					  </thead>
					  <tbody>
					  	{this.state.releases.map((releases, index) => {
					  		return(
						  		<tr key={releases.id}>
							      <th scope="row">{releases.id}</th>
							      <td>{releases.releasesName}</td>
							      <td>{releases.releasesName}</td>
							      <td><button type="button" className="btn btn-danger btn-sm">Danger</button></td>
							    </tr>
						    )
					  	})}
					    
					    
					  </tbody>
				</table>
			</div>
		);
	}
}
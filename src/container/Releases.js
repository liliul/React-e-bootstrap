import React, { Component } from 'react';

export default class Releases extends Component {

	constructor() {
		super();
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
	render() {
		return(
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

		);
	}
}
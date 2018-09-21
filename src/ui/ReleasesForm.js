import React from 'react';

const ReleasesForm = ({submitHandle}) => {
	let _releasesName, _releasesDate;
	const handleSubit = (e) => {
		
		submitHandle(e, {
			name: _releasesName.value,
			date: _releasesDate.value}
		);
		clearForm();
	}

	const clearForm = () => {
		_releasesName.value = '';
		_releasesDate.value = '';

	}
	return (
		<form onSubmit={handleSubit} className="form-inline d-flex justify-content-center align-items-center container " style={{}}>
		  <label className="sr-only" for="inlineFormInput">Releases Name</label>
		  <input type="text" ref={input => _releasesName = input} className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe" />

		  <label className="sr-only" for="inlineFormInputGroup">Releases Date</label>
		  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
		    <input type="text" ref={input => _releasesDate = input} className="form-control" id="inlineFormInputGroup" placeholder="Username" />
		  </div>


		  <button type="submit" className="btn btn-primary">Save</button>
		</form>
 	)

 };
 
 export default ReleasesForm;	
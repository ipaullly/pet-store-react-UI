import React from 'react';
import { Link } from 'react-router-dom';

const Edit = id => (
  <div className="float-right">
    <Link to={`/pets/${id.id}/edit`}>
        <button className="btn btn-outline-info" title="Edit pet" type="button">
            <i className="fas fa-edit" />
            <span className="ml-1">Edit pet info</span>
        </button>                        
    </Link>
  </div>
);

export default Edit;
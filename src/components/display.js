import React from 'react';
import { Link } from 'react-router-dom';

const Display = (props) => {
    let { name, animal_type, id } = props.pet
    return (
        <div className="card text-center" style={{ width: '16rem', margin: '7px' }}>
            <div className="card-body">
                <Link to={`/pets/${id}`}>
                    <h5 className="card-title">{name}</h5>
                </Link>
                <p className="card-text">{animal_type}</p>
            </div>
        </div>
        // <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" style={{padding: '20px'}}>
        //    <h6>Current name: {name}</h6>
        //    <p>Animal type: {animal_type}</p>
        //    <p>Appearance: {color}</p>
        //    <p>Age in years: {age}</p>
        //</div> 
    );
}

export default Display
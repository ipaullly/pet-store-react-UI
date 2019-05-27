import React, {Component} from 'react';
import axios from 'axios';
import history from '../utils/history';
import Edit from './editButton';

class PetDetail extends Component {
    constructor() {
        super();
        this.state = {
            pet: {}
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`https://pet-store-api.herokuapp.com/api/v1/pets/${id}`)
        .then(response => {
            this.setState(
            {
                pet: response.data
            }
            )
        })
    }

    render() {
        const { name, animal_type, color, age, id } = this.state.pet;
        history.push('/')
        if (name) {
            return(
                <div className="container" style={{padding: '200px 0 300px 0'}}>
                    <div className="card text-center">
                        <div className="card-header">
                            Details of {name}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{animal_type}</h5>
                            <p className="card-text">{name}'s appearance - {color}</p>
                            <p className="card-text">{name}'s age in years - {age}</p>
                            <Edit id={id} />
                        </div>
                        <div className="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>
                </div>
            );
        }
        return(
            <div className="container" style={{padding: '350px 0 350px 0'}}>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-info" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default PetDetail;
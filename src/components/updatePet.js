import React, { Component } from 'react';
import axios from 'axios';
import history from '../utils/history';

class PetUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": "",
            "age": "",
            "animal_type": "",
            "color": ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
    
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://pet-store-api.herokuapp.com/api/v1/pets/${id}`)
        .then(response => {
            this.setState({
                "name": response.data.name,
                "age": response.data.age,
                "animal_type": response.data.animal_type,
                "color": response.data.color
            })
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value,
        });
        try {
            document.getElementById('name').classList.remove('is-invalid');
            document.getElementById('age').classList.remove('is-invalid');
            document.getElementById('animal_type').classList.remove('is-invalid');
            document.getElementById('color').classList.remove('is-invalid');
        } catch (e) {}
    }

    handleClick() {
        const id = this.props.match.params.id;
        axios.delete(`https://pet-store-api.herokuapp.com/api/v1/pets/${id}`)
        .then(response => {
            if(response) {
                console.log(response)
                this.props.history.push('/')
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const id = this.props.match.params.id;
        const nameCheck = e.target.name.value;
        const ageCheck = e.target.age.value;
        const animalTypeCheck = e.target.animal_type.value;
        const colorCheck = e.target.color.value;

        if (nameCheck.length === 0) {
            document.getElementById('name').classList.add('is-invalid');
            document.getElementById('name-text').innerText = 'Name field may not be empty.';
            return;
        }
        if (ageCheck.length === 0) {
            document.getElementById('age').classList.add('is-invalid');
            document.getElementById('age-text').innerText = 'age field may not be empty.';
            return;
        }
        const isNum = /^\d+$/.test(ageCheck);
        if (isNum === false) {
            document.getElementById('age').classList.add('is-invalid');
            document.getElementById('age-text').innerText = 'age field must be a number';
            return;
        }
        if (animalTypeCheck.length === 0) {
            document.getElementById('animal_type').classList.add('is-invalid');
            document.getElementById('animal-text').innerText = 'Animal breed field may not be empty.';
            return;
        }
        if (colorCheck.length === 0) {
            document.getElementById('color').classList.add('is-invalid');
            document.getElementById('color-text').innerText = 'color field may not be empty.';
            return;
        }

        const { name, age, animal_type, color } = this.state;
        const updatedPet = {
            "name": name,
            "age": age,
            "animal_type": animal_type,
            "color": color
        };
        axios.put(`https://pet-store-api.herokuapp.com/api/v1/pets/${id}`, updatedPet)
        .then(response => {
            if(response) {
                console.log(response)
                this.props.history.push(`/pets/${this.props.match.params.id}`)
            }
        })
    }

    render() {
        const { name, age, animal_type, color } = this.state;
        history.push('/')
        return(
            <div className="container" style={{padding: '100px 0 200px 0'}}>
                <div className="row float-right mt-1">
                    <div>
                        <button type="button" className="btn btn-outline-danger" data-toggle="modal" data-target="#deleteModal">
                            <i className="fas fa-trash" />
                            <span className="ml-1">Delete</span>
                        </button>
                        <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="deleteModalLabel">Remove {name} from store</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div className="modal-body">
                                Are you sure you want to remove {name} from store?
                                </div>
                                <div className="modal-footer">
                                <button id="delete" type="button" className="btn btn-danger" onClick={this.handleClick} data-dismiss="modal">Delete</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="text-center mt-3">Edit Pet Details</h5>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" autoComplete="off" className="form-control" onChange={this.handleChange} value={name} />
                        <div className="invalid-feedback" id="name-text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="text" maxLength="128" id="age" autoComplete="off" onChange={this.handleChange} className="form-control" value={age} />
                        <div className="invalid-feedback" id="age-text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="animal_type">Animal breed</label>
                        <input type="text" maxLength="128" id="animal_type" autoComplete="off" onChange={this.handleChange} className="form-control" value={animal_type} />
                        <div className="invalid-feedback" id="animal-text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="color">Animal color</label>
                        <input type="text" maxLength="128" id="color" autoComplete="off" onChange={this.handleChange} className="form-control" value={color} />
                        <div className="invalid-feedback" id="color-text" />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-outline-info mt-3">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PetUpdate;
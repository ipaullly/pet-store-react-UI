import React, { Component} from 'react';
import axios from 'axios';
import history from '../utils/history';

export class CreatePet extends Component {
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
    handleSubmit(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const age = e.target.age.value;
        const animalType = e.target.animal_type.value;
        const color = e.target.color.value;

        if (name.length === 0) {
            document.getElementById('name').classList.add('is-invalid');
            document.getElementById('name-text').innerText = 'Name field may not be empty.';
            return;
        }
        if (age.length === 0) {
            document.getElementById('age').classList.add('is-invalid');
            document.getElementById('age-text').innerText = 'age field may not be empty.';
            return;
        }
        const isNum = /^\d+$/.test(age);
        if (isNum === false) {
            document.getElementById('age').classList.add('is-invalid');
            document.getElementById('age-text').innerText = 'age field must be a number';
            return;
        }
        if (animalType.length === 0) {
            document.getElementById('animal_type').classList.add('is-invalid');
            document.getElementById('animal-text').innerText = 'Animal breed field may not be empty.';
            return;
        }
        if (color.length === 0) {
            document.getElementById('color').classList.add('is-invalid');
            document.getElementById('color-text').innerText = 'color field may not be empty.';
            return;
        }
    
        const newPet = {
          name: this.state.name,
          age: this.state.age,
          animal_type: this.state.animal_type,
          color: this.state.color,
        };
        console.log(this.state);
        axios.post('https://pet-store-api.herokuapp.com/api/v1/pets/', newPet)
        .then(response => {
            if(response) {
                console.log(response)
                this.props.history.push(`/pets/${response.data.id}`)
            }
        })
    }

    render() {
        history.push('/create');
        return(
            <div className="padding container" style={{padding: '80px 0 300px 0'}}>
                <form id="petForm" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Pet name</label>
                        <input type="text" id="name" className="form-control" onChange={this.handleChange} />
                        <div className="invalid-feedback" id="name-text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="text" id="age" className="form-control" onChange={this.handleChange} />
                        <div className="invalid-feedback" id="age-text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="animal_type">Animal breed</label>
                        <input type="text" id="animal_type" className="form-control" onChange={this.handleChange} />
                        <div className="invalid-feedback" id="animal-text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="color">Animal color</label>
                        <input type="text" id="color" className="form-control" onChange={this.handleChange} />
                        <div className="invalid-feedback" id="color-text" />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-outline-info mt-3">Add pet</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreatePet;
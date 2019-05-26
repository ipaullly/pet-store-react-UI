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
    }
    handleSubmit(e) {
        e.preventDefault();
    
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
                        <label for="name">Pet name</label>
                        <input type="text" id="name" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="age">Age</label>
                        <input type="text" id="age" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="animal_type">Animal breed</label>
                        <input type="text" id="animal_type" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="color">Animal color</label>
                        <input type="text" id="color" className="form-control" onChange={this.handleChange} />
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
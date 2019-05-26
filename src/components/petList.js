import React from 'react';
import axios from 'axios';
import Display from './display';
  
class PetList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        pets: []
        };
    }

    componentDidMount() {
        axios.get('https://pet-store-api.herokuapp.com/api/v1/pets/')
        .then(response => {
            this.setState(
            {
                pets: response.data
            }
            )
        })
    }
    render() {
        const { pets } = this.state
        let petList
        if(pets.length > 0) {
        petList = pets.map(
            (pet, index) => {
            return(
                <Display pet={pet} key={index}/>
            )
            }
        )
        }
        return (
            <div style={{fontFamily: 'Slabo 27px'}}>
                <div className="padding" style={{padding: '80px 0 300px 0'}}>
                    <div className="container">
                        <div className="page-header text-center">
                            <h2 className="display-4" style={{ color: '#23145C' }}>{ petList ? ("Pets In Shop") : (null) }</h2>
                            <hr />
                        </div>
                        <div className="row">
                            {
                                petList
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default PetList;

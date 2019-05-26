import React from 'react'

const Footer = () => {
    return (
        <footer className="container-fluid text-center" style={{width: '100%', backgroundColor: '#23415C', padding: '2% 2% 5% 2%', color: 'yellow'}}>
            <div className="row">
                <div className="col-sm-6">
                    <h4>Contacts</h4>
                    <h6>+042-3867-890</h6>
                </div>
                <div className="col-sm-6">
                    <h4>Connect</h4>
                    <a href="https://www.facebook.com/petpages/">
                        <i className="fab fa-facebook" style={{padding: '15px', fontSize: '25px', color: 'white'}}></i>
                    </a>
                    <a href="https://twitter.com/hashtag/pets?lang=en">
                        <i className="fab fa-twitter-square" style={{padding: '15px', fontSize: '25px', color: 'white'}}></i>
                    </a>            
                </div>
            </div>
        </footer>
    )
}
        
export default Footer


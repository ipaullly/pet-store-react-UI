import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#23415C', padding: '1% 0'}}>
            <NavLink className="navbar-brand nav-link" to="/">
                <span className="navbar-brand" style={{ color: 'yellow' }}><i class="fas fa-paw"></i></span>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav float-right">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/create" style={{color: 'yellow'}}>
                            Create Pet
                        </NavLink>
                    </li>
                </div>
            </div>
        </nav>

    //<nav className="navbar navbar-default" role="navigation">
    //    <div className="container-fluid">
    //        <NavLink className="nav-link" to="/">
    //            <span className="navbar-brand" style={{color: 'yellow'}}>Pet Store</span>
    //        </NavLink>
    //        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-main">
    //           <span className="icon-bar"></span>
    //            <span className="icon-bar"></span>
    //            <span className="icon-bar"></span>
    //        </button>
    //        <div className="collapse navbar-collapse" id="navbar-collapse-main" style={{color: 'yellow'}}>
    //            <ul className="nav navbar-nav navbar-right">
    //                <li className="nav-item">
    //                    <NavLink className="nav-link" to="/create">
    //                        Create Pet
    //                    </NavLink>
    //                </li>
    //                <li className="nav-item">
    //                    <a className="nav-link" href="#">About</a>
    //                </li>
    //                <li className="nav-item">
    //                    <a className="nav-link" href="#">Services</a>
    //                </li>
    //            </ul>
    //        </div>
    //    </div>
    //</nav>
    )
}

export default NavigationBar
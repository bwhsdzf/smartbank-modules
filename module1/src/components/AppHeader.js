import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/AppHeader.css'
import AppRoute from '../AppRoutes';
import { LoginContext } from '../contexts/LoginContext';
import { CartContext } from '../contexts/CartContext';

function AppHeader() {


    const { cartCount } = useContext(CartContext)
    const loginContext = useContext(LoginContext)
    console.log(loginContext)

    let history = useHistory();
    const logoutUser = () => {
        loginContext.logoutUser()
        history.push("/login")
        /**
         * Write logic to route to login page on clicking logout button.
         */
    }

    return (
        <div className="app-header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-header fixed-top">
                <Link className="navbar-brand" to="/">SmartBank Credit Card</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item navbar-link active">
                            {/* Provide Homepage routing link */}
                            <Link className="nav-link" to="/">
                                <i className="fas fa-home"></i>
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item navbar-link">
                            {/* Provide Rewards routing link */}
                            <Link className="btn btn-success" to="/rewards">
                                Rewards Catalogue
                            </Link>


                        </li>


                    </ul>

                    <div className="header-right">
                        {/* Provide cart routing link */}
                        <Link type="button" className="btn btn-success" to="/cart">
                            <i className="fas fa-shopping-cart" />&nbsp; My Cart &nbsp;
                            <span className="badge badge-light">
                                {cartCount}
                            </span>
                            <span className="sr-only">cart items</span>
                        </Link>
                    </div>

                    <div className="header-right">

                        <Link type="button" className="btn btn-success" to="/">
                            <i className="fas fa-user" />&nbsp; Welcome {loginContext.loggedInUser.userName ==='' ? 'Guest' : loginContext.loggedInUser.userName}
                            <span className="sr-only">logged in user</span>
                        </Link>
                    </div>

                    <button className="btn btn-dark" onClick={logoutUser}>
                        <i className="fas fa-sign-out-alt" />&nbsp; Log Out

                    </button>

                </div>
            </nav>

            {/* 
                Routing configuration to different components
            */}

            <AppRoute />

        </div>
    );

}



export default AppHeader;
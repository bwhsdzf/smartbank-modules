import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../Constants';
import { LoginContext } from '../../contexts/LoginContext';

function LoginPage(props) {
    let navigate = useNavigate();

    const {
        loggedInUser,
        isLoggedIn,
        setLoginUserDetails,
        logoutUser } = useContext(LoginContext);

    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        console.log(setLoginUserDetails);
        console.log(isLoggedIn);


    }, [])

    const changeUserId = (e) => {

        setUserId(e.target.value)

    }

    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const verifyLogin = async (e) => {

        e.preventDefault();
        console.log(userId, " /", password);

        let loginDetail = {
            userId: userId,
            password: password
        }

        await axios.post(API_URL + 'ccuser/login', loginDetail)
            .then(response => {
                console.log(response);
                setUserId('');
                setPassword('');
                // updating the login context
                setLoginUserDetails(response.data.body)
                // navigating to the homepage after login
                navigate('/rewards');

            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('error', error.message);

                }
                setUserId('');
                setPassword('');

            })

    }


    
    return (
        <div className="login-page container">

            <h3>Welcome to SmartBank Credit card</h3>
            <hr></hr>

            <div className="login-form">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={verifyLogin}>

                            <div className="form-group">
                                <label>
                                    <h5>
                                        <i className="fas fa-user"></i>&nbsp;User id
                                    </h5>
                                </label>
                                <input type="text" value={userId} required className="form-control" onChange={changeUserId} />
                            </div>

                            <div className="form-group">
                                <label><h5><i className="fas fa-lock"></i>&nbsp;Password</h5></label>
                                <input type="password" value={password} required className="form-control" onChange={changePassword} />
                            </div>

                            <div>
                                <button type="submit" className="btn btn-primary">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LoginPage;



/**
 * The below part is for redux
 */

// const mapStateToProps = state => {

//     return {
//         loginDetail : state
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         login: (user) => dispatch(LogInActionDispatch(user)),
//         logout: () => dispatch(LogOutAction())
//     }
// }
// export default connect(
//  mapStateToProps,
//  mapDispatchToProps
// )(LoginPage);
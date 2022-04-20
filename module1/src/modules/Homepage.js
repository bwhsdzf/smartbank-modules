import React, { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';

function Homepage() {

    const loginContext = useContext(LoginContext)
    const loggedInUser = {
        ccNumber: 0,
        ccName: "Dummy Card",
        userName: "Guest User",
        userId: "guest",
        availableRedeemPoints: 0,
        totalRewardsGained: 0
    }


    return (
        <div className="homepage container">
            <h2>Welcome to SmartBank credit card</h2>
           
            <div className="user-detail">
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Credit Card Number</th>
                                <th>Card Name</th>
                                <th>User Name</th>
                                <th>Available Points</th>
                                <th>Total Rewards Gained (<i className="fas fa-rupee-sign"></i>)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{loginContext.loggedInUser.ccNumber}</td>
                                <td>{loginContext.loggedInUser.ccName}</td>
                                <td>{loginContext.loggedInUser.userName}</td>
                                <td>{loginContext.loggedInUser.availableRedeemPoints}</td>
                                <td>{loginContext.loggedInUser.totalRewardsGained}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Homepage; 
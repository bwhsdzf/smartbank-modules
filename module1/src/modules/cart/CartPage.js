import { useContext , React }  from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';
import { LoginContext } from '../../contexts/LoginContext';
import { CartContext } from '../../contexts/CartContext';

function CartPage() {

    const { cartItems, cartCount, cartSummary } = useContext(CartContext);
    const loginContext = useContext(LoginContext)
    const isLoggedIn = false;

    const loggedInUser = {
        ccNumber: 0,
        ccName: "Dummy Card",
        userName: "Guest User",
        userId: "guest",
        availableRedeemPoints: 0,
        totalRewardsGained: 0
    }

    return (
        <div className="container">
            {
                loginContext.isLoggedIn == true ? (
                    <div>
                        {
                            cartItems.length > 0 ? (
                                <div>
                                    <span style={{ float: "right", fontSize: "16px", fontWeight: "bold" }}>
                                        Available Points :- {loggedInUser.availableRedeemPoints}
                                    </span>
                                    <h4>My Cart ({cartItems.length})</h4>


                                    <hr></hr>

                                    <CartItems />
                                </div>

                            ) : (
                                    <div>
                                        <h4>My Cart ({cartItems.length})</h4>
                                        <hr></hr>
                                        No items in cart.
                                        <br></br>
                                        <h5 className="mt-5" style={{justifyContent:"center", textAlign:"center"}}>
                                            Select items from catalogue. &nbsp;
                                            <Link className="btn btn-outline-success" to="/rewards">
                                                <i className="fas fa-gift" />&nbsp; Rewards Catalogue
            
                                            </Link>
                                        </h5>
                                    </div>
                                )
                        }
                    </div>
                ) : (
                        <div>
                            <h4>My Cart</h4>
                            <hr></hr>
                            <h5 style={{ color: "red" }}>Please Sign In to add items in the cart.</h5>
                            <Link type="button" className="btn btn-primary" to="/login">
                                <i className="fas fa-sign-in-alt"></i>&nbsp;Sign in
                        </Link>
                        </div>
                    )
            }
        </div>
    );
}

export default CartPage;
import React, { useEffect, useState } from "react";
import axios from "axios";

const Checkout = ({ userEmail }) => {
    const [user, setUser] = useState({});
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("Card");

    useEffect(() => {
        axios.get(`http://localhost:5000/getUser/${userEmail}`)
            .then(res => setUser(res.data))
            .catch(err => console.log("Error Fetching User:", err));
    }, [userEmail]);

    const handlePlaceOrder = () => {
        const orderData = {
            userEmail: user.email,
            name: user.name,
            address: user.address, 
            cartItems: cartItems,
            totalAmount: totalAmount,
            paymentMethod: paymentMethod,
            paymentStatus: "Pending"
        };

        axios.post("http://localhost:5000/saveOrder", orderData)
            .then(res => {
                console.log(res.data);
                alert("Order Placed Successfully!");
            })
            .catch(err => console.log("Error Placing Order:", err));
    };

    return (
        <div>
            <h2>Checkout</h2>
            <p>Name: {user.name}</p>
            <p>Address: {user.address}</p>
            <h3>Total: ₹{totalAmount}</h3>

            <label>Payment Method:</label>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="Card">Card</option>
                <option value="UPI">UPI</option>
                <option value="Net Banking">Net Banking</option>
            </select>

            <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
    );
};

export default Checkout;

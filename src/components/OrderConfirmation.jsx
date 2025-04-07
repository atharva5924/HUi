/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import ShowOrderProduct from './ShowOrderProduct';
import axios from "axios";

import TableProduct from "./TableProduct";

const PaymentConfirmation = () => {
  const { cart, clearCart, url,userAddress, user, user_Order } = useContext(AppContext);


 


  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  const { userOrder } = useContext(AppContext);
  const [latestOrder, setLatestOrder] = useState({});
  useEffect(() => {
    if (userOrder) {
      setLatestOrder(userOrder[0]);
    }
  }, [userOrder]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    transactionId: '',
});
const [responseMessage, setResponseMessage] = useState('');

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const name  = await user.name;
      const email  = await user.email;
setFormData({ name: name, email: email, transactionId: formData.transactionId }); // Clear form

// console.log(formData)
        const response = await axios.post(`${url}/product/email`, formData);
        setResponseMessage(response.data);
        alert("Email is send to owner and will conform the transation id and dispatch product");
        navigate("/")
    } catch (error) {
        console.error('Error sending email:', error);
        setResponseMessage('Error sending email.');
    }
};
  // console.log("latestOrder", latestOrder);

  const [showQRCode, setShowQRCode] = useState(false);

  // Function to toggle the QR code visibility
  const toggleQRCode = () => {
      setShowQRCode((prev) => !prev);
  };

  return (
    <div className="container my-5 bg-backgroundColor">
      <div className="container">
        <table className="table table-bordered border-primary bg-dark">
          <thead className="bg-dark">
            <tr>
              <th scope="col" className="bg-dark text-light text-center">
                OrderItems
              </th>

              <th scope="col" className="bg-dark text-light text-center">
                OrderDetails & ShippingAddress
              </th>
            </tr>
          </thead>
          <tbody className="bg-dark">
            <tr>
              <td className="bg-dark text-light">
                {/* <TableProduct cart={cart} /> */}
                <ShowOrderProduct items={latestOrder?.orderItems} />

               
              </td>
              <td className="bg-dark text-light">
                <ul style={{ fontWeight: "bold" }}>
                  <li>Name : {userAddress?.fullName}</li>
                  <li>Phone : {userAddress?.phoneNumber}</li>
                  <li>Country : {userAddress?.country}</li>
                  <li>State : {userAddress?.state}</li>
                  <li>PinCode : {userAddress?.pincode}</li>
                  <li>Near By : {userAddress?.address}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="text-center">Bank Information</h1>
      <div className="bg-light text-white bg-dark p-4 rounded">
           
        <h3>Sellers Bank Details</h3>
            {!showQRCode && (
                 <ul>
                     <li>Bank Name: ABC Bank</li>
                     <li>Account Number: 123456789</li>
                     <li>IFSC Code: ABCD0123456</li>
                     <li>Account Holder Name: John Doe</li>
                 </ul>
            )}
            <button onClick={toggleQRCode} className="btn btn-primary mt-3">
                {showQRCode ? 'Hide QR Code' : 'Show QR Code'}
            </button>
            {showQRCode && (
                <img
                    src={"https://imgs.search.brave.com/5GwjKC_Joy7I2-t1vt7bfCLKmPHQzUFpFSVBZ1CnmMY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnNz/dGF0aWMubmV0L2JW/dERILnBuZw"}
                    alt="QR Code"
                    className="mt-3"
                    style={{ width: '300px', height: '300px' }}
                />
            )}
        </div>

      <h2 className="text-center  my-4">Enter Transaction ID</h2>
      <form  className="text-center" onSubmit={handleSubmit} >
        <div className="mb-3">
          <input
            type="text"
            name = "transactionId"
            className="form-control"
            placeholder="Transaction ID"
            value={formData.transactionId}
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit"  className="btn btn-primary" >
          continue Shopping
        </button>
      </form>
    </div>
  );
};

export default PaymentConfirmation;

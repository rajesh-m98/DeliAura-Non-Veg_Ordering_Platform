import React,{useState} from "react";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


const Address= () => {


    // Function to handle the button click and make the API call
    const [locationData, setLocationData] = useState(null);
    let pincode;
    let door_number;
    let street;
    let area;
    let city;
    let state;


    // Function to handle the button click and make the API call
    const handleLocationButtonClick = async () => {
        const requestData = { // Define an object containing the parameters
            pincode: pincode,
            door_number: door_number,
            street: street,
            area: area,
            city: city,
            state: state
        };
      
        try {
            // Make the API call with query parameters included in the URL
            const response = await axios.get('http://10.10.238.199:3000/location/loaction', { params: requestData });
            
            // Assuming the API response contains location data, update the state with the received data
            setLocationData(response.data);
            // You can also perform additional actions based on the API response if needed
            console.log('Location data received:', response.data);
        } catch (error) {
            // Handle errors
            console.error('Error fetching location data:', error);
        }
    };
    return (
        <>
            <div className="container" id={styles.register}>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-4 p-5 bg-light">
                            <p className="text-center fs-5 fw-bold">Point us to your Kitchen</p>
                            <button className="btn bg-white btn-borderless" onClick={handleLocationButtonClick}><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> Use Current Location</button>
                            <form action="" method="" className="signform mt-2">
                                <div className="col-md-12 mt-2">
                                    <label id="area" className="text-dark col-md-4">Enter Your Area</label>
                                    <input type="text" name="area" id="area" className="col-md-8" value={area}/>
                                </div>
                                {/* <img src="./images/sign-map.avif" className="img-fluid mt-2" /> */}
                                <div className="col-md-12 mt-2">
                                    <label id="name" className="text-dark col-md-4">Customer Name</label>
                                    <input type="text" name="name" id="name" className="col-md-8" value="Rajesh M"/>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label id="flatnum" className="text-dark col-md-4">Flat No:</label>
                                    <input type="text" name="flatnum" id="flatnum" className="col-md-8" value={door_number} />
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label id="street" className="text-dark col-md-4">Street Name:</label>
                                    <input type="text" name="street" id="street" className="col-md-8" value={street}/>
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label id="landmark" className="text-dark col-md-4">Landmark:</label>
                                    <input type="text" name="landmark" id="landmark" className="col-md-8" />
                                </div>
                                <div className="col-md-12 mt-2">
                                    <label id="pincode" className="text-dark col-md-4">Pin Code:</label>
                                    <input type="text" name="pincode" id="pincode" className="col-md-8" value={pincode}/>
                                </div>
                                <Link to='/Profile.jsx' className="btn btn w-100 mt-3 text-dark" type="button" style={{ backgroundColor: '#ffde59' }}>Save Address</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address
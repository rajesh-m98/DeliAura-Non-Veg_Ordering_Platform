import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faRightFromBracket, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "./images/logo1.png"
import GoogleApp from "./images/google-play-badge-logo-png-transparent.png"
import AppleStore from "./images/apple-app-store-logo.jpg"
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
import { Link } from "react-router-dom";
import Google from "./images/google.jpg"
import Register from "./Register";
import Chicken1 from "./images/chicken 1.jpg"
import Chicku3 from "./images/Chicken/chiku3.jpeg"
import Chicku7 from "./images/Chicken/chiku7.jpg"
import Chicku5 from "./images/Chicken/chiku5.jpg"
import Chicku4 from "./images/Chicken/chiku4.jpg"
import Chicku6 from "./images/Chicken/chiku6.jpg"
import Chicku2 from "./images/Chicken/chiku2.jpg"
import Chicku1 from "./images/Chicken/chiku1.jpg"
import Chicku8 from "./images/Chicken/chiku8.jpg"
import Chicku9 from "./images/Chicken/chiku9.jpg"
import Chicku10 from "./images/Chicken/chiku10.jpg"
import Chicku11 from "./images/Chicken/chiku11.jpg"
import Chicku12 from "./images/Chicken/chiku12.jpg"
import SearchProduct from "./SearchProduct";
import axios from "axios";

const Cart = () => {

    const ChickenData = [
        {
            id: 1,
            img: Chicku1,
            dish: "Brown Eggs - Pack of 12",
            description: "Brown Shelled Eggs | Pale Yellow Yolk Weight: 500gms | 6-7 pieces | Serves 2",
            Title: "Eggs",
            Price: "450/-",
            Dollar: "4,600$"
        },
        {
            id: 2,
            img: Chicku2,
            dish: "Mud Crab",
            description: "Three Spotted Crabs that are consistent in size for an even cook.",
            Title: "Mud Crab",
            Price: "230/-",
            Dollar: "4,600$"
        },
        {
            id: 3,
            img: Chicku3,
            dish: "Lamb Curry Cut",
            description: "Perfect balance of fat & meat Weight: 500g | 15-22 pieces | Serves 2-3",
            Title: "Lamb Curry Cut",
            Price: "570/-",
            Dollar: "4,600$"
        },
        {
            id: 4,
            img: Chicku4,
            dish: "Pure Goat Mince",
            description: "Finely ground goat mince for curries,kebabs & more",
            Title: "Pure Goat Mince",
            Price: "980/-",
            Dollar: "4,600$"
        },
        {
            id: 5,
            img: Chicku5,
            dish: "Classic Chicken Salami",
            description: "Sandwiches, salads, canapes, crackers",
            Title: "Chicken Salami",
            Price: "130/-",
            Dollar: "4,600$"
        },
        {
            id: 6,
            img: Chicku6,
            dish: "Yummy Chicken Cutlets",
            description: "Melt in your mouth amazing Chicken Cutlets Weight: 160g | 3-5 pieces | Serves 2",
            Title: "Chicken Cutlets",
            Price: "250/-",
            Dollar: "4,600$"
        },
        {
            id: 7,
            img: Chicku7,
            dish: "Chicken Curry Cut - Large Pieces",
            description: "Bone-in | Large cuts | Curry Cut Weight: 500gms | 6-7 pieces | Serves 2",
            Title: "Chicken Curry Cut",
            Price: "690/-",
            Dollar: "4,600$"
        },
        {
            id: 8,
            img: Chicku8,
            dish: "Chicken Liver",
            description: "Offal Cuts | Cleaned | Fresh Weight: 500gms | 6-7 pieces | Serves 2",
            Title: "Chicken Liver",
            Price: "560/-",
            Dollar: "4,600$"
        },
        {
            id: 9,
            img: Chicku9,
            dish: "Mackerel Medium",
            description: "Premium grade | Whole fish | Gutted Weight: 500gms | 6-7 pieces | Serves 2",
            Title: "Mackerel Fish",
            Price: "560/-",
            Dollar: "4,600$"
        },
        {
            id: 10,
            img: Chicku10,
            dish: "Cage Free Country Eggs - Pack of 12",
            description: "Eggs from country hens raised outside cages - Pack of 12 Eggs",
            Title: "Country Eggs",
            Price: "250/-",
            Dollar: "4,600$"
        },
        {
            id: 11,
            img: Chicku11,
            dish: "Cage Free Country Eggs - Pack of 12",
            description: "Eggs from country hens raised outside cages - Pack of 12 Eggs",
            Title: "Country Eggs",
            Price: "250/-",
            Dollar: "4,600$"
        },
        {
            id: 12,
            img: Chicku12,
            dish: "Cage Free Country Eggs - Pack of 12",
            description: "Eggs from country hens raised outside cages - Pack of 12 Eggs",
            Title: "Country Eggs",
            Price: "250/-",
            Dollar: "4,600$"
        }
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        if (term.trim() === '') {
            setSearchResults([]);
        } else {
            const results = ChickenData.filter(product =>
                product.dish.toLowerCase().includes(term) ||
                product.Title.toLowerCase().includes(term)
            );
            setSearchResults(results);
        }
    };

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(650);
    const [isChecked, setIsChecked] = useState(false);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        setQuantity(newQuantity);
        setTotalPrice(newQuantity * 650); // Assuming product price is 650
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const CartTable = document.getElementById("carttable");
    function remove() {
        CartTable.style.display = "none"
        TotalPrice.style.display = "none"
    }

    const TotalPrice = document.getElementById("totalprice");
    function update() {
        TotalPrice.style.display = "block"
    }

    const [locationDetails, setLocationDetails] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(async (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;

                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=en`);
                        const data = await response.json();

                        // Extracting address components
                        const address = data.address;
                        // const doornumber = address.doornumber;
                        const area = address.suburb || address.hamlet || address.area || address.urban;
                        const city = address.city_district || address.state_district;
                        const state = address.state || address.region;
                        const pincode = address.postcode;

                        // Constructing location details string
                        const locationDetails = `${area}, ${city}, ${state}, ${pincode}`;
                        setLocationDetails(locationDetails);
                    });
                } else {
                    alert("Geolocation is not supported by this browser.");
                }
            } catch (error) {
                console.error("Error fetching location details:", error);
            }
        };

        fetchLocation();
    }, []);

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const initialFormData = {
        firstName: "",
        lastName: "",
        email: "",
        subscribe: false,
        termsAccepted: false,
      };
      
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        // Fetch user data from sessionStorage on component mount
        const storedFName = sessionStorage.getItem("setFName");
        const storedLName = sessionStorage.getItem("setLName");
        const storedEmail = sessionStorage.getItem("setEmail");
        const storedPhnNumber = sessionStorage.getItem("setPhnNumber");

        setFormData({
            firstName: storedFName ? JSON.parse(storedFName) : "",
            lastName: storedLName ? JSON.parse(storedLName) : "",
            email: storedEmail ? JSON.parse(storedEmail) : "",
            phone: storedPhnNumber ? JSON.parse(storedPhnNumber) : "",
        });
    }, []);

    const phoneNumberFromverify = sessionStorage.getItem('phoneNumbers'); // Retrieve phone number from sessionStorage

    async function logout() {
        const logoutMessage = `Are you sure you want to log out, ${formData.firstName}?`;

        if (window.confirm(logoutMessage)) {
            
            try {
                const response = await axios.post('http://10.10.240.79:3090/user_login/logout', { phoneNumber: phoneNumberFromverify })
                alert('Logout Successfully');
                setFormData(initialFormData);
                sessionStorage.clear();
            }
            catch (error) {
                console.log(error)
                alert('Logged out Failed. Try Again')
            }
        }
        
    };

    return (
        <>
            <div className="container-fluid bg-dark" id={styles.navbar}>
                <div className="row">
                    <div className="col-md-10">
                        <div className="contact-details d-flex mt-2 mx-5" id={styles.contact}>
                            <a href="tel:+917848973214" className="text-warning text-decoration-none">
                                <FontAwesomeIcon icon={faPhone} className="text-warning mt-1" style={{ fontSize: '9px' }}></FontAwesomeIcon>7848973214 </a>
                            <a href="mailto:customercare@deliuara.com" className="text-warning mx-2 text-decoration-none"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '11px' }} className="text-warning"></FontAwesomeIcon>&nbsp;&nbsp;customercare@deliuara.com</a>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex mt-2">
                        <a href="login.html" className="text-white text-decoration-none"> Why Us |</a>
                        <a href="login.html" className="text-white text-decoration-none"> Sell With Us |</a>
                    </div>
                </div>
            </div>
            <section id={styles.border} className={`pb-2 ${styles.navbar1} bg-white d-md-block d-none`}>
                <div className="container pt-2" id={styles.logo}>
                    <div className="row align-items-center">
                        <div className="col-md-2 d-inline pt-0">
                            <div className="sidebar_logo">
                                <Link to='/'>
                                    <img src={Logo} alt="img" className='img-fluid w-50' />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 d-inline">
                            <select id={styles.locationselect} className="text-dark rounded" value={locationDetails || ''} disabled>
                                <option value="">{locationDetails ? locationDetails : 'Fetching location...'}</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <form className="d-flex form-group">
                                <input
                                    type="text"
                                    className="form-control w-50 px-2"
                                    placeholder="Search"
                                    name="search_data"
                                    aria-label="Search"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    id={styles.searchbox}
                                />
                                {/* Remove action attribute from form */}
                                <button type="submit" className="btn btn-outline-success mx-1 p-1" id={styles.search}>Search</button>
                            </form>
                        </div>
                        <div className="col-md-3 d-flex justify-content-end" id={styles.profilesignin}>
                            <div className="dropdown">
                                <Link className="bg-white dropdown-toggle text-decoration-none text-dark" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ outline: 'none' }}>
                                    {formData.firstName} {formData.lastName}
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link to='/Profile.jsx' className="text-decoration-none text-dark dropdown-item">
                                        <FontAwesomeIcon icon={faUser} className="w-25" />
                                        My Account
                                    </Link>
                                    <Link className="text-decoration-none text-dark dropdown-item" onClick={logout}>
                                        <FontAwesomeIcon icon={faRightFromBracket} className="w-25" />
                                        Log Out
                                    </Link>
                                </div>
                            </div>
                            <Link to='/cart.jsx' className="text-decoration-none d-flex mx-4 mt-1 text-dark">
                                <FontAwesomeIcon icon={faShoppingCart} className="mx-1 w-50" />
                                <sup className="mt-1 fw-bold">1</sup> cart
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container" id={styles.categories}>
                <div className="row">
                    <div className="col-md-12 d-md-block d-none">
                        <div className="navbar navbar-expand-lg" >
                            <ul className="navbar-nav">
                                <li className="nav-item menu-click4">
                                    <Link to='/chicken.jsx' className="nav-link">CHICKEN
                                    </Link>
                                </li>
                                <li className="nav-item  menu-click5">
                                    <div class="dropdown" >
                                        <a class="nav-link dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            SEA FOOD
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles.underseafood}>
                                            <Link to='/SeaFood.jsx' class="dropdown-item" href="#">SEA FOOD</Link>
                                            <Link to='/Prawns.jsx' class="dropdown-item" href="#">PRAWNS AND CRABS</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Egg.jsx' className="nav-link">EGG</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/Mutton.jsx'>MUTTON</Link>
                                </li>
                                <li className="nav-item menu-click3">
                                    <Link className="nav-link" to='/ColdCuts.jsx'>COLD CUTS
                                    </Link>
                                </li>
                                <li className="nav-item menu-click">
                                    <Link className="nav-link" to='/ReadytoCook.jsx'>READY TO COOK
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <Link className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ALL
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link to='/chicken.jsx' className="dropdown-item">CHICKEN</Link></li>
                                            <li><Link to='/SeaFood.jsx' className="dropdown-item">SEA FOOD</Link></li>
                                            <li><Link to='/Egg.jsx' className="dropdown-item">EGG</Link></li>
                                            <li><Link to='/Mutton.jsx' className="dropdown-item">MUTTON</Link></li>
                                            <li><Link to='/Prawns.jsx' className="dropdown-item">PRAWNS & CRABS</Link></li>
                                            <li><Link to='/ColdCut.jsx' className="dropdown-item">COLD CUTS</Link></li>
                                            <li><Link to='/ReadyToCook.jsx' className="dropdown-item">READY TO COOK</Link></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 mx-5 px-5 mb-4">
                {/* Conditionally render SearchProduct component */}
                {searchResults.length > 0 && <SearchProduct searchResults={searchResults} />}
            </div>
            <div className="container mb-5" id={styles.carttable}>
                <div className="row">
                    <table className="table text-center">
                        <thead className="border">
                            <tr>
                                <th style={{ border: '1px solid black' }}>Product Title</th>
                                <th style={{ border: '1px solid black' }}>Product Image</th>
                                <th style={{ border: '1px solid black' }}>Quantity</th>
                                <th style={{ border: '1px solid black' }}>Total Price</th>
                                <th style={{ border: '1px solid black' }}>Remove</th>
                                <th style={{ border: '1px solid black' }}>Operations</th>
                            </tr>
                        </thead>
                        <tbody className="border">
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ border: '1px solid black' }}>{item.Title}</td>
                                    <td style={{ border: '1px solid black' }}><img src={item.img} alt="" className="w-50 h-50 rounded-circle" /></td>
                                    <td style={{ border: '1px solid black' }}><input type="number" className="form-control text-center border-0 rounded text-right bg-light p-3 mx-3" style={{ height: '10px', width: '80px' }} value={item.quantity || 1} onChange={(e) => handleQuantityChange(e, index)} /></td>
                                    <td style={{ border: '1px solid black' }}><input type="text" className="w-75 bg-light fw-bold text-center" value={item.quantity * item.Price} readOnly style={{ fontSize: '13px', outline: 'none', border: 'none' }} /></td>
                                    <td style={{ border: '1px solid black' }}><input type="checkbox" className="form-check-input bg-warning border-warning w-25" value="remove" name="remove" onChange={() => handleCheckboxChange(index)} checked /></td>
                                    <td style={{ border: '1px solid black' }}>
                                        <button className="btn bg-warning w-50 text-white" onClick={() => update(index)}>UPDATE</button>
                                        <button className="btn bg-warning w-50 text-white mx-1 mt-2" onClick={() => remove(index)}>REMOVE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <span style={{ display: 'none' }} id="totalprice"> The Total Price is ₹{totalPrice} /-</span>
                </div>
            </div>
            <div className="container mt-5" id={styles.footermainwrapper} >
                <div className="row">
                    <div className="col-md-3">
                        <div className="mx-5">
                            <div className="line">
                                <img className="w-75" src={Logo} />
                                <div className={`mt-2 mx-0`}>
                                    <a href="#"><img src={GoogleApp} className="mt-1 mx-1" alt="logo" width="80" height="30" /></a>
                                    <a href="#"><img src={AppleStore} className="mt-1 mx-1" alt="logo" width="80" height="30" /></a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 mt-1 justify-content-center align-items-center text-left">
                        <div className={styles.widgettitle}>
                            <div className="link-page justify-content-center">

                                <ul className=" text-left mt-2">
                                    <h4 className="">Quick Links</h4>
                                    <li>
                                        <a href="#" className="text-decoration-none text-dark">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="blog-right-sidebar.html" className="text-decoration-none text-dark">Blog</a>
                                    </li>
                                    <li>
                                        <a href="blog-single-left-sidebar.html" className="text-decoration-none text-dark">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="blog-single-right-sidebar.html" className="text-decoration-none text-dark">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="privacy.html" className="text-decoration-none text-dark">Refund Policy</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-1" id={styles.card}>
                        <div className="text-left" id={styles.link}>
                            <span className="fw-bold">Contact Us</span>
                            <h6 className="mt-1 text-dark">+91 63810 05442</h6>
                            <a href="mailto:customercare@deliuara.com" className="text-center text-decoration-none text-dark">customercare@deliaura.com</a>
                        </div>
                    </div>
                    <div className="col-md-3 mt-1" id={styles.card}>
                        <div className="text-left" id={styles.link}>
                            <span className="fw-bold mt-2">Follow Us On</span>
                            <div className="d-flex flex-wrap d-inline text-left" id={styles.imgftr}>
                                <div className="">
                                    <a href="about-us.html"><IoLogoFacebook style={{ fontSize: '20px', color: 'black' }}></IoLogoFacebook></a></div>
                                <div className="mx-1">
                                    <a href="about-us.html"><IoLogoTwitter style={{ fontSize: '20px', color: 'black' }}></IoLogoTwitter></a>
                                </div>
                                <div className="mx-1">
                                    <a href="about-us.html"><IoLogoInstagram style={{ fontSize: '20px', color: 'black' }}></IoLogoInstagram></a>
                                </div>
                                <div className="mx-1">
                                    <a href="about-us.html"><IoLogoYoutube style={{ fontSize: '20px', color: 'black' }}></IoLogoYoutube></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex pt-1 align-items-center justify-content-center" id={styles.footer}>
                            <a className="text-light text-decoration-none">Copyright 2024 © </a>
                            <a href="#" className="text-decoration-none">Deliaura | Meat Shop online | All Rights Reserved</a>
                            <a className="text-light text-decoration-none">Designed By</a>
                            <a href="www.akvtechnologies.com" target="_blank" className="text-decoration-none">AKV Technologies</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faShoppingCart, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "./images/logo1.png"
import GoogleApp from "./images/google-play-badge-logo-png-transparent.png"
import AppleStore from "./images/apple-app-store-logo.jpg"
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
import { Link } from "react-router-dom";
import Slider from "react-slick"
import M1 from "./images/mutton/m1.jpg"
import M2 from "./images/mutton/m2.jpg"
import M3 from "./images/mutton/m3.jpg"
import M4 from "./images/mutton/m4.jpg"
import M5 from "./images/mutton/m5.jpg"
import M6 from "./images/mutton/m6.jpg"
import M7 from "./images/mutton/m7.jpg"
import M8 from "./images/mutton/m8.jpg"
import M9 from "./images/mutton/m9.jpg"
import axios from "axios";
import SearchProduct from "./SearchProduct";

const MuttonCustomize = () => {

    const settings = {
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        speed: 700

    }

    const products = [
        {
          id: '1',
          img: M1,
          dish: 'Cage Free Country Eggs - 12',
          description: 'Eggs from country hens raised cages - Pack of 12 Eggs',
          Title: 'Country Eggs',
          Price: '250/-',
          Dollar: '4,600$'
        },
        {
          id: '2',
          img: M2,
          dish: 'Mud Crab',
          description: 'Three Spotted Crabs that are consistent in size for an even cook.',
          Title: 'Mud Crab',
          Price: '230/-',
          Dollar: '4,600$'
        },
        {
          id: '3',
          img: M3,
          dish: 'Lamb Curry Cut',
          description: 'Perfect balance of fat & meat Weight: 500g | 15-22 pieces | Serves 2-3',
          Title: 'Lamb Curry Cut',
          Price: '570/-',
          Dollar: '4,600$'
        },
        {
          id: '4',
          img: M4,
          dish: 'Pure Goat Mince',
          description: 'Finely ground goat mince for curries, kebabs & more',
          Title: 'Pure Goat Mince',
          Price: '980/-',
          Dollar: '4,600$'
        },
        {
          id: '5',
          img: M5,
          dish: 'Classic Chicken Salami',
          description: 'Sandwiches, salads, canapes, crackers',
          Title: 'Chicken Salami',
          Price: '130/-',
          Dollar: '4,600$'
        },
        {
          id: '6',
          img: M6,
          dish: 'Yummy Chicken Cutlets',
          description: 'Melt in your mouth amazing Chicken Cutlets Weight: 160g | 3-5 pieces | Serves 2',
          Title: 'Chicken Cutlets',
          Price: '250/-',
          Dollar: '4,600$'
        },
        {
          id: '7',
          img: M7,
          dish: 'Chicken Curry Cut - Large Pieces',
          description: 'Bone-in | Large cuts | Curry Cut Weight: 500gms | 6-7 pieces | Serves 2',
          Title: 'Chicken Curry Cut',
          Price: '690/-',
          Dollar: '4,600$'
        },
        {
          id: '8',
          img: M8,
          dish: 'Chicken Liver',
          description: 'Offal Cuts | Cleaned | Fresh Weight: 500gms | 6-7 pieces | Serves 2',
          Title: 'Chicken Liver',
          Price: '560/-',
          Dollar: '4,600$'
        },
        {
          id: '9',
          img: M9,
          dish: 'Mackerel Medium',
          description: 'Premium grade | Whole fish | Gutted Weight: 500gms | 6-7 pieces | Serves 2',
          Title: 'Mackerel Fish',
          Price: '560/-',
          Dollar: '4,600$'
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
            const results = products.filter(product =>
                product.dish.toLowerCase().includes(term) ||
                product.Title.toLowerCase().includes(term)
            );
            setSearchResults(results);
        }
    };

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

    const [showLinks, setShowLinks] = useState(false);
    const [showContacts, setShowContacts] = useState(false);
    const [showFollows, setShowFollows] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    const toggleContacts = () => {
        setShowContacts(!showContacts);
    };
    const toggleFollows = () => {
        setShowFollows(!showFollows);
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
    

    const [quantity, setQuantity] = useState(1); // Initialize quantity state with 1

    // Function to handle incrementing the quantity
    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Function to handle decrementing the quantity
    const decrementQuantity = () => {
        if (quantity > 1) { // Ensure quantity doesn't go below 1
            setQuantity(prevQuantity => prevQuantity - 1);
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
                                    <Link className="nav-link" to='/ColdCut.jsx'>COLD CUTS
                                    </Link>
                                </li>
                                <li className="nav-item menu-click">
                                    <Link className="nav-link" to='/ReadyToCook.jsx'>READY TO COOK
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

            <div style={{ clear: 'both' }}></div>
            <div class="container">
                <div aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link className="text-decoration-none text-dark mx-2" to='/'>HOME</Link></li>
                        <li class="breadcrumb-item active" aria-current="page"><Link className="text-decoration-none text-dark" to='/Mutton.jsx'>MUTTON</Link></li>
                        <li class="breadcrumb-item active" aria-current="page"><Link className="text-decoration-none text-dark">PURE GOAT MINCE</Link></li>

                    </ol>
                </div>
            </div>

            <div className="mt-2 mx-5 px-5">
                {/* Conditionally render SearchProduct component */}
                {searchResults.length > 0 && <SearchProduct searchResults={searchResults} />}
            </div>


            <div className="container" id={styles.customizeimg}>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="border rounded">
                            <a href="#">
                                <img src={M2} className="img-responsive rounded w-100" alt="Image" id={styles.cart_image} />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <h6 className="fw-semibold mb-1" id={styles.cart_item}>Chicken With Bones-500gms</h6>
                        <a href="#" class="text-decoration-none text-dark mb-2" ><span id={styles.rate}>₹350 Per Pack <span style={{ textDecoration: 'line-through' }} class="px-2">₹399</span></span></a>
                        <div class="mt-2 fw-bold fs-7" id={styles.totalprice}>(Total Price:238)</div>
                        <div className="mt-2">
                            <button class="bg-warning rounded text-white fw-bolder" id={styles.inc} onClick={decrementQuantity}>-</button>
                            <input type="text" className="text-center text-dark fw-bold border-0 mx-2" value={quantity} readOnly />
                            <button class="bg-warning rounded text-white fw-bolder" id={styles.dec} onClick={incrementQuantity}>+</button>
                        </div>
                        <Link class=" btn btn-sm btn-warning text-white mt-2" id={styles.addtocart} data-bs-toggle="modal" data-bs-target="#exampleModal" >ADD TO CART</Link>


                        <p className="fw-bold mt-2">Storage Insturctions:
                            <p className="fs-7 fw-normal">Store Under Refrigeration at 4*C or below in Hygenic</p>
                        </p>

                        <div class="mt-1"><p className="fw-bold">Marketed By:
                            <p className="fs-7 mt-1 fw-normal">Deliaura Private Limited No.201, 2nd floor, Carlton
                                Towers No.1, Old airport road, Bhubaneshwar, Orrisa
                                560000
                            </p></p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal  */}
            <div className="modal fade" style={{ fontSize: '14px' }} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title text-center mx-5 px-4 fw-bold">
                                Accomplishments For Chicken (Optional)
                            </h6>
                            <button type="button" className="btn-close btn text-dark btn-warning" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" >
                            <table className="table text-center" id={styles.extra}>
                                <tr className="bg-light p-2">
                                    <td> <img src={M1} className={`${styles.extraimg}`} alt="" /> </td>
                                    <td> Chicken Wings </td>
                                    <td> ₹400 </td>
                                    <td> <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option1" /> </td>
                                </tr>
                                <tr className=" p-2">
                                    <td> <img src={M1} className={`${styles.extraimg}`} alt="" /> </td>
                                    <td> Chicken Wings </td>
                                    <td> ₹400 </td>
                                    <td> <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option2"/> </td>
                                </tr>
                                <tr className="bg-light p-2">
                                    <td> <img src={M1} className={`${styles.extraimg}`} alt="" /> </td>
                                    <td> Chicken Wings </td>
                                    <td> ₹400 </td>
                                    <td> <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option3"/> </td>
                                </tr>
                                <tr className=" p-2">
                                    <td> <img src={M1} className={`${styles.extraimg}`} alt="" /> </td>
                                    <td> Chicken Wings </td>
                                    <td> ₹400 </td>
                                    <td> <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option4"/> </td>
                                </tr>
                                <tr className="bg-light p-2">
                                    <td> <img src={M1} className={`${styles.extraimg}`} alt="" /> </td>
                                    <td> Chicken Wings </td>
                                    <td> ₹400 </td>
                                    <td> <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option5"/> </td>
                                </tr>
                                <tr className="p-2">
                                    <td> <img src={M1} className={`${styles.extraimg}`} alt="" /> </td>
                                    <td> Chicken Wings </td>
                                    <td> ₹400 </td>
                                    <td> <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" value="option6" /> </td>
                                </tr>
                                <tr className="p-1">
                                    <td colSpan={4} className="text-center">
                                        <Link to='/ProceedPay.jsx' type="button" className="btn bg-warning text-white mt-1" id={styles.totalwextra}> PROCEED WITH PAYMENT</Link>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mb-5 mt-4">
                <h6 className="fw-bold">Related products</h6>
                <div className={`${styles.slickslider}`}>
                    <Slider {...settings} className="mt-4">
                        <div className={`card shadow ${styles.card} border-0`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={M1} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Premium Grade | Gutted | Whole Fish</h6>
                                <p>Premium Mackerel (Bangda/Kanangeluthi/Kanakatha/Ayala) Small - Whole, Cleaned</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹199 </p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark">
                                        Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={M2} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Premium grade | Whole fish | Gutted</h6>
                                <p>Mackerel (Bangda/Kanangeluthi/Kanakatha/Ayala)Medium - Whole Cleaned & Gutted</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹169</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark">
                                        Add to cart</a>
                                </div>
                            </div>
                        </div >

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={M3} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Kane/Poovan | Seawater Fish | Gutted | Whole Fish</h6>
                                <p>Lady Fish (Kane/Kilangan/Poovan) Small - Whole, Cleaned</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹305</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark">Add to cart</a>
                                </div>
                            </div>
                        </div >

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={M4} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Cleaned | Whole Fish
                                </h6>
                                <p>Lady Fish Small - Whole, Cleaned (Mini Pack)</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹169</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark"> Add to cart</a>
                                </div>
                            </div>
                        </div>

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={M5} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Squid </h6>
                                <p>Squid (Bandase/Kanava/Oosi Kanawa/Kanavai/ koonthal) - Rings </p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹169</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark"> Add to cart</a>
                                </div>
                            </div>
                        </div>

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={M6} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Seafood | Sliced rings | Cleaned</h6>
                                <p>Indian Salmon (Rawas/Gurjali) Medium - Fry Cut</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹169</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark"> Add to cart</a>
                                </div>
                            </div>
                        </div>

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={M7} className="img-fluid w-100 rounded-top bg-light" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">With Tail | Deveined | Large Sized</h6>
                                <p>Tiger Prawns / Choodan Chemmeen Extra Large - Cleaned & Deviened, With Tail</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹355</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark"> Add to cart</a>
                                </div>
                            </div>
                        </div>

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={M8} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Surmai | Cubes | boneless</h6>
                                <p>Seer (Anjal/Vanjaram/Neyi Meen) - Boneless Cubes </p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹315</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark"> Add to cart</a>
                                </div>
                            </div>
                        </div>

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={M9} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">Whole | Seawater Fish | Gutted</h6>
                                <p>White Pomfret Vellai Vaaval / Machan  Extra Small - Whole, Cleaned & Gutted</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹109</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark"> Add to cart</a>
                                </div>
                            </div>
                        </div>

                        <div className={`card shadow ${styles.card}`}>
                            <div className="vesitable-img" style={{ width: '100%' }}>
                                <img src={M2} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                            <div className=" btn btn-success text-white bg-offer px-3 py-1 rounded position-absolute" style={{ top: '10px', right: '10px' }}>30% Protein</div>
                            <div className="p-4 pb-0 rounded-bottom">
                                <h6 id="product-title1">With Tail | Deveined | Large Sized</h6>
                                <p>Malabar Tongue Sole (Nangu/Naaku Meen/Virahi/Manthal) Medium - Whole, Cleaned With Head</p>
                                <div className="d-flex justify-content-between flex-lg-wrap">
                                    <p className="text-dark fs-5 fw-bold">₹305</p>
                                    <a href="#" className="btn btn-shop btn border border-secondary rounded-pill px-3 py-1 mb-4 text-dark"> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </Slider >
                </div>
            </div >
            <div className="container mt-5" id={styles.footermainwrapper}>
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

export default MuttonCustomize;
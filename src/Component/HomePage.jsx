import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner1 from "./images/banner01.jpg"
import Banner2 from "./images/banner02.jpg"
import Banner3 from "./images/banner03.jpg"
import Banner4 from "./images/banner04.jpg"
import Banner5 from "./images/banner05.jpg"
import Chicku3 from "./images/Chicken/chiku3.jpeg"
import Chicku7 from "./images/Chicken/chiku7.jpg"
import Chicku5 from "./images/Chicken/chiku5.jpg"
import M6 from "./images/mutton/m6.jpg"
import M4 from "./images/mutton/m4.jpg"
import Egg8 from "./images/egg/egg-8.jpg"
import Egg6 from "./images/egg/egg-6.jpg"
import C2 from "./images/coldcut/c2.jpg"
import C1 from "./images/coldcut/c1.jpg"
import P5 from "./images/prawnsandcrabs/p5.jpg"
import P12 from "./images/prawnsandcrabs/p12.jpg"
import R4 from "./images/readytocook/r4.jpg"
import R1 from "./images/readytocook/r1.jpg"
import F3 from "./images/Fish/fish3.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faLocation, faPhone, faRightFromBracket, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "./images/logo1.png"
import GoogleApp from "./images/google-play-badge-logo-png-transparent.png"
import AppleStore from "./images/apple-app-store-logo.jpg"
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
import Chicken1 from "./images/chicken 1.jpg"
import Fish1 from "./images/fish 1.jpg"
import Prawns from "./images/prawnsandcrabs.jpg"
import Egg1 from "./images/egg 1.jpg"
import Mutton from "./images/mutton.jpg"
import Crabs from "./images/crabs.jpg"
import ColdCuts from "./images/coldcuts.jpg"
import ReadyToCook from "./images/readytocook.jpg"
import { Link } from "react-router-dom";
import SearchProduct from "./SearchProduct";
import Chicku4 from "./images/Chicken/chiku4.jpg"
import Chicku6 from "./images/Chicken/chiku6.jpg"
import Chicku2 from "./images/Chicken/chiku2.jpg"
import Chicku1 from "./images/Chicken/chiku1.jpg"
import Chicku8 from "./images/Chicken/chiku8.jpg"
import Chicku9 from "./images/Chicken/chiku9.jpg"
import Chicku10 from "./images/Chicken/chiku10.jpg"
import Chicku11 from "./images/Chicken/chiku11.jpg"
import Chicku12 from "./images/Chicken/chiku12.jpg"
import axios from "axios";



const HomePage = () => {


    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(prevCount => prevCount + 1);
    };


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

    const [locationDetails, setLocationDetails] = useState(null);

    useEffect(() => {
      const fetchLocation = async () => {
        try {
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
  
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=en`
              );
              const data = await response.json();
  
              // Extracting address components
              const address = data.address;
              const area = address.suburb || address.hamlet || address.area || address.urban;
              const city = address.city_district || address.state_district;
              const state = address.state || address.region;
              const pincode = address.postcode;
  
              // Constructing location details string
              const locationDetails = `${area}, ${city}, ${state}, ${pincode}`;
              setLocationDetails(locationDetails);
            //   console.log(area, city, state)
  
              // Call API with location details
              await callLocationAPI(area, city, state, pincode);
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
  
    const callLocationAPI = async (area, city, state, pincode) => {
      try {
        const response = await fetch("http://10.10.238.199:3000/currentlocation/currentlocation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            area: area,
            city: city,
            state: state,
            pincode: pincode,
          }),
        });
  
        // Handle response from API if necessary
      } catch (error) {
        console.error("Error calling location API:", error);
      }
    };

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
                const response = await axios.post('http://10.10.238.199:3000/login/logout', { phoneNumber: phoneNumberFromverify })
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
            <div className={`container-fluid bg-dark d-md-block d-none`} id={styles.navbar}>
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
                                <sup className="mt-1 fw-bold">{cartCount}</sup> cart
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id={styles.border} className={`${styles.navbar1} bg-white d-block d-md-none`}>
                <div className="container-fluid" id={styles.logo}>
                    <div className="row">
                        <div className="col-md-12">
                            <button type="button" className="btn text-left" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <div className="text-left">
                                    <FontAwesomeIcon className="mx-2 text" icon={faLocation} />
                                    <Link to='/' className="mx-2 text-decoration-none fs-6 text-dark fw-bold">
                                        Home
                                    </Link>
                                    <FontAwesomeIcon className="mx-2 text" icon={faAngleDown} />
                                </div>
                                {/* <div id={styles.locationselect} style={{ fontSize: '13px' }} className="text-dark rounded" value={locationDetails || ''} disabled>
                                    {locationDetails ? locationDetails : 'Fetching location...'}
                                </div> */}
                            </button>
                        </div>
                        <div className="col-md-4 d-inline d-md-block d-none">
                            {/* <select id={styles.locationselect} className="text-dark rounded" value={locationDetails || ''} disabled>
                                <option value="">{locationDetails ? locationDetails : 'Fetching location...'}</option>
                            </select> */}
                        </div>
                        <div className="col-md-3 d-md-block d-none">
                            <form action="search_product.php" method="get" className=" d-flex form-group">
                                <input type="text" className="form-control w-50 px-2" placeholder="Search" name="search_data" aria-label="Search" id={styles.searchbox} />
                                <a type="submit" className="btn btn-outline-success mx-1 p-1" name="search_data_product" value="search" id={styles.search} >Search</a>
                            </form>
                        </div>
                        <div className="col-md-4 d-flex d-md-block d-none" id={styles.profilesignin}>
                            <Link to='/Profile.jsx' className="text-decoration-none d-flex mx-5 text-dark"> <FontAwesomeIcon icon={faUser} className="mx-1 w-25"></FontAwesomeIcon>
                                Profile</Link>

                            <Link to='/Cart.jsx' className="text-decoration-none text-dark">
                                <FontAwesomeIcon icon={faShoppingCart} className="w-50"></FontAwesomeIcon>
                                cart</Link>
                        </div>
                    </div>
                </div>
            </section >
            <div className={`container bg-white mt-2 d-md-block d-none ${styles.navbar2}`} id={styles.categories}>
                <div className="row">
                    <div className="col-md-12 d-flex">
                        <Link to='/chicken.jsx' className="nav-link">CHICKEN</Link>
                        <div className="dropdown mx-2">
                            <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">SEA FOOD</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" id={styles.underseafood}>
                                <li><Link to='/SeaFood.jsx' className="dropdown-item">SEA FOOD</Link></li>
                                <li><Link to='/Prawns.jsx' className="dropdown-item">PRAWNS AND CRABS</Link></li>
                            </ul>
                        </div>
                        <Link to='/Egg.jsx' className="nav-link mx-2">EGG</Link>
                        <Link className="nav-link mx-2" to='/Mutton.jsx'>MUTTON</Link>
                        <Link className="nav-link mx-2" to='/ColdCut.jsx'>COLD CUTS</Link>
                        <Link className="nav-link mx-2" to='/ReadyToCook.jsx'>READY TO COOK</Link>
                        <div className="dropdown mx-2">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">ALL</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to='/chicken.jsx' className="dropdown-item">CHICKEN</Link></li>
                                <li><Link to='/SeaFood.jsx' className="dropdown-item">SEA FOOD</Link></li>
                                <li><Link to='/Egg.jsx' className="dropdown-item">EGG</Link></li>
                                <li><Link to='/Mutton.jsx' className="dropdown-item">MUTTON</Link></li>
                                <li><Link to='/Prawns.jsx' className="dropdown-item">PRAWNS & CRABS</Link></li>
                                <li><Link to='/ColdCut.jsx' className="dropdown-item">COLD CUTS</Link></li>
                                <li><Link to='/ReadyToCook.jsx' className="dropdown-item">READY TO COOK</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 mx-5 px-5">
                {/* Conditionally render SearchProduct component */}
                {searchResults.length > 0 && <SearchProduct searchResults={searchResults} />}
            </div>
            <div className="ptb-0 mt-3" id={[styles.index1, styles.float_left]}>
                <div className="container-fluid p-0">
                    <div className="slider-caption wow fadeInUp" data-wow-delay="0.1s" id={styles.slider}>
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner p-0">
                                <div className="carousel-item active">
                                    <img src={Banner1} className="d-block w-100 h-25" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Banner2} className="d-block w-100 h-25" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Banner3} className="d-block w-100 h-25" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Banner4} className="d-block w-100 h-25" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Banner5} className="d-block w-100 h-25" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-md-block d-none mt-2">
                <div className="row">
                    <div className="col-md-12 d-flex mt-2">
                        <p id={styles.shopbycategories}>Shop By Categories</p>
                        <div className="dropdown mx-3">
                            <Link id={styles.viewall} className="bg-warning text-center rounded text-decoration-none text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                VIEW ALL
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
                    </div>
                </div>
                <div className="row" id={styles.itemsselected}>
                    <table className="table">
                        <tr>
                            <td>
                                <Link to='/chicken.jsx'>
                                    <img src={Chicken1} alt="" className="img-fluid" />

                                </Link>
                                <p className="mx-3">Chicken</p>
                            </td>
                            <td>
                                <Link to='/SeaFood.jsx'>
                                    <img src={Fish1} alt="" className="img-fluid" />

                                </Link>
                                <p className="mx-4">Fish</p>
                            </td>
                            <td>
                                <Link to='/Prawns.jsx'>
                                    <img src={Prawns} alt="" className="img-fluid" />

                                </Link>
                                <p className="mx-3">Prawns</p>
                            </td>
                            <td>
                                <Link to='/Mutton.jsx'>
                                    <img src={Mutton} alt="" className="img-fluid" />

                                </Link>
                                <p className="mx-3">Mutton</p>
                            </td>
                            <td>
                                <Link to='/Prawns.jsx'>
                                    <img src={Crabs} alt="" className="img-fluid" />

                                </Link>
                                <p className="mx-3">Crabs</p>
                            </td>
                            <td>
                                <Link to='/Egg.jsx'>
                                    <img src={Egg1} alt="" className="img-fluid" />

                                </Link>
                                <p className="mx-4">Egg</p>
                            </td>
                            <td>
                                <Link to='/ReadyToCook.jsx'>
                                    <img src={ReadyToCook} alt="" className="img-fluid" />
                                </Link>
                                <p>Ready To Cook</p>
                            </td>
                            <td>
                                <Link to='/coldcut.jsx'>
                                    <img src={ColdCuts} alt="" className="img-fluid" />

                                </Link>
                                <p className="mx-2">Cold Cuts</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <p id={styles.shopbycategories}>Selected Products</p>
                    </div>
                </div>
            </div>
            <div id="carouselExampleControls2" className="carousel slide d-md-block d-none" data-bs-ride="carousel">
                <div className="carousel-inner container" id={styles.selectedproducts}>
                    <div className="carousel-item active " interval={10}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={Chicku3} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Chicken Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹275</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={Chicku7} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Chicken Mince</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹575</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={M6} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Goat Shoulder Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={M6} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Goat Shoulder Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={Chicku3} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Chicken Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹275</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={Chicku7} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Chicken Mince</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹575</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={M6} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Goat Shoulder Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={M6} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Goat Shoulder Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={Chicku3} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Chicken Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹275</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={Chicku7} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Chicken Mince</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹575</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={M6} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Goat Shoulder Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={M6} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Goat Shoulder Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                </button>
            </div>
            <div id="carouselExampleControls2" className="carousel slide d-block d-md-none" data-bs-ride="carousel">
                <div className="carousel-inner" id={styles.selectedproducts}>
                    <div className="carousel-item active" interval={10}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={Chicku3} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Chicken Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹275</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={Chicku7} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Chicken Mince</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹575</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={M6} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Goat Shoulder Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={M6} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Goat Shoulder Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={Chicku3} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Chicken Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹275</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={Chicku7} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Chicken Mince</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹575</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={M6} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Goat Shoulder Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={M6} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Goat Shoulder Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card shadow" id={styles.carouselwidth}>
                                        <img src={Chicku3} className="card-img-top rounded" alt="..." />
                                        <div className="card-body">
                                            <h5 className="">Chicken Curry</h5>
                                            <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                            <p className="text-dark fw-bold"><small id={styles.rupees}> ₹275</small></p>
                                            <button className="btn btn-borderless px-2">SHOP</button>
                                            <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container"></div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card shadow" id={styles.carouselwidth}>
                                    <img src={Chicku7} className="card-img-top rounded" alt="..." />
                                    <div className="card-body">
                                        <h5 className="">Chicken Mince</h5>
                                        <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                        <p className="text-dark fw-bold"><small id={styles.rupees}> ₹575</small></p>
                                        <button className="btn btn-borderless px-2">SHOP</button>
                                        <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card shadow" id={styles.carouselwidth}>
                                    <img src={M6} className="card-img-top rounded" alt="..." />
                                    <div className="card-body">
                                        <h5 className="">Goat Shoulder Curry</h5>
                                        <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                        <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                        <button className="btn btn-borderless px-2">SHOP</button>
                                        <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card shadow" id={styles.carouselwidth}>
                                    <img src={M6} className="card-img-top rounded" alt="..." />
                                    <div className="card-body">
                                        <h5 className="">Goat Shoulder Curry</h5>
                                        <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                        <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                        <button className="btn btn-borderless px-2">SHOP</button>
                                        <button className="btn btn-borderless mx-1 px-2">KNOW MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                </button>
            </div >
            <div className="container mt-4" id={styles.deliauraspecials}>
                <div className="heading-title about-text float_left d-grid  gap-2 d-sm-flex justify-content-sm-start mt-1">
                    <h1 className="title" id={styles.shopbycategories}>Deliaura Specilals (Offers Available)</h1>
                </div>
                <div className="row mt-3">
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={Egg6} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Brown Eggs - Pack of 12</a>
                            <p className="product-text" id={styles.productdescription}>Brown Shelled Eggs | Pale Yellow Yolk Weight: 500gms | 6-7 pieces | Serves 2</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Eggs</p>
                            <div className="d-grid mt-1 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>450/- <strike id={styles.lowprice}> 4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4" >Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={P12} alt="Mud Crab" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Mud Crab</a>
                            <p className="product-text" id={styles.productdescription}>Three Spotted Crabs that are consistent in size for an even cook. </p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Mud Crab</p>
                            <div className="d-grid mt-1 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>230/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={M6} alt="Lamb Curry Cut" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Lamb Curry Cut</a>
                            <p className="product-text" id={styles.productdescription}>Perfect balance of fat &amp; meat Weight: 500g | 15-22 pieces | Serves 2-3</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Lamb Curry Cut</p>
                            <div className="d-grid mt-1 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>570/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={M4} alt="Pure Goat Mince" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Pure Goat Mince</a>
                            <p className="product-text" id={styles.productdescription}>Finely ground goat mince for curries,kebabs &amp; more</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Pure Goat Mince</p>
                            <div className="d-grid mt-3 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>980/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={C2} alt="Classic Chicken Salami" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Classic Chicken Salami</a>
                            <p className="product-text" id={styles.productdescription}>dgcfvhbjnkm, fcvghbjnkml,Sandwiches, salads, canapes, crackers</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Chicken Salami</p>
                            <div className="d-grid mt-3 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>130/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={R1} alt="Yummy Chicken Cutlets" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Yummy Chicken Cutlets</a>
                            <p className="product-text" id={styles.productdescription}>Melt in your mouth amazing Chicken Cutlets Weight: 160g | 3-5 pieces | Serves 2</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Chicken Cutlets</p>
                            <div className="d-grid mt-3 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>250/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={Chicku5} alt="Chicken Curry Cut - Large Pieces" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Chicken Curry Cut - Pieces</a>
                            <p className="product-text" id={styles.productdescription}>Bone-in | Large cuts | Curry Cut Weight: 500gms | 6-7 pieces | Serves 2</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Chicken Curry Cut </p>
                            <div className="d-grid mt-3 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>690/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={Chicku7} alt="Chicken Liver" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Chicken Liver</a>
                            <p className="product-text" id={styles.productdescription}>Offal Cuts | Cleaned | Fresh Weight: 500gms | 6-7 pieces | Serves 2</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Chicken Liver</p>
                            <div className="d-grid mt-3 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>560/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={F3} alt="Mackerel Medium" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Mackerel Medium</a>
                            <p className="product-text" id={styles.productdescription}>Premium grade | Whole fish | Gutted Weight: 500gms | 6-7 pieces | Serves 2</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Mackerel Fish</p>
                            <div className="d-grid mt-3 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>560/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={Egg6} alt="Cage Free Country Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Cage Free Country </a>
                            <p className="product-text" id={styles.productdescription}>Eggs from country hens raised outside cages - Pack of 12 Eggs</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Country Eggs</p>
                            <div className="d-grid mt-3 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>250/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={R4} alt="Chicken Cutlet" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Chicken Cutlet</a>
                            <p className="product-text" id={styles.productdescription}>Succulent, fragrant cutlets for tasty filling meals Weight: 320g | 7-8 pieces | Serves 4 </p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Cutlet</p>
                            <div className="d-grid mt-3 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>750/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={Egg8} alt="Farm Fresh Classic Eggs - Pack of 6" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Farm Fresh Classic Eggs</a>
                            <p className="product-text" id={styles.productdescription}>White Shelled Eggs | Pale Yellow Yolk  Weight: 500gms | 6-7 pieces | Serves 2</p>
                            <p className="p-1 text-center" id={styles.offerproductname}> Classic Eggs</p>
                            <div className="d-grid mt-3 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>140/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white text-right mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={P5} alt="White Prawns / Naaran / Jhinga " className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">White Prawns / Naaran </a>
                            <p className="product-text" id={styles.productdescription}>White shrimp is one of the most widely sold item in the sea food industry. </p>
                            <p className="p-1 text-center" id={styles.offerproductname}>White Prawns / Naaran</p>
                            <div className="d-grid mt-3 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>380/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={C1} alt="Merguez Lamb Sausage" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Merguez Lamb Sausage</a>
                            <p className="product-text" id={styles.productdescription}>Merguez Lamb Sausages yeild Weight (220g)</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Merguez Lamb Sausage</p>
                            <div className="d-grid mt-3 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>135/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={P12} alt="Mud Crab(Nandu/Kakda/Seru nandu/Njand)" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Mud Crab Nandu/Kakda</a>
                            <p className="product-text" id={styles.productdescription}>Also called Nandu Weight: 500g | 2-4 pieces | Serves 2</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Mud Crab</p>
                            <div className="d-grid mt-3 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>670/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={P12} alt="Mud Crab(Nandu/Kakda/Seru nandu/Njand)" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">Mud Crab Nandu/Kakda/</a>
                            <p className="product-text" id={styles.productdescription}>Also called Nandu Weight: 500g | 2-4 pieces | Serves 2</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>Mud Crab</p>
                            <div className="d-grid mt-3 gap-2 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0 pt-2"><span className="product-price" id={styles.originalprice}>670/- <strike id={styles.lowprice}>4,600$</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <a href="index.php?add_to_cart=29" id={styles.button} className="btn text-white col-md-4">Add Cart</a>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div >
                    <div className="text-center mt-5">
                        <Link to='/All.jsx' className="btn rounded text-white px-2" id={styles.button}>View All</Link>
                    </div>
                </div >
            </div >
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h5 id={styles.shopbycategories}>Day Light Specials</h5>
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner p-1" id={styles.outercarousel}>
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={Chicku3} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Chicken Curry Cut</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹275</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={Chicku7} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Chicken Mince</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹575</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={M6} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Goat Shoulder Curry</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={M6} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Goat Shoulder Curry</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={Chicku3} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Chicken Curry Cut</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹275</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={Chicku7} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Chicken Mince</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹575</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={M6} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Goat Shoulder Curry</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={M6} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Goat Shoulder Curry</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={Chicku3} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Chicken Curry</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹275</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={Chicku7} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Chicken Mince</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹575</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={M6} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Goat Shoulder Curry</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={M6} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Goat Shoulder Curry</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={Chicku3} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Chicken Curry</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹275</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={Chicku7} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Chicken Mince</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹575</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={M6} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Goat Shoulder Curry</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card shadow" id={styles.carouselwidth}>
                                                <img src={M6} className="card-img-top rounded" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="">Goat Shoulder Curry</h5>
                                                    <p className="text-dark">Weight: 500gms | 6-7 pieces | Serves 2</p>
                                                    <p className="text-dark fw-bold"><small id={styles.rupees}> ₹815</small></p>
                                                    <button className="btn btn-borderless" onClick={handleAddToCart}>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3" id={styles.aboutdeliaura}>
                <div className="row">
                    <div className="col-lg-12 ptb-0">
                        <h7 className="fw-bold">Deliaura: Your Ultimate Destination for Fresh Meat and Online Meat Delivery</h7>
                        <p className="mb-4">In the age of digital convenience, the way we shop for groceries and food has evolved significantly. One of the most significant advancements in this regard is the ability to order fresh meat online. FreshToHome has emerged as a game-changer in the world of online meat delivery, offering not only convenience but also quality that's second to none. Let’s delve into why FreshToHome is the top choice for those seeking fresh meat and online meat delivery.</p>
                        <h7 className="fw-bold">Fresh Meat: A Cut Above the Rest</h7>
                        <p>When it comes to fresh meat, quality is non-negotiable. FreshToHome understands this better than anyone else. Our commitment to delivering the freshest meat possible is evident in every aspect of our service. Whether you're looking for succulent chicken, tender mutton, or the freshest fish, FreshToHome has got you covered. Any specific or particular cut you want for any recipe, we got it all.</p>
                        <h7 className="fw-bold">Fresh Meat: A Cut Above the Rest</h7>
                        <p className="mb-4">When it comes to fresh meat, quality is non-negotiable. FreshToHome understands this better than anyone else. Our commitment to delivering the freshest meat possible is evident in every aspect of our service. Whether you're looking for succulent chicken, tender mutton, or the freshest fish, FreshToHome has got you covered. Any specific or particular cut you want for any recipe, we got it all.</p>

                        <h7 className="fw-bold">The Heart of Our Business: Fresh Meat & Seafood</h7>
                        <p className="mb-4">At FreshToHome, we believe that the heart of a delicious meal is fresh, high-quality meat. That's why we source our meat from dedicated farmers and small boat fishermen who adhere to the highest standards of hygiene and quality. Our rigorous quality checks ensure that you receive nothing but the best.</p>

                        <h7 className="fw-bold">Online Meat Delivery: Convenience at Your Doorstep</h7>
                        <p className="mb-4">Gone are the days when you had to make a trip to the local butcher or fish market. With FreshToHome's online meat delivery service, you can order meat online from the comfort of your home. Whether you're a busy professional, a homemaker, or anyone in between, our user-friendly website and app make ordering meat a breeze.</p>

                        <h7 className="fw-bold">Order Meat Online: Simple and Seamless</h7>
                        <p className="mb-4">Ordering meat online from FreshToHome is as easy as 1-2-3. Simply visit our website or download our app, select your preferred cuts of meat, and proceed to checkout. Our secure payment options and reliable delivery ensure that your fresh meat arrives at your doorstep promptly.</p>

                        <h7 className="fw-bold">Meat Delivery: Prompt and Punctual</h7>
                        <p className="mb-4">When you choose FreshToHome for meat delivery, you can expect punctuality. We understand the importance of receiving your order on time, and we take pride in our timely deliveries. Say goodbye to last-minute grocery store runs – FreshToHome has got your back.</p>

                        <h7 className="fw-bold">Online Fresh Meat: For All Your Needs</h7>
                        <p className="mb-4">FreshToHome maintains a wide inventory of fresh meat, ensuring that you can find your favourite cuts whenever you need them. Whether it's chicken, mutton, or fish, we've got your cravings covered.</p>

                    </div>
                </div>
            </div>
            {/* <div className={`container-fluid py-5 ${styles.callnow}`}>
                <div className="row" id={styles.callnowcontent}>
                    <img src={Call} className="img-fluid" alt="" />
                    <div className="col-lg-8 col-md-12 col-sm-6">
                        <h3 className="text-white">Did'nt Find Your Product ?</h3>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className={styles.callsec} id={styles.float_left}>
                            <a className="btn btn-borderless w-100 text-white fw-bold" id={styles.custombtn} href="store.html">Contact Us</a>
                            <h4 className={styles.call}>+91 63810 05442</h4>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container" id={styles.footermainwrapper}>
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
                    <div className="col-md-3 mt-1 justify-content-center d-md-block d-none align-items-center text-left">
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
                    <div className="col-md-3 mt-1 d-block d-md-none d-inline text-left">
                        <div className={styles.widgettitle}>
                            <div className="col-md-6">
                                <div className="d-flex">
                                    <h4 className=" mt-2 mx-4 px-5">QUICK LINKS
                                        <button className="border-0 bg-white fw-bold fs-6 mt-1" onClick={toggleLinks}>
                                            {showLinks ? '⮛' : '⮙'}
                                        </button>
                                    </h4>
                                </div>
                                {showLinks && (
                                    <ul className="mx-5 text-left" style={{ border: 'none', marginLeft: '-30px', marginTop: '-10px' }}>
                                        <li className="">
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
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-1 d-md-block d-none" id={styles.card}>
                        <div className="text-left" id={styles.link}>
                            <span className="fw-bold">Contact Us</span>
                            <h6 className="mt-1 text-dark">+91 63810 05442</h6>
                            <a href="mailto:customercare@deliuara.com" className="text-center text-decoration-none text-dark">customercare@deliaura.com</a>
                        </div>
                    </div>
                    <div className="col-md-3 d-block d-md-none" id={styles.card}>
                        <div className="text-left mx-4 px-5" id={styles.link}>
                            <span className="fw-bold">CONTACT US
                                <button className="border-0 bg-white fw-bold fs-6" onClick={toggleContacts}>
                                    {showContacts ? '⮛' : '⮙'}
                                </button>
                            </span>
                            {showContacts && (
                                <ul className="mt-3" style={{ border: 'none', marginLeft: '-30px', marginTop: '-10px' }}>
                                    <li className=""><h6 className="mt-1 text-dark">+91 63810 05442</h6></li>
                                    <li><a href="mailto:customercare@deliuara.com" className="text-center text-decoration-none text-dark">customercare@deliaura.com</a></li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="col-md-3 mt-1 d-md-block d-none" id={styles.card}>
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
                    <div className="col-md-3 mt-1 d-md-none d-block" id={styles.card}>
                        <div className="text-left d-flex mx-4 px-5" id={styles.link}>
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="d-flex">
                                        <span className="fw-bold mt-2">Follow Us On
                                            <button className="border-0 bg-white fw-bold fs-6" onClick={toggleFollows}>
                                                {showFollows ? '⮛' : '⮙'}
                                            </button>
                                        </span>
                                    </div>
                                    {showFollows && (
                                        <ul className="mt-3" style={{ border: 'none', marginLeft: '-30px', marginTop: '-10px' }}>
                                            <li className="">
                                                <Link className="mx-0"><IoLogoFacebook style={{ fontSize: '20px', color: 'black' }}></IoLogoFacebook></Link>
                                                <Link className="mx-1"><IoLogoTwitter style={{ fontSize: '20px', color: 'black' }}></IoLogoTwitter></Link>
                                                <Link className="mx-1"><IoLogoInstagram style={{ fontSize: '20px', color: 'black' }}></IoLogoInstagram></Link>
                                                <Link className="mx-1"><IoLogoYoutube style={{ fontSize: '20px', color: 'black' }}></IoLogoYoutube></Link>
                                            </li>
                                        </ul>
                                    )}
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
                            <a href="#" className="text-decoration-none d-md-block d-none">Deliaura | Meat Shop online | All Rights Reserved</a>
                            <a className="text-light text-decoration-none d-md-block d-none">Designed By</a>
                            <a href="www.akvtechnologies.com" target="_blank" className="text-decoration-none d-md-block d-none">AKV Technologies</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
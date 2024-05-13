import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faPhone, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "./images/logo1.png"
import GoogleApp from "./images/google-play-badge-logo-png-transparent.png"
import AppleStore from "./images/apple-app-store-logo.jpg"
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
import { Link } from "react-router-dom";
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
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import SearchProduct from "./SearchProduct";

const Mutton = () => {

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

       // Getting data's based on id
    let setData = {}; // Initializing-empty object
    function addCart(count) {
        for (let i = 0; i <=products.length - 1; i++) {
            if (products[i].id == count) {
                setData = products[i];
                break;
            }
        }
        // Sending data's to add cart page
        sessionStorage.setItem('setData', JSON.stringify(setData));
        // window.location.href = "./MuttonAddCart.jsx";
        
    }

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

            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-12 d-flex mx-1">
                        <Link to='/' className="text-decoration-none text-dark">HOME  <FontAwesomeIcon icon={faAngleRight} className="mx-1" style={{fontSize:'12px'}}></FontAwesomeIcon> </Link>
                        <Link to='/Mutton.jsx' className="text-decoration-none text-dark mx-1">MUTTON</Link>
                    </div>
                </div>
            </div>

            <div className="mt-2 mx-5 px-5">
                {/* Conditionally render SearchProduct component */}
                {searchResults.length > 0 && <SearchProduct searchResults={searchResults} />}
            </div>

            <div className="container" id={styles.deliauraspecials}>
                <div className="row mt-3">
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[0].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[0].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[0].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[0].Title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[0].Price} <strike id={styles.lowprice}> {products[0].Dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/MuttonAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('1') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[1].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[1].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[1].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[1].Title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[1].Price} <strike id={styles.lowprice}> {products[1].Dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/MuttonAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('2') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[2].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[2].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[2].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[2].Title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[2].Price} <strike id={styles.lowprice}> {products[2].Dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/MuttonAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('3') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[3].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[3].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[3].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[3].Title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[3].Price} <strike id={styles.lowprice}> {products[3].Dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/MuttonAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('4') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[4].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[4].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[4].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[4].Title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[4].Price} <strike id={styles.lowprice}> {products[4].Dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/MuttonAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('5') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[5].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[5].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[5].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[5].Title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[5].Price} <strike id={styles.lowprice}> {products[5].Dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/MuttonAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('6') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[6].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[6].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[6].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[6].Title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[6].Price} <strike id={styles.lowprice}> {products[6].Dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/MuttonAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('7') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[7].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[7].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[7].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[7].Title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[7].Price} <strike id={styles.lowprice}> {products[7].Dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/MuttonAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('8') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3" id={styles.card}>
                        <div className="product-thumbnail">
                            <a href="javascript:;">
                                <img src={products[8].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="product-single.html" id={styles.producttitle} title="Beef">{products[8].dish}</a>
                            <p className="product-text" id={styles.productdescription}>{products[8].description}</p>
                            <p className="p-1 text-center" id={styles.offerproductname}>{products[8].Title}</p>
                            <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{products[8].Price} <strike id={styles.lowprice}> {products[8].Dollar}</strike></span></a>
                            </div>
                            <div className="mt-2">
                                <Link to='/MuttonAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('9') }}>Add Cart</Link>
                                <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5 mb-5">
                        <a href="#" className="btn rounded text-white px-2" id={styles.button}>View All</a>
                    </div>
                </div >
            </div>
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

export default Mutton
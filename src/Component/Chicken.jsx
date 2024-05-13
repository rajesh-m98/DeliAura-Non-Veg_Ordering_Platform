// import React, { useState, useEffect } from "react";
// import styles from "./styles.module.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown, faAngleRight, faIndianRupeeSign, faPhone, faRupee, faShoppingCart, faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import Logo from "./images/logo1.png"
// import GoogleApp from "./images/google-play-badge-logo-png-transparent.png"
// import AppleStore from "./images/apple-app-store-logo.jpg"
// import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
// import { Link } from "react-router-dom";
// import Google from "./images/google.jpg"
// import Register from "./Register";
// import Chicku3 from "./images/Chicken/chiku3.jpeg"
// import Chicku7 from "./images/Chicken/chiku7.jpg"
// import Chicku5 from "./images/Chicken/chiku5.jpg"
// import Chicku4 from "./images/Chicken/chiku4.jpg"
// import Chicku6 from "./images/Chicken/chiku6.jpg"
// import Chicku2 from "./images/Chicken/chiku2.jpg"
// import Chicku1 from "./images/Chicken/chiku1.jpg"
// import Chicku8 from "./images/Chicken/chiku8.jpg"
// import Chicku9 from "./images/Chicken/chiku9.jpg"
// import Chicku10 from "./images/Chicken/chiku10.jpg"
// import Chicku11 from "./images/Chicken/chiku11.jpg"
// import Chicku12 from "./images/Chicken/chiku12.jpg"
// import axios from "axios";
// import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// import SearchProduct from "./SearchProduct";


// const Chicken = () => {
//     const [locationDetails, setLocationDetails] = useState(null);

//     useEffect(() => {
//         const fetchLocation = async () => {
//             try {
//                 if ("geolocation" in navigator) {
//                     navigator.geolocation.getCurrentPosition(async (position) => {
//                         const latitude = position.coords.latitude;
//                         const longitude = position.coords.longitude;

//                         const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=en`);
//                         const data = await response.json();

//                         // Extracting address components
//                         const address = data.address;
//                         // const doornumber = address.doornumber;
//                         const area = address.suburb || address.hamlet || address.area || address.urban;
//                         const city = address.city_district || address.state_district;
//                         const state = address.state || address.region;
//                         const pincode = address.postcode;

//                         // Constructing location details string
//                         const locationDetails = `${area}, ${city}, ${state}, ${pincode}`;
//                         setLocationDetails(locationDetails);
//                     });
//                 } else {
//                     alert("Geolocation is not supported by this browser.");
//                 }
//             } catch (error) {
//                 console.error("Error fetching location details:", error);
//             }
//         };

//         fetchLocation();
//     }, []);

//     const Chicken = [
//         {
//             id: 1,
//             img: Chicku1,
//             dish: "Brown Eggs - Pack of 12",
//             description: "Brown Shelled Eggs | Pale Yellow Yolk Weight: 500gms | 6-7 pieces | Serves 2",
//             Title: "Eggs",
//             Price: "450/-",
//             Dollar: "4,600$"
//         },
//         {
//             id: 2,
//             img: Chicku2,
//             dish: "Mud Crab",
//             description: "Three Spotted Crabs that are consistent in size for an even cook.",
//             Title: "Mud Crab",
//             Price: "230/-",
//             Dollar: "4,600$"
//         },
//         {
//             id: 3,
//             img: Chicku3,
//             dish: "Lamb Curry Cut",
//             description: "Perfect balance of fat & meat Weight: 500g | 15-22 pieces | Serves 2-3",
//             Title: "Lamb Curry Cut",
//             Price: "570/-",
//             Dollar: "4,600$"
//         },
//         {
//             id: 4,
//             img: Chicku4,
//             dish: "Pure Goat Mince",
//             description: "Finely ground goat mince for curries,kebabs & more",
//             Title: "Pure Goat Mince",
//             Price: "980/-",
//             Dollar: "4,600$"
//         },
//         {
//             id: 5,
//             img: Chicku5,
//             dish: "Classic Chicken Salami",
//             description: "Sandwiches, salads, canapes, crackers",
//             Title: "Chicken Salami",
//             Price: "130/-",
//             Dollar: "4,600$"
//         },
//         {
//             id: 6,
//             img: Chicku6,
//             dish: "Yummy Chicken Cutlets",
//             description: "Melt in your mouth amazing Chicken Cutlets Weight: 160g | 3-5 pieces | Serves 2",
//             Title: "Chicken Cutlets",
//             Price: "250/-",
//             Dollar: "4,600$"
//         },
//         {
//             id: 7,
//             img: Chicku7,
//             dish: "Chicken Curry Cut - Large Pieces",
//             description: "Bone-in | Large cuts | Curry Cut Weight: 500gms | 6-7 pieces | Serves 2",
//             Title: "Chicken Curry Cut",
//             Price: "690/-",
//             Dollar: "4,600$"
//         },
//         {
//             id: 8,
//             img: Chicku8,
//             dish: "Chicken Liver",
//             description: "Offal Cuts | Cleaned | Fresh Weight: 500gms | 6-7 pieces | Serves 2",
//             Title: "Chicken Liver",
//             Price: "560/-",
//             Dollar: "4,600$"
//         },
//         {
//             id: 9,
//             img: Chicku9,
//             dish: "Mackerel Medium",
//             description: "Premium grade | Whole fish | Gutted Weight: 500gms | 6-7 pieces | Serves 2",
//             Title: "Mackerel Fish",
//             Price: "560/-",
//             Dollar: "4,600$"
//         },
//         {
//             id: 10,
//             img: Chicku10,
//             dish: "Cage Free Country Eggs - Pack of 12",
//             description: "Eggs from country hens raised outside cages - Pack of 12 Eggs",
//             Title: "Country Eggs",
//             Price: "250/-",
//             Dollar: "4,600$"
//         },
//         {
//             id: 11,
//             img: Chicku11,
//             dish: "Cage Free Country Eggs - Pack of 12",
//             description: "Eggs from country hens raised outside cages - Pack of 12 Eggs",
//             Title: "Country Eggs",
//             Price: "250/-",
//             Dollar: "4,600$"
//         },
//         {
//             id: 12,
//             img: Chicku12,
//             dish: "Cage Free Country Eggs - Pack of 12",
//             description: "Eggs from country hens raised outside cages - Pack of 12 Eggs",
//             Title: "Country Eggs",
//             Price: "250/-",
//             Dollar: "4,600$"
//         }
//     ];
//     // Getting data's based on id
//     let setData = {}; // Initializing-empty object
//     function addCart(count) {
//         for (let i = 0; i <= Chicken.length - 1; i++) {
//             if (Chicken[i].id == count) {
//                 setData = Chicken[i];
//                 break;
//             }
//         }
//         // Sending data's to add cart page
//         sessionStorage.setItem('setData', JSON.stringify(setData));
//         // window.location.href = "./ChickenAddCart.jsx";

//     }

//     const [counter, setCounter] = useState(0);

//     const handleCartButtonClick = () => {
//         if (counter < Chicken.length) {
//             const currentItem = Chicken[counter];
//             console.log(currentItem.Title);
//             setCounter(prevCounter => prevCounter + 1);
//         } else {
//             console.log("No more items in the cart.");
//         }
//     };

//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState([]);

//     const handleSearch = (e) => {
//         const term = e.target.value.toLowerCase();
//         setSearchTerm(term);
//         if (term.trim() === '') {
//             setSearchResults([]); // Clear search results if search term is empty
//         } else {
//             const results = Chicken.filter(product =>
//                 product.dish.toLowerCase().includes(term) ||
//                 product.Title.toLowerCase().includes(term)
//             );
//             setSearchResults(results);
//         }
//     };

//     const initialFormData = {
//         firstName: "",
//         lastName: "",
//         email: "",
//         subscribe: false,
//         termsAccepted: false,
//       };

//       const [formData, setFormData] = useState(initialFormData);

//     useEffect(() => {
//         // Fetch user data from sessionStorage on component mount
//         const storedFName = sessionStorage.getItem("setFName");
//         const storedLName = sessionStorage.getItem("setLName");
//         const storedEmail = sessionStorage.getItem("setEmail");
//         const storedPhnNumber = sessionStorage.getItem("setPhnNumber");

//         setFormData({
//             firstName: storedFName ? JSON.parse(storedFName) : "",
//             lastName: storedLName ? JSON.parse(storedLName) : "",
//             email: storedEmail ? JSON.parse(storedEmail) : "",
//             phone: storedPhnNumber ? JSON.parse(storedPhnNumber) : "",
//         });
//     }, []);

//     const phoneNumberFromverify = sessionStorage.getItem('phoneNumbers'); // Retrieve phone number from sessionStorage

//     async function logout() {
//         const logoutMessage = `Are you sure you want to log out, ${formData.firstName}?`;

//         if (window.confirm(logoutMessage)) {

//             try {
//                 const response = await axios.post('http://10.10.240.79:3090/user_login/logout', { phoneNumber: phoneNumberFromverify })
//                 alert('Logout Successfully');
//                 setFormData(initialFormData);
//                 sessionStorage.clear();
//             }
//             catch (error) {
//                 console.log(error)
//                 alert('Logged out Failed. Try Again')
//             }
//         }
//     };

//     return (
//         <>
//             <div className="container-fluid bg-dark" id={styles.navbar}>
//                 <div className="row">
//                     <div className="col-md-10">
//                         <div className="contact-details d-flex mt-2 mx-5" id={styles.contact}>
//                             <a href="tel:+917848973214" className="text-warning text-decoration-none">
//                                 <FontAwesomeIcon icon={faPhone} className="text-warning mt-1" style={{ fontSize: '9px' }}></FontAwesomeIcon>7848973214 </a>
//                             <a href="mailto:customercare@deliuara.com" className="text-warning mx-2 text-decoration-none"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '11px' }} className="text-warning"></FontAwesomeIcon>&nbsp;&nbsp;customercare@deliuara.com</a>
//                         </div>
//                     </div>
//                     <div className="col-md-2 d-flex mt-2">
//                         <a href="login.html" className="text-white text-decoration-none"> Why Us |</a>
//                         <a href="login.html" className="text-white text-decoration-none"> Sell With Us |</a>
//                     </div>
//                 </div>
//             </div>
//             <section id={styles.border} className={`pb-2 ${styles.navbar1} bg-white d-md-block d-none`}>
//                 <div className="container pt-2" id={styles.logo}>
//                     <div className="row align-items-center">
//                         <div className="col-md-2 d-inline pt-0">
//                             <div className="sidebar_logo">
//                                 <Link to='/'>
//                                     <img src={Logo} alt="img" className='img-fluid w-50' />
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className="col-md-4 d-inline">
//                             <select id={styles.locationselect} className="text-dark rounded" value={locationDetails || ''} disabled>
//                                 <option value="">{locationDetails ? locationDetails : 'Fetching location...'}</option>
//                             </select>
//                         </div>
//                         <div className="col-md-3">
//                             <form className="d-flex form-group">
//                                 <input
//                                     type="text"
//                                     className="form-control w-50 px-2"
//                                     placeholder="Search"
//                                     name="search_data"
//                                     aria-label="Search"
//                                     value={searchTerm}
//                                     onChange={handleSearch}
//                                     id={styles.searchbox}
//                                 />
//                                 {/* Remove action attribute from form */}
//                                 <button type="submit" className="btn btn-outline-success mx-1 p-1" id={styles.search}>Search</button>
//                             </form>
//                         </div>
//                         <div className="col-md-3 d-flex justify-content-end" id={styles.profilesignin}>
//                             <div className="dropdown">
//                                 <Link className="bg-white dropdown-toggle text-decoration-none text-dark" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ outline: 'none' }}>
//                                     {formData.firstName} {formData.lastName}
//                                 </Link>
//                                 <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                                     <Link to='/Profile.jsx' className="text-decoration-none text-dark dropdown-item">
//                                         <FontAwesomeIcon icon={faUser} className="w-25" />
//                                         My Account
//                                     </Link>
//                                     <Link className="text-decoration-none text-dark dropdown-item" onClick={logout}>
//                                         <FontAwesomeIcon icon={faRightFromBracket} className="w-25" />
//                                         Log Out
//                                     </Link>
//                                 </div>
//                             </div>
//                             <Link to='/cart.jsx' className="text-decoration-none d-flex mx-4 mt-1 text-dark">
//                                 <FontAwesomeIcon icon={faShoppingCart} className="mx-1 w-50" />
//                                 <sup className="mt-1 fw-bold">1</sup> cart
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             <div className="container" id={styles.categories}>
//                 <div className="row">
//                     <div className="col-md-12 d-md-block d-none">
//                         <div className="navbar navbar-expand-lg" >
//                             <ul className="navbar-nav">
//                                 <li className="nav-item menu-click4">
//                                     <Link to='/chicken.jsx' className="nav-link">CHICKEN
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item  menu-click5">
//                                     <div class="dropdown" >
//                                         <a class="nav-link dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                             SEA FOOD
//                                         </a>
//                                         <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id={styles.underseafood}>
//                                             <Link to='/SeaFood.jsx' class="dropdown-item" href="#">SEA FOOD</Link>
//                                             <Link to='/Prawns.jsx' class="dropdown-item" href="#">PRAWNS AND CRABS</Link>
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link to='/Egg.jsx' className="nav-link">EGG</Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to='/Mutton.jsx'>MUTTON</Link>
//                                 </li>
//                                 <li className="nav-item menu-click3">
//                                     <Link className="nav-link" to='/ColdCut.jsx'>COLD CUTS
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item menu-click">
//                                     <Link className="nav-link" to='/ReadyToCook.jsx'>READY TO COOK
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <div className="dropdown">
//                                         <Link className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                             ALL
//                                         </Link>
//                                         <ul className="dropdown-menu">
//                                             <li><Link to='/chicken.jsx' className="dropdown-item">CHICKEN</Link></li>
//                                             <li><Link to='/SeaFood.jsx' className="dropdown-item">SEA FOOD</Link></li>
//                                             <li><Link to='/Egg.jsx' className="dropdown-item">EGG</Link></li>
//                                             <li><Link to='/Mutton.jsx' className="dropdown-item">MUTTON</Link></li>
//                                             <li><Link to='/Prawns.jsx' className="dropdown-item">PRAWNS & CRABS</Link></li>
//                                             <li><Link to='/ColdCut.jsx' className="dropdown-item">COLD CUTS</Link></li>
//                                             <li><Link to='/ReadyToCook.jsx' className="dropdown-item">READY TO COOK</Link></li>
//                                         </ul>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             <div className="container mt-2">
//                 <div className="row">
//                     <div className="col-md-12 d-flex">
//                         <Link to='/' className="text-decoration-none text-dark mx-2">HOME  <FontAwesomeIcon icon={faAngleRight} className="mx-2" style={{ fontSize: '12px' }}></FontAwesomeIcon> </Link>
//                         <Link to='/chicken.jsx' className="text-decoration-none text-dark">CHICKEN</Link>
//                     </div>
//                 </div>
//             </div>
//             <div className="mt-2 mx-5 px-5">
//                 {/* Conditionally render SearchProduct component */}
//                 {searchResults.length > 0 && <SearchProduct searchResults={searchResults} />}
//             </div>
//             <div id="products-thumbnail">
//                 <div className="container" id={styles.deliauraspecials}>
//                     <div className="row mt-3">
//                         <div className="col-md-3 product-one" id={` {styles.card}`}>
//                             <div className="product-thumbnail">
//                                 <a href="javascript:;">
//                                     <img src={Chicken[0].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
//                                 </a>
//                             </div>
//                             <div className="card-body">
//                                 <a href="product-single.html" id={` ${styles.producttitle}`} title="Beef">{Chicken[0].dish}</a>
//                                 <p className="product-text" id={styles.productdescription}>{Chicken[0].description}</p>
//                                 <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[0].Title}</p>
//                                 <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
//                                     <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[0].Price} <strike id={styles.lowprice}> {Chicken[0].Dollar}</strike></span></a>
//                                 </div>
//                                 <div className="mt-2">
//                                     <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('1') }}>Add Cart</Link>
//                                     <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3 product-one" id={` {styles.card}`}>
//                             <div className="product-thumbnail">
//                                 <a href="javascript:;">
//                                     <img src={Chicken[1].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
//                                 </a>
//                             </div>
//                             <div className="card-body">
//                                 <a href="product-single.html" id={`{styles.producttitle}`} className="dish" title="Beef">{Chicken[1].dish}</a>
//                                 <p className="product-text" id={styles.productdescription}>{Chicken[1].description}</p>
//                                 <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[1].Title}</p>
//                                 <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
//                                     <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[1].Price} <strike id={styles.lowprice}> {Chicken[1].Dollar}</strike></span></a>
//                                 </div>
//                                 <div className="mt-2">
//                                     <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('2') }}>Add Cart</Link>
//                                     <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3 product-one" id={` {styles.card}`}>
//                             <div className="product-thumbnail">
//                                 <a href="javascript:;">
//                                     <img src={Chicken[2].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
//                                 </a>
//                             </div>
//                             <div className="card-body">
//                                 <a href="product-single.html" id={`{styles.producttitle}`} className="dish" title="Beef">{Chicken[2].dish}</a>
//                                 <p className="product-text" id={styles.productdescription}>{Chicken[2].description}</p>
//                                 <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[2].Title}</p>
//                                 <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
//                                     <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[2].Price} <strike id={styles.lowprice}> {Chicken[2].Dollar}</strike></span></a>
//                                 </div>
//                                 <div className="mt-2">
//                                     <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('3') }}>Add Cart</Link>
//                                     <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3 product-one" id={` {styles.card}`}>
//                             <div className="product-thumbnail">
//                                 <a href="javascript:;">
//                                     <img src={Chicken[3].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
//                                 </a>
//                             </div>
//                             <div className="card-body">
//                                 <a href="product-single.html" id={`{styles.producttitle}`} className="dish" title="Beef">{Chicken[3].dish}</a>
//                                 <p className="product-text" id={styles.productdescription}>{Chicken[3].description}</p>
//                                 <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[3].Title}</p>
//                                 <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
//                                     <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[3].Price} <strike id={styles.lowprice}> {Chicken[3].Dollar}</strike></span></a>
//                                 </div>
//                                 <div className="mt-2">
//                                     <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('4') }}>Add Cart</Link>
//                                     <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
//                             <div className="product-thumbnail">
//                                 <a href="javascript:;">
//                                     <img src={Chicken[4].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
//                                 </a>
//                             </div>
//                             <div className="card-body">
//                                 <a href="product-single.html" id={`{styles.producttitle}`} className="dish" title="Beef">{Chicken[4].dish}</a>
//                                 <p className="product-text" id={styles.productdescription}>{Chicken[4].description}</p>
//                                 <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[4].Title}</p>
//                                 <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
//                                     <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[4].Price} <strike id={styles.lowprice}> {Chicken[4].Dollar}</strike></span></a>
//                                 </div>
//                                 <div className="mt-2">
//                                     <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('5') }}>Add Cart</Link>
//                                     <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
//                             <div className="product-thumbnail">
//                                 <a href="javascript:;">
//                                     <img src={Chicken[5].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
//                                 </a>
//                             </div>
//                             <div className="card-body">
//                                 <a href="product-single.html" id={`{styles.producttitle}`} className="dish" title="Beef">{Chicken[5].dish}</a>
//                                 <p className="product-text" id={styles.productdescription}>{Chicken[5].description}</p>
//                                 <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[5].Title}</p>
//                                 <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
//                                     <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[5].Price} <strike id={styles.lowprice}> {Chicken[5].Dollar}</strike></span></a>
//                                 </div>
//                                 <div className="mt-2">
//                                     <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={(e) => { e.preventDefault(); addCart('6') }}>Add Cart</Link>
//                                     <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
//                             <div className="product-thumbnail">
//                                 <a href="javascript:;">
//                                     <img src={Chicken[6].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
//                                 </a>
//                             </div>
//                             <div className="card-body">
//                                 <a href="product-single.html" id={`{styles.producttitle}`} className="dish" title="Beef">{Chicken[6].dish}</a>
//                                 <p className="product-text" id={styles.productdescription}>{Chicken[6].description}</p>
//                                 <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[6].Title}</p>
//                                 <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
//                                     <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[6].Price} <strike id={styles.lowprice}> {Chicken[6].Dollar}</strike></span></a>
//                                 </div>
//                                 <div className="mt-2">
//                                     <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('7') }}>Add Cart</Link>
//                                     <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
//                             <div className="product-thumbnail">
//                                 <a href="javascript:;">
//                                     <img src={Chicken[7].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
//                                 </a>
//                             </div>
//                             <div className="card-body">
//                                 <a href="product-single.html" id={`{styles.producttitle}`} className="dish" title="Beef">{Chicken[7].dish}</a>
//                                 <p className="product-text" id={styles.productdescription}>{Chicken[7].description}</p>
//                                 <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[7].Title}</p>
//                                 <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
//                                     <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[7].Price} <strike id={styles.lowprice}> {Chicken[7].Dollar}</strike></span></a>
//                                 </div>
//                                 <div className="mt-2">
//                                     <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('8') }}>Add Cart</Link>
//                                     <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
//                             <div className="product-thumbnail">
//                                 <a href="javascript:;">
//                                     <img src={Chicken[8].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
//                                 </a>
//                             </div>
//                             <div className="card-body">
//                                 <a href="product-single.html" id={`{styles.producttitle}`} className="dish" title="Beef">{Chicken[8].dish}</a>
//                                 <p className="product-text" id={styles.productdescription}>{Chicken[8].description}</p>
//                                 <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[8].Title}</p>
//                                 <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
//                                     <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[8].Price} <strike id={styles.lowprice}> {Chicken[8].Dollar}</strike></span></a>
//                                 </div>
//                                 <div className="mt-2">
//                                     <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('9') }}>Add Cart</Link>
//                                     <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
//                             <div className="product-thumbnail">
//                                 <a href="javascript:;">
//                                     <img src={Chicken[9].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
//                                 </a>
//                             </div>
//                             <div className="card-body">
//                                 <a href="product-single.html" id={`{styles.producttitle}`} className="dish" title="Beef">{Chicken[9].dish}</a>
//                                 <p className="product-text" id={styles.productdescription}>{Chicken[9].description}</p>
//                                 <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[9].Title}</p>
//                                 <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
//                                     <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[9].Price} <strike id={styles.lowprice}> {Chicken[9].Dollar}</strike></span></a>
//                                 </div>
//                                 <div className="mt-2">
//                                     <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('10') }}>Add Cart</Link>
//                                     <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
//                             <div className="product-thumbnail">
//                                 <a href="javascript:;">
//                                     <img src={Chicken[10].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
//                                 </a>
//                             </div>
//                             <div className="card-body">
//                                 <a href="product-single.html" id={`{styles.producttitle}`} className="dish" title="Beef">{Chicken[10].dish}</a>
//                                 <p className="product-text" id={styles.productdescription}>{Chicken[10].description}</p>
//                                 <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[10].Title}</p>
//                                 <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
//                                     <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[10].Price} <strike id={styles.lowprice}> {Chicken[10].Dollar}</strike></span></a>
//                                 </div>
//                                 <div className="mt-2">
//                                     <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('11') }}>Add Cart</Link>
//                                     <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
//                             <div className="product-thumbnail">
//                                 <a href="javascript:;">
//                                     <img src={Chicken[11].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
//                                 </a>
//                             </div>
//                             <div className="card-body">
//                                 <a href="product-single.html" id={`{styles.producttitle}`} className="dish" title="Beef">{Chicken[11].dish}</a>
//                                 <p className="product-text" id={styles.productdescription}>{Chicken[11].description}</p>
//                                 <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[11].Title}</p>
//                                 <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
//                                     <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[11].Price} <strike id={styles.lowprice}> {Chicken[11].Dollar}</strike></span></a>
//                                 </div>
//                                 <div className="mt-2">
//                                     <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('12') }}>Add Cart</Link>
//                                     <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="text-center mt-5 mb-5">
//                             <a href="#" className="btn rounded text-white px-2" id={styles.button}>View All</a>
//                         </div>
//                     </div >
//                 </div>
//             </div>
//             <div className="container mt-5" id={styles.footermainwrapper}>
//                 <div className="row">
//                     <div className="col-md-3 product-one">
//                         <div className="mx-5">
//                             <div className="line">
//                                 <img className="w-75" src={Logo} />
//                                 <div className={`mt-2 mx-0`}>
//                                     <a href="#"><img src={GoogleApp} className="mt-1 mx-1" alt="logo" width="80" height="30" /></a>
//                                     <a href="#"><img src={AppleStore} className="mt-1 mx-1" alt="logo" width="80" height="30" /></a>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                     <div className="col-md-3 product-one mt-1 justify-content-center align-items-center text-left">
//                         <div className={styles.widgettitle}>
//                             <div className="link-page justify-content-center">

//                                 <ul className=" text-left mt-2">
//                                     <h4 className="">Quick Links</h4>
//                                     <li>
//                                         <a href="#" className="text-decoration-none text-dark">FAQ</a>
//                                     </li>
//                                     <li>
//                                         <a href="blog-right-sidebar.html" className="text-decoration-none text-dark">Blog</a>
//                                     </li>
//                                     <li>
//                                         <a href="blog-single-left-sidebar.html" className="text-decoration-none text-dark">Terms & Conditions</a>
//                                     </li>
//                                     <li>
//                                         <a href="blog-single-right-sidebar.html" className="text-decoration-none text-dark">Privacy Policy</a>
//                                     </li>
//                                     <li>
//                                         <a href="privacy.html" className="text-decoration-none text-dark">Refund Policy</a>
//                                     </li>

//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-3 product-one mt-1" id={` {styles.card}`}>
//                         <div className="text-left" id={styles.link}>
//                             <span className="fw-bold">Contact Us</span>
//                             <h6 className="mt-1 text-dark">+91 63810 05442</h6>
//                             <a href="mailto:customercare@deliuara.com" className="text-center text-decoration-none text-dark">customercare@deliaura.com</a>
//                         </div>
//                     </div>
//                     <div className="col-md-3 product-one mt-1" id={` {styles.card}`}>
//                         <div className="text-left" id={styles.link}>
//                             <span className="fw-bold mt-2">Follow Us On</span>
//                             <div className="d-flex flex-wrap d-inline text-left" id={styles.imgftr}>
//                                 <div className="">
//                                     <a href="about-us.html"><IoLogoFacebook style={{ fontSize: '20px', color: 'black' }}></IoLogoFacebook></a></div>
//                                 <div className="mx-1">
//                                     <a href="about-us.html"><IoLogoTwitter style={{ fontSize: '20px', color: 'black' }}></IoLogoTwitter></a>
//                                 </div>
//                                 <div className="mx-1">
//                                     <a href="about-us.html"><IoLogoInstagram style={{ fontSize: '20px', color: 'black' }}></IoLogoInstagram></a>
//                                 </div>
//                                 <div className="mx-1">
//                                     <a href="about-us.html"><IoLogoYoutube style={{ fontSize: '20px', color: 'black' }}></IoLogoYoutube></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="container-fluid bg-dark text-white mt-4">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="d-flex pt-1 align-items-center justify-content-center" id={styles.footer}>
//                             <a className="text-light text-decoration-none">Copyright 2024 © </a>
//                             <a href="#" className="text-decoration-none">Deliaura | Meat Shop online | All Rights Reserved</a>
//                             <a className="text-light text-decoration-none">Designed By</a>
//                             <a href="www.akvtechnologies.com" target="_blank" className="text-decoration-none">AKV Technologies</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Chicken


import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight, faIndianRupeeSign, faPhone, faRupee, faShoppingCart, faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "./images/logo1.png"
import GoogleApp from "./images/google-play-badge-logo-png-transparent.png"
import AppleStore from "./images/apple-app-store-logo.jpg"
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
import { Link } from "react-router-dom";
import Google from "./images/google.jpg"
import Register from "./Register";
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
import axios from "axios";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import SearchProduct from "./SearchProduct";


const Chicken = () => {

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

                        // Call API with location details
                        //   await callLocationAPI(area, city, state, pincode);
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

    const Chicken = [
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


    // Initialize session storage if it's the first time
    if (!sessionStorage.getItem('cartItems')) {
        sessionStorage.setItem('cartItems', JSON.stringify([]));
    }

    // // Getting data's based on id
    // let setData = {}; // Initializing-empty object

    // async function addCart(count) {
    //     // Find the chicken item
    //     for (var i = 0; i <= Chicken.length - 1; i++) {
    //         if (Chicken[i].id == count) {
    //             setData = Chicken[i];
    //             break;
    //         }
    //     }

    //     let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    //     // Add the new item to the cart items array
    //     cartItems.push(setData);
    //     // Update session storage with the new cart items array
    //     sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    //     // Sending data's to add cart page
    //     sessionStorage.setItem('setData', JSON.stringify(setData));

    //     console.log(setData.Title);
    //     console.log(setData.Price);
    //     console.log(setData.img);

    //     try {
    //         // Fetch the image file
    //         const response = await fetch(setData.img);
    //         const blob = await response.blob(); // Convert the response to a Blob object

    //         // Create FormData object
    //         const formData = new FormData();
    //         formData.append('image', blob);
    //         formData.append('title', setData.Title);
    //         formData.append('price', setData.Price);

    //         // Send FormData to backend
    //         const backendResponse = await axios.post('http://10.10.238.199:3000/addproduct/addproduct-img', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });

    //         console.log("Data's stored: ", backendResponse.data);
    //     } catch (error) {
    //         console.error('Error adding item to cart:', error);
    //     }
    // }


    // Getting data based on id
    let setData = {}; // Initializing an empty object

    async function addCart(count) {
        // Find the chicken item
        for (var i = 0; i <= Chicken.length - 1; i++) {
            if (Chicken[i].id == count) {
                setData = Chicken[i];
                break;
            }
        }

        let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        // Add the new item to the cart items array
        cartItems.push(setData);
        // Update session storage with the new cart items array
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        // Store the selected item in session storage
        sessionStorage.setItem('setData', JSON.stringify(setData));

        console.log(setData.Title);
        console.log(setData.Price);
        console.log(setData.img);

        try {
            // Fetch the image file
            const response = await fetch(setData.img);
            const blob = await response.blob(); // Convert the response to a Blob object

            // Create FormData object
            const formData = new FormData();
            formData.append('image', blob);
            formData.append('title', setData.Title);
            formData.append('price', setData.Price);

            // Send FormData to backend
            const backendResponse = await axios.post('http://10.10.238.199:3000/addproducts/addproduct-img', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert("Data Sent"); // Alert if data is sent successfully
            console.log("Data's stored: ", backendResponse.data); // Log the response
        } catch (error) {
            alert("Data Not Sent"); // Alert if there is an error
            console.error('Error adding item to cart:', error); // Log the error
        }
    }





    const [counter, setCounter] = useState(0);

    const handleCartButtonClick = () => {
        if (counter < Chicken.length) {
            const currentItem = Chicken[counter];
            console.log(currentItem.Title);
            setCounter(prevCounter => prevCounter + 1);
        } else {
            console.log("No more items in the cart.");
        }
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        if (term.trim() === '') {
            setSearchResults([]); // Clear search results if search term is empty
        } else {
            const results = Chicken.filter(product =>
                product.dish.toLowerCase().includes(term) ||
                product.Title.toLowerCase().includes(term)
            );
            setSearchResults(results);
        }
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
                    <div className="col-md-12 d-flex">
                        <Link to='/' className="text-decoration-none text-dark">HOME  <FontAwesomeIcon icon={faAngleRight} className="mx-1" style={{ fontSize: '12px' }}></FontAwesomeIcon> </Link>
                        <Link to='/chicken.jsx' className="text-decoration-none text-dark mx-1">CHICKEN</Link>
                    </div>
                </div>
            </div>

            <div className="mt-2 mx-5 px-5">
                {/* Conditionally render SearchProduct component */}
                {searchResults.length > 0 && <SearchProduct searchResults={searchResults} />}
            </div>

            <div id="products-thumbnail">
                <div className="container" id={styles.deliauraspecials}>
                    <div className="row mt-3">
                        <div className="col-md-3 product-one" id={` {styles.card}`}>
                            <div className="product-thumbnail">
                                <a href="javascript:;">
                                    <img src={Chicken[0].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href="product-single.html" id={` ${styles.producttitle}`} title="Beef">{Chicken[0].dish}</a>
                                <p className="product-text" id={styles.productdescription}>{Chicken[0].description}</p>
                                <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[0].Title}</p>
                                <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                    <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[0].Price} <strike id={styles.lowprice}> {Chicken[0].Dollar}</strike></span></a>
                                </div>
                                <div className="mt-2">
                                    <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('1') }}>Add Cart</Link>
                                    <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-one" id={` {styles.card}`}>
                            <div className="product-thumbnail">
                                <a href="javascript:;">
                                    <img src={Chicken[1].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href="product-single.html" id={styles.producttitle} className="dish" title="Beef">{Chicken[1].dish}</a>
                                <p className="product-text" id={styles.productdescription}>{Chicken[1].description}</p>
                                <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[1].Title}</p>
                                <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                    <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[1].Price} <strike id={styles.lowprice}> {Chicken[1].Dollar}</strike></span></a>
                                </div>
                                <div className="mt-2">
                                    <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('2') }}>Add Cart</Link>
                                    <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-one" id={` {styles.card}`}>
                            <div className="product-thumbnail">
                                <a href="javascript:;">
                                    <img src={Chicken[2].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href="product-single.html" id={styles.producttitle} className="dish" title="Beef">{Chicken[2].dish}</a>
                                <p className="product-text" id={styles.productdescription}>{Chicken[2].description}</p>
                                <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[2].Title}</p>
                                <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                    <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[2].Price} <strike id={styles.lowprice}> {Chicken[2].Dollar}</strike></span></a>
                                </div>
                                <div className="mt-2">
                                    <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('3') }}>Add Cart</Link>
                                    <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-one" id={` {styles.card}`}>
                            <div className="product-thumbnail">
                                <a href="javascript:;">
                                    <img src={Chicken[3].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href="product-single.html" id={styles.producttitle} className="dish" title="Beef">{Chicken[3].dish}</a>
                                <p className="product-text" id={styles.productdescription}>{Chicken[3].description}</p>
                                <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[3].Title}</p>
                                <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                    <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[3].Price} <strike id={styles.lowprice}> {Chicken[3].Dollar}</strike></span></a>
                                </div>
                                <div className="mt-2">
                                    <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('4') }}>Add Cart</Link>
                                    <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
                            <div className="product-thumbnail">
                                <a href="javascript:;">
                                    <img src={Chicken[4].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href="product-single.html" id={styles.producttitle} className="dish" title="Beef">{Chicken[4].dish}</a>
                                <p className="product-text" id={styles.productdescription}>{Chicken[4].description}</p>
                                <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[4].Title}</p>
                                <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                    <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[4].Price} <strike id={styles.lowprice}> {Chicken[4].Dollar}</strike></span></a>
                                </div>
                                <div className="mt-2">
                                    <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('5') }}>Add Cart</Link>
                                    <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
                            <div className="product-thumbnail">
                                <a href="javascript:;">
                                    <img src={Chicken[5].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href="product-single.html" id={styles.producttitle} className="dish" title="Beef">{Chicken[5].dish}</a>
                                <p className="product-text" id={styles.productdescription}>{Chicken[5].description}</p>
                                <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[5].Title}</p>
                                <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                    <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[5].Price} <strike id={styles.lowprice}> {Chicken[5].Dollar}</strike></span></a>
                                </div>
                                <div className="mt-2">
                                    <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('6') }}>Add Cart</Link>
                                    <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
                            <div className="product-thumbnail">
                                <a href="javascript:;">
                                    <img src={Chicken[6].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href="product-single.html" id={styles.producttitle} className="dish" title="Beef">{Chicken[6].dish}</a>
                                <p className="product-text" id={styles.productdescription}>{Chicken[6].description}</p>
                                <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[6].Title}</p>
                                <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                    <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[6].Price} <strike id={styles.lowprice}> {Chicken[6].Dollar}</strike></span></a>
                                </div>
                                <div className="mt-2">
                                    <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('7') }}>Add Cart</Link>
                                    <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
                            <div className="product-thumbnail">
                                <a href="javascript:;">
                                    <img src={Chicken[7].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href="product-single.html" id={styles.producttitle} className="dish" title="Beef">{Chicken[7].dish}</a>
                                <p className="product-text" id={styles.productdescription}>{Chicken[7].description}</p>
                                <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[7].Title}</p>
                                <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                    <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[7].Price} <strike id={styles.lowprice}> {Chicken[7].Dollar}</strike></span></a>
                                </div>
                                <div className="mt-2">
                                    <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('8') }}>Add Cart</Link>
                                    <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
                            <div className="product-thumbnail">
                                <a href="javascript:;">
                                    <img src={Chicken[8].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href="product-single.html" id={styles.producttitle} className="dish" title="Beef">{Chicken[8].dish}</a>
                                <p className="product-text" id={styles.productdescription}>{Chicken[8].description}</p>
                                <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[8].Title}</p>
                                <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                    <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[8].Price} <strike id={styles.lowprice}> {Chicken[8].Dollar}</strike></span></a>
                                </div>
                                <div className="mt-2">
                                    <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('9') }}>Add Cart</Link>
                                    <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
                            <div className="product-thumbnail">
                                <a href="javascript:;">
                                    <img src={Chicken[9].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href="product-single.html" id={styles.producttitle} className="dish" title="Beef">{Chicken[9].dish}</a>
                                <p className="product-text" id={styles.productdescription}>{Chicken[9].description}</p>
                                <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[9].Title}</p>
                                <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                    <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[9].Price} <strike id={styles.lowprice}> {Chicken[9].Dollar}</strike></span></a>
                                </div>
                                <div className="mt-2">
                                    <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('10') }}>Add Cart</Link>
                                    <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
                            <div className="product-thumbnail">
                                <a href="javascript:;">
                                    <img src={Chicken[10].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href="product-single.html" id={styles.producttitle} className="dish" title="Beef">{Chicken[10].dish}</a>
                                <p className="product-text" id={styles.productdescription}>{Chicken[10].description}</p>
                                <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[10].Title}</p>
                                <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                    <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[10].Price} <strike id={styles.lowprice}> {Chicken[10].Dollar}</strike></span></a>
                                </div>
                                <div className="mt-2">
                                    <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('11') }}>Add Cart</Link>
                                    <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 product-one mt-3" id={` {styles.card}`}>
                            <div className="product-thumbnail">
                                <a href="javascript:;">
                                    <img src={Chicken[11].img} alt="Brown Eggs - Pack of 12" className="img img-fluid w-100 rounded" />
                                </a>
                            </div>
                            <div className="card-body">
                                <a href="product-single.html" id={styles.producttitle} className="dish" title="Beef">{Chicken[11].dish}</a>
                                <p className="product-text" id={styles.productdescription}>{Chicken[11].description}</p>
                                <p className="p-1 text-center" id={styles.offerproductname}>{Chicken[11].Title}</p>
                                <div className="d-grid mt-1 d-sm-flex justify-content-start justify-content-sm-center">
                                    <a href="#" className="px-0"><span className="product-price" id={styles.originalprice}>{Chicken[11].Price} <strike id={styles.lowprice}> {Chicken[11].Dollar}</strike></span></a>
                                </div>
                                <div className="mt-2">
                                    <Link to='/ChickenAddCart.jsx' id={styles.button} className="btn text-white col-md-4" onClick={() => { addCart('12') }}>Add Cart</Link>
                                    <a href="chickenaddcart.php?product_id=29" id={styles.button} className="btn text-white mx-3 col-md-5">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5 mb-5">
                            <a href="#" className="btn rounded text-white px-2" id={styles.button}>View All</a>
                        </div>
                    </div >
                </div>
            </div>
            <div className="container mt-5" id={styles.footermainwrapper}>
                <div className="row">
                    <div className="col-md-3 product-one">
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
                    <div className="col-md-3 product-one mt-1 justify-content-center align-items-center text-left">
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
                    <div className="col-md-3 product-one mt-1" id={` {styles.card}`}>
                        <div className="text-left" id={styles.link}>
                            <span className="fw-bold">Contact Us</span>
                            <h6 className="mt-1 text-dark">+91 63810 05442</h6>
                            <a href="mailto:customercare@deliuara.com" className="text-center text-decoration-none text-dark">customercare@deliaura.com</a>
                        </div>
                    </div>
                    <div className="col-md-3 product-one mt-1" id={` {styles.card}`}>
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

export default Chicken

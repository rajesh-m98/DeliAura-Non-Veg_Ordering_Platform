// import axios from "axios";
// import React, { useState, useEffect } from "react";

// const Success = () => {
//   const [formData, setFormData] = useState({
//     phone: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     subscribe: false,
//     termsAccepted: false,
//   });

//   useEffect(() => {
//     // Retrieve phone number from sessionStorage when the component mounts
//     const phoneNumberFromVerify = JSON.parse(sessionStorage.getItem('phoneNumbers'));
//     console.log(phoneNumberFromVerify)
//     setFormData(prevData => ({
//       ...prevData,
//       phone: phoneNumberFromVerify || "",
//     }));
//   }, []); // Empty dependency array ensures useEffect runs only once on component mount

//   const [errors, setErrors] = useState({});
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));

//     let newValue = value;
//     if (name === "firstName" || name === "lastName") {
//       newValue = value.replace(/[^A-Za-z]/gi, "");
//     }

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : newValue,
//     }));
//   };

//   async function handleSubmit(e) {
//     e.preventDefault();
  
//     const newErrors = {};
//     if (!formData.firstName) {
//       newErrors.firstName = "First name is required";
//     }
//     if (!formData.lastName) {
//       newErrors.lastName = "Last name is required";
//     }
//     if (!formData.email) {
//       newErrors.email = "Email address is required";
//     } else if (!isValidEmail(formData.email)) {
//       newErrors.email = "Invalid email address";
//     }
//     if (!formData.termsAccepted) {
//       newErrors.termsAccepted = "You must accept the Terms and Conditions";
//     }
  
//     setErrors(newErrors);
  
//     if (Object.keys(newErrors).length === 0) {
//       try {
//         const response = await axios.post("http://10.10.238.199:3000/register/register", formData);
  
//         console.log("Response from API:", response);
//         // Check if response is successful
//         if (response.status === 200) {
//           console.log("User registered successfully");
//           setShowSuccessModal(true);
//         } else {
//           console.log("Failed to register user");
//         }
//       } catch (error) {
//         console.log(error);
//       }
  
//       const fName = document.getElementById("firstName").value;
//       const lName = document.getElementById("lastName").value;
//       const email = document.getElementById("email").value;
  
//       sessionStorage.setItem('setFName', JSON.stringify(fName));
//       sessionStorage.setItem('setLName', JSON.stringify(lName));
//       sessionStorage.setItem('setEmail', JSON.stringify(email));
//     }
//   }

//   const isValidEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const handleCloseModal = (e) => {
//     e.preventDefault();
//     setShowSuccessModal(false);
//     window.location.href = "./";
//   };

//   return (
//     <div>
//       <div className="modal fade show" id="exampleModal" tabIndex="" aria-labelledby="exampleModalLabel" aria-modal="true" style={{ display: "block" }} >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-body">
//               <div className="container w-100">
//                 <h2 className="text-center">Register</h2>
//                 <form>
//                   <div className="row">
//                     <div className="mb-2 col-md-6">
//                       <label htmlFor="firstName" className="form-label">
//                         First Name<span className="text-danger">*</span>
//                       </label>
//                       <input type="text" className={`form-control ${   errors.firstName ? "is-invalid" : "" }`} id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
//                       {errors.firstName && (
//                         <div className="invalid-feedback">
//                           {errors.firstName}
//                         </div>
//                       )}
//                     </div>
//                     <div className="mb-2 col-md-6">
//                       <label htmlFor="lastName" className="form-label">
//                         Last Name<span className="text-danger">*</span>
//                       </label>
//                       <input type="text" className={`form-control ${   errors.lastName ? "is-invalid" : "" }`} id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
//                       {errors.lastName && (
//                         <div className="invalid-feedback">
//                           {errors.lastName}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <div className="mb-2">
//                     <label htmlFor="email" className="form-label">
//                       Email Address<span className="text-danger">*</span>
//                     </label>
//                     <input type="email" className={`form-control ${   errors.email ? "is-invalid" : "" }`} id="email" name="email" value={formData.email} onChange={handleChange} />
//                     {errors.email && (
//                       <div className="invalid-feedback">{errors.email}</div>
//                     )}
//                   </div>
//                   <div className="mb-2">
//                     <label htmlFor="phone" className="form-label">
//                       Phone Number<span className="text-danger">*</span>
//                     </label>
//                     <input type="tel" className={`form-control ${   errors.phone ? "is-invalid" : "" }`} id="phone" name="phone" value={formData.phone} readOnly />
//                     {console.log(formData.phone)}
//                     {errors.phone && (
//                       <div className="invalid-feedback">{errors.phone}</div>
//                     )}
//                   </div>
//                   <div className="mb-2 form-check">
//                     <input type="checkbox" className="form-check-input" id="subscribe" name="subscribe" checked={formData.subscribe} onChange={handleChange} />
//                     <label className="form-check-label" htmlFor="subscribe" > Subscribe to our newsletter</label>
//                   </div>
//                   <div className="mb-1 form-check">
//                     <input type="checkbox" className={`form-check-input ${   errors.termsAccepted ? "is-invalid" : "" }`} id="termsAccepted" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
//                     <label className="form-check-label" htmlFor="termsAccepted" > * By clicking the Register button you are accepting the Terms and Conditions of Deliaura</label>
//                     {errors.termsAccepted && (
//                       <div className="invalid-feedback">
//                       {errors.termsAccepted}
//                       </div>
//                     )}
//                   </div>
//                   <div className="text-center">
//                     <button type="submit" className="btn btn-primary" onClick={handleSubmit} > Register</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showSuccessModal && (
//         <div className="modal fade show" id="successModal" tabIndex="" aria-labelledby="exampleModalLabel" aria-modal="true" style={{ display: 'block' }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-body">
//                 <div className="container w-100">
//                   <h2 className="text-center">Welcome {formData.firstName} {formData.lastName}</h2>
//                   <p className="text-center">You're logged in successfully</p>
//                   <div className='text-center'>
//                     <button type="button" className="btn btn-primary" onClick={handleCloseModal}>Close</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Success;


import axios from "axios";
import React, { useState } from "react";

const Success = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone:"",
    subscribe: false,
    termsAccepted: false,
  };

  const phoneNum=sessionStorage.getItem('phoneNum');

  const [formData, setFormData] = useState(initialFormData);


  // const number = JSON.parse(sessionStorage.getItem('phoneNumbers'));
  formData.phone = phoneNum;
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    let newValue = value;
    if (name === "firstName" || name === "lastName") {
      newValue = value.replace(/[^A-Za-z]/gi, "");
    }
    //else if (name === "phone") {
    //   newValue = value.replace(/\D/g, "").slice(0, 10);
    // }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : newValue,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email address is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    // if (!formData.phone) {
    //   newErrors.phone = "Phone number is required";
    // } else if (formData.phone.length !== 10) {
    //   newErrors.phone = "Phone number must be 10 digits";
    // }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the Terms and Conditions";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        console.log(formData)
        console.log('In success:',formData.phone)
        const response = await axios.post("http://10.10.238.199:3000/register/register", {firstName:formData.firstName, lastName:formData.lastName, email:formData.email, phone:formData.phone});
        console.log("Response from API:", response);
        // Check if response is successful
        if (response.status === 200) {
          console.log("User registered successfully");
          setShowSuccessModal(true);
        } else {
          console.log("Failed to register user");
        }
      } 
      catch (error) {
        console.log(error);
      }

      const fName = document.getElementById("firstName").value;
      const lName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      // const number = document.getElementById("phone").value;

      sessionStorage.setItem('setFName', JSON.stringify(fName));
      sessionStorage.setItem('setLName', JSON.stringify(lName));
      sessionStorage.setItem('setEmail', JSON.stringify(email));
      // sessionStorage.setItem('setPhnNumber', JSON.stringify(number));
    }
  }



  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    window.location.href = "./";
  };


  return (
    <div>
      <div
        className="modal fade show"
        id="exampleModal"
        tabIndex=""
        aria-labelledby="exampleModalLabel"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container w-100">
                <h2 className="text-center">Register</h2>
                <form>
                  <div className="row">
                    <div className="mb-2 col-md-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.firstName ? "is-invalid" : ""
                          }`}
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">
                          {errors.firstName}
                        </div>
                      )}
                    </div>
                    <div className="mb-2 col-md-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.lastName ? "is-invalid" : ""
                          }`}
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email" className="form-label">
                      Email Address<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""
                        }`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="mb-2">
                    <label htmlFor="phone" className="form-label">
                      Phone Number<span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? "is-invalid" : ""
                        }`}
                      id="phone"
                      name="phone"
                      value={formData.phone} readOnly
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>
                  <div className="mb-2 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="subscribe"
                      name="subscribe"
                      checked={formData.subscribe}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="subscribe"
                    >
                      Subscribe to our newsletter
                    </label>
                  </div>
                  <div className="mb-1 form-check">
                    <input
                      type="checkbox"
                      className={`form-check-input ${errors.termsAccepted ? "is-invalid" : ""
                        }`}
                      id="termsAccepted"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="termsAccepted"
                    >
                      * By clicking the Register button you are accepting the
                      Terms and Conditions of Deliaura
                    </label>
                    {errors.termsAccepted && (
                      <div className="invalid-feedback">
                        {errors.termsAccepted}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSuccessModal && (
        <div className="modal fade show" id="successModal" tabIndex="" aria-labelledby="exampleModalLabel" aria-modal="true" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container w-100">
                  <h2 className="text-center">Welcome {formData.firstName} {formData.lastName}</h2>
                  <p className="text-center">You're logged in successfully</p>
                  <div className='text-center'>
                    <button type="button" className="btn btn-primary" onClick={handleCloseModal}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Success;

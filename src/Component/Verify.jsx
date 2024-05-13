// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addPhoneNumber, addUser, changeStateFalse, successTrue } from "./otpSlice";
// import toast from "react-hot-toast";
// import OtpInput from "otp-input-react";
// import axios from 'axios';
// import { signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "./firebase";

// const Verify = ({ phone }) => { // Accept phone as a prop
//   const dispatch = useDispatch();
//   const { user, phoneNumber } = useSelector((state) => state.otp);
//   const [otp, setOtp] = useState("");
//   const [isVerifyButtonDisabled, setIsVerifyButtonDisabled] = useState(false);
//   const [otpTime, setOtpTime] = useState(5);
//   const [phoneNumbers, setPhoneNumbers] = useState(""); 

//   useEffect(() => {
//     if (otpTime > 0) {
//       const intervalId = setInterval(() => {
//         setOtpTime(otpTime - 1);
//       }, 1000);
//       return () => clearInterval(intervalId);
//     }
//   }, [otpTime]);

//   const resendOTP = async () => {
//     try {
//       // Call your backend API to resend OTP
//       const response = await axios.post('http://10.10.240.79:3090/user_login/send-otp', { storedOtp: otp });

//       // Handle response, maybe show a message that OTP has been resent
//       toast.success("OTP resent successfully");

//       // Log the newly generated OTP to the console
//       console.log('Newly generated OTP:', response.data.otp);
//     } catch (error) {
//       // Handle errors, maybe show an error message to the user
//       console.error('Error resending OTP:', error);
//       toast.error("Failed to resend OTP. Please try again.");
//     }

//     if (!phoneNumber) {
//       toast.error("Something went wrong. Please try again.");
//       return;
//     }

//     setIsVerifyButtonDisabled(true);

//     try {
//       const confirmation = await signInWithPhoneNumber(
//         auth,
//         "+" + phoneNumber
//       );

//       toast.success("OTP sent successfully");
//       dispatch(addUser(confirmation));
//       dispatch(addPhoneNumber(phoneNumber));
//       dispatch(changeStateFalse());
//       setOtpTime(5);
//     } catch (error) {
//       switch (error.code) {
//         case "auth/too-many-requests":
//           toast.error("Too many requests. Please try again later.");
//           break;
//         case "auth/invalid-phone-number":
//           toast.error("The phone number is invalid.");
//           break;
//         default:
//           toast.error("Something went wrong. Please try again later.");
//           break;
//       }
//       console.error('Error:', error);
//     } finally {
//       setIsVerifyButtonDisabled(false);
//     }
//   };

//   async function verifyOTP() {
//     console.log('Entered OTP:', otp); // Log the entered OTP number

//     if (isVerifyButtonDisabled) {
//       return;
//     }

//     setIsVerifyButtonDisabled(true);
//     try {
//       const data = await user.confirm(otp);
//       dispatch(successTrue());
//       console.log("Generated OTP :" + otp)
//       const response = await axios.post('http://192.168.136.68:3000/login/login', { phoneNumber, savedOtp: otp });
//       alert("Values sent");
//       console.log("Response from server:", response.data); // Log response from the server
//       // Store OTP value in sessionStorage
//       sessionStorage.setItem('otp', otp);
//       setPhoneNumbers(phoneNumber); // Set phone number to state
//       sessionStorage.setItem('phoneNumbers', phoneNumber); // Store phone number in sessionStorage

//     } catch (error) {
//       switch (error.code) {
//         case "auth/invalid-verification-code":
//           toast.error("The verification code is invalid.");
//           break;
//         case "auth/code-expired":
//           toast.error("The verification code is expired.");
//           break;
//         default:
//           toast.error("Something went wrong. Please try again later.");
//           break;
//       }
//       console.error('Error:', error);
//     } finally {
//       setIsVerifyButtonDisabled(false);
//       sessionStorage.setItem('isVerified', 'true');
//     }
//   };

//   return (
//     <div>
//       <div className="phone-container">
//         <div className="phone-title">Enter your OTP</div>
//         <div className="phone-subcontainer extra">
//           <div className="phone-filed-otp">
//             <div>
//               <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpType="number" disabled={false} autoFocus/>
//             </div>
//           </div>
//           <div className="otp-details">
//             <button onClick={resendOTP} disabled={otpTime > 0}>
//               <span>{isVerifyButtonDisabled ? "Sending..." : "Resend"}</span>
//             </button>
//           </div>
//           <div className="phone-btn">
//             <button onClick={verifyOTP} id="verify-btn" disabled={isVerifyButtonDisabled}>
//               {isVerifyButtonDisabled ? "Checking..." : "Verify OTP"}
//             </button>
//           </div>
//           <div className="timer">
//             {otpTime > 0 && <div>{otpTime} seconds remaining</div>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Verify;


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPhoneNumber, addUser, changeStateFalse, successTrue } from "./otpSlice";
import toast from "react-hot-toast";
import OtpInput from "otp-input-react";
import axios from 'axios';
import { signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase";

const Verify = ({ phone }) => {
  const dispatch = useDispatch();
  const { user, phoneNumber } = useSelector((state) => state.otp);
  const [otp, setOtp] = useState("");
  const [isVerifyButtonDisabled, setIsVerifyButtonDisabled] = useState(false);
  const [otpTime, setOtpTime] = useState(5);

  const phoneNum=sessionStorage.getItem('phoneNum');
  

  useEffect(() => {
    if (otpTime > 0) {
      const intervalId = setInterval(() => {
        setOtpTime(otpTime - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [otpTime]);

  const resendOTP = async () => {
    try {
      const response = await axios.post('http://192.168.136.68:3000/login/login', { savedOtp: otp });
      toast.success("OTP resent successfully");

      console.log('Newly generated OTP:', response.data.otp);
    } catch (error) {
      console.error('Error resending OTP:', error);
      toast.error("Failed to resend OTP. Please try again.");
    }

    if (!phoneNumber) {
      toast.error("Something went wrong. Please try again.");
      return;
    }

    setIsVerifyButtonDisabled(true);

    try {
      const confirmation = await signInWithPhoneNumber(
        auth,
        "+" + phoneNumber
      );

      toast.success("OTP sent successfully");
      dispatch(addUser(confirmation));
      dispatch(addPhoneNumber(phoneNumber));
      dispatch(changeStateFalse());
      setOtpTime(5);
    } catch (error) {
      switch (error.code) {
        case "auth/too-many-requests":
          toast.error("Too many requests. Please try again later.");
          break;
        case "auth/invalid-phone-number":
          toast.error("The phone number is invalid.");
          break;
        default:
          toast.error("Something went wrong. Please try again later.");
          break;
      }
      console.error('Error:', error);
    } finally {
      setIsVerifyButtonDisabled(false);
    }
  };

  async function verifyOTP() {
    console.log('Entered OTP:', otp);

    if (isVerifyButtonDisabled) {
      return;
    }

    setIsVerifyButtonDisabled(true);
    try {
      
      const data = await user.confirm(otp);
      dispatch(successTrue());
      console.log('phoneNum:', phoneNum);
      console.log("Generated OTP :" + otp)
      const response = await axios.post('http://192.168.136.68:3000/login/login', { phoneNumber: phoneNum, savedOtp: otp });
      alert("Values sent");
      sessionStorage.setItem('otp', otp);
      
    } 
    catch (error) {
      switch (error.code) {
        case "auth/invalid-verification-code":
          toast.error("The verification code is invalid.");
          break;
        case "auth/code-expired":
          toast.error("The verification code is expired.");
          break;
        default:
          toast.error("Something went wrong. Please try again later.");
          break;
      }
      console.error('Error:', error);
    } 
    finally {
      setIsVerifyButtonDisabled(false);
      sessionStorage.setItem('isVerified', 'true');
    }
  };

  return (
    <div>
      <div className="phone-container">
        <div className="phone-title">Enter your OTP</div>
        <div className="phone-subcontainer extra">
          <div className="phone-filed-otp">
            <div>
              <OtpInput value={otp} onChange={setOtp} OTPLength={6} otpType="number" disabled={false} autoFocus/>
            </div>
          </div>
          <div className="otp-details">
            <button onClick={resendOTP} disabled={otpTime > 0}>
              <span>{isVerifyButtonDisabled ? "Sending..." : "Resend"}</span>
            </button>
          </div>
          <div className="phone-btn">
            <button onClick={verifyOTP} id="verify-btn" disabled={isVerifyButtonDisabled}>
              {isVerifyButtonDisabled ? "Checking..." : "Verify OTP"}
            </button>
          </div>
          <div className="timer">
            {otpTime > 0 && <div>{otpTime} seconds remaining</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;

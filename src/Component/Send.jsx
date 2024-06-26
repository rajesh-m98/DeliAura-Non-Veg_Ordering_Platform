// import { useEffect, useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "./firebase";
// import { useDispatch } from "react-redux";
// import { addPhoneNumber, addUser, changeStateFalse } from "./otpSlice";
// import toast from "react-hot-toast";

// const Send = () => {
//   const dispatch = useDispatch();
//   const [phone, setPhone] = useState("");
//   const [isButtonDisabled, setIsButtonDisabled] = useState(false);
//   const [recaptcha, setRecaptcha] = useState(null);

//   const [showCaptcha, setShowCaptcha] = useState(true);

//   useEffect(() => {
//     let recaptchaVerifier;
//     recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
//       size: "invisible",
//     });
//     setRecaptcha(recaptchaVerifier);
//   }, []);

//   const sendOTP = async () => {

//     console.log('Phone number:', phone); // Log the entered phone number

//     try {
//       // const response = await axios.post('http://10.10.240.79:3080/send-otp');
//       // console.log(response.data)
//       // Handle response, maybe show a message that OTP has been sent
//     } catch (error) {
//       // Handle errors, maybe show an error message to the user
//       console.error('Error sending OTP:', error);
//     }
//     if (phone === "") {
//       toast.error("please enter a phone number");
//       return;
//     }

//     if (isButtonDisabled) {
//       return;
//     }

//     try {
//       setIsButtonDisabled(true);
//       const confirmation = await signInWithPhoneNumber(
//         auth,
//         "+" + phone,
//         recaptcha
//       );

//       toast.success("otp sended successfully");
//       dispatch(addUser(confirmation));
//       dispatch(addPhoneNumber(phone));
//       dispatch(changeStateFalse());
//       setShowCaptcha(false);
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
//       console.log(error);
//     } finally {
//       setIsButtonDisabled(true);
//     }
//   };

//   return (
//     <div>
//       <div className="phone-container">
//         <div className="phone-title">OTP Authentication</div>
//         <div className="phone-subcontainer">
//           <div className="phone-filed">
//             <PhoneInput
//               country={"in"}
//               value={phone}
//               onChange={setPhone}
//               placeholder="+91 xxxxx-xxxxx"
//               className="mobile"
//             />
//           </div>
//           <div className="phone-btn">
//             <button
//               onClick={() => sendOTP()}
//               id="signup-btn"
//               disabled={isButtonDisabled}
//             >
//               <span>{isButtonDisabled ? "Sending..." : "Send SMS"}</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {showCaptcha && <div id="recaptcha"></div>}
//     </div>
//   );
// };

// export default Send;




import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { addPhoneNumber, addUser, changeStateFalse } from "./otpSlice";
import toast from "react-hot-toast";

const Send = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [recaptcha, setRecaptcha] = useState(null);

  const [showCaptcha, setShowCaptcha] = useState(true);

  useEffect(() => {
    let recaptchaVerifier;
    recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
      size: "invisible",
    });
    setRecaptcha(recaptchaVerifier);
  }, []);

  const sendOTP = async () => {
    try {
      sessionStorage.setItem('phoneNum', phone)
      console.log('Phone number for sending otp:', phone);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
    if (phone === "") {
      toast.error("please enter a phone number");
      return;
    }
    if (isButtonDisabled) {
      return;
    }
    try {
      setIsButtonDisabled(true);
      const confirmation = await signInWithPhoneNumber(
        auth,
        "+" + phone,
        recaptcha
      );
      toast.success("otp sended successfully");
      dispatch(addUser(confirmation));
      dispatch(addPhoneNumber(phone));
      dispatch(changeStateFalse());
      setShowCaptcha(false);
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
      console.log(error);
    } finally {
      setIsButtonDisabled(true);
    }
  };

  return (
    <div>
      <div className="phone-container">
        <div className="phone-title">OTP Authentication</div>
        <div className="phone-subcontainer">
          <div className="phone-filed">
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={setPhone}
              placeholder="+91 xxxxx-xxxxx"
              className="mobile"
            />
          </div>
          <div className="phone-btn">
            <button
              onClick={() => sendOTP()}
              id="signup-btn"
              disabled={isButtonDisabled}
            >
              <span>{isButtonDisabled ? "Sending..." : "Send SMS"}</span>
            </button>
          </div>
        </div>
      </div>

      {showCaptcha && <div id="recaptcha"></div>}
    </div>
  );
};

export default Send;

import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import LocomotiveScroll from 'locomotive-scroll';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";



const Login = () => {
    const locomotiveScroll = new LocomotiveScroll();
    console.log(locomotiveScroll)

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const email = useRef(null);
    const password = useRef(null);
    const username = useRef(null);





    const handleButtonClick = () => {


        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message)


        if (message) return;

        // Sign /signUp

        if (!isSignInForm) {

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: username.current.value, photoURL: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww"
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = user;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        navigate('/browse')
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + errorMessage)

                });

        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    navigate('/browse')

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
    }

    const toggleSignInForm = () => {

        setIsSignInForm(!isSignInForm);

    }


    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_medium.jpg" alt="" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} action="" className="w-3/12 absolute p-20 bg-black my-36 mx-auto right-0 left-0 text-white rounded-sm bg-opacity-85">
                <h1 className="font-bold text-4xl py-4 tracking-tight">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignInForm && <input
                        ref={username}
                        type="text"
                        placeholder="Username"
                        className="outline outline-2 outline-offset-2 input rounded-sm w-full max-w-xl my-4 bg-[#293240] text-lg" />

                }
                <input
                    ref={email}
                    type="email"
                    placeholder="Email"
                    className="outline outline-2 outline-offset-2 input rounded-sm  w-full max-w-xl my-4 bg-[#293240] text-lg" />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="outline outline-2 outline-offset-2 input rounded-sm w-full max-w-xl my-4 bg-[#293240] text-lg" />

                <p className="text-red-500 text-lg p-2 font-semibold">{errorMessage}</p>
                <button className="p-2 my-4 bg-[#e50914] w-[17vw] text-lg font-semibold rounded-sm" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <div className="flex text-lg gap-2 my-10 ">
                    <h1 className="text-slate-400">{isSignInForm ? "New to Netflix?" : "Already registered?"}</h1>
                    <h1 className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "Sign up Now" : "Sign In Now"}</h1>
                </div>
            </form>

        </div>
    )
}

export default Login

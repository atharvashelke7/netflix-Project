import { useState } from "react"
import Header from "./Header"


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {

        setIsSignInForm(!isSignInForm);

    }


    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_medium.jpg" alt="" />
            </div>
            <form action="" className="w-3/12 absolute p-20 bg-black my-36 mx-auto right-0 left-0 text-white rounded-sm bg-opacity-85">
                <h1 className="font-bold text-4xl py-4 tracking-tight">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {
                    !isSignInForm && <input
                        type="text"
                        placeholder="Username"
                        className="outline outline-2 outline-offset-2 input rounded-sm w-full max-w-xl my-4 bg-[#293240] text-lg" />

                }

                <input type="email" placeholder="Email" className="outline outline-2 outline-offset-2 input rounded-sm  w-full max-w-xl my-4 bg-[#293240] text-lg" />

                <input
                    type="password"
                    placeholder="Password"
                    className="outline outline-2 outline-offset-2 input rounded-sm w-full max-w-xl my-4 bg-[#293240] text-lg" />


                <button className="p-2 my-4 bg-[#e50914] w-[17vw] text-lg font-semibold rounded-sm">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <div className="flex text-lg gap-2 my-10 ">
                    <h1 className="text-slate-400">{isSignInForm ? "New to Netflix?" : "Already registered?"}</h1>
                    <h1 className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "Sign up Now" : "Sign In Now"}</h1>
                </div>
            </form>

        </div>
    )
}

export default Login

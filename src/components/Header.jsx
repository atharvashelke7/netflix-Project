import { IoMdArrowDropdown } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {

        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {

            navigate('/error')
            console.log(error)
        });

    }


    return (
        <div className="absolute px-16 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img className="w-48 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
            {user && <div className="flex p-3"><img className="w-10 h-10 rounded-sm" src={user?.photoURL} alt="" />
                <button><div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="p-2"><IoMdArrowDropdown /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-zinc-900 rounded-box z-[1] w-52 p-2 shadow text-white font-bold">
                        <li onClick={handleSignOut}><a>SIGN OUT</a></li>
                    </ul>
                </div></button>
            </div>}
        </div>
    )
}

export default Header

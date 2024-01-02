import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("LSLKSJDJ");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li className="menu-items">Home</li>
                    <li className="menu-items">About Us</li>
                    <li className="menu-items">Contact Us</li>
                    <li className="menu-items">Cart</li>
                    <li className="login-list"><button className="login"
                    onClick={() => {
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login")
                    }}>
                        {btnNameReact}
                    </button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div class="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div class="app">
            <Header />
            {/* <Body /> */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)


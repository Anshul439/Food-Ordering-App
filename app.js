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

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/durpa8rlz2innph3xwgh"></img>
            <h3 className="res-name">Barbeque Nation</h3>
            <h4 className="cuisine">North Indian, Barbecue</h4>
            <div className="rating">
                <img className="star" src="https://www.freeiconspng.com/thumbs/stars-png/download-png-image-star-png-image-1.png"></img>
                <h4>4.2</h4>
                <h4 className="time">•   22 mins</h4>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div class="app">
            <Header />
            <Body /> 
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)


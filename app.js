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

const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img className="res-logo" src={props.resLogo}></img>
            <h3 className="res-name">{props.resName}</h3>
            <h4 className="cuisine">{props.cuisine}</h4>
            <div className="rating">
                <img className="star" src="https://www.freeiconspng.com/thumbs/stars-png/download-png-image-star-png-image-1.png"></img>
                <h4>{props.star}</h4>
                <h4 className="time">• {props.time}</h4>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard
                    resLogo = "https://b.zmtcdn.com/data/pictures/chains/6/18694246/ce89a2b9888ae02bc47cb3643bfd5738.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                    resName = "Barbeque Nation"
                    cuisine = "North Indian, Barbecue"
                    star = "4.2"
                    time = "22 mins"
                />
                <RestaurantCard
                    resLogo = "https://b.zmtcdn.com/data/pictures/chains/3/18694083/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg?output-format=webp"
                    resName = "Burger King"
                    cuisine = "Burgers, American"
                    star = "4.3"
                    time = "21 mins"
                />
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


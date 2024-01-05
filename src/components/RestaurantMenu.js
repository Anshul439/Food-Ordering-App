import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId=125662&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();

        console.log(json);
        setResInfo(json.data)
    }

    if(resInfo === null) return <Shimmer /> 

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h3>Cost for two</h3>
            <h2>Menu</h2>

            <ul>
                {itemCards.map((item) => (
                <li>{item.card.info.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default RestaurantMenu;
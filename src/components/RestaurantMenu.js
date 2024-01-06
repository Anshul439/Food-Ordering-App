import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Params, useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);

        const json = await data.json();

        console.log(json);
        setResInfo(json.data)
    }

    if(resInfo === null) return <Shimmer /> 

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || resInfo?.cards[0]?.card?.card?.info;

    // const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card;

    // console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h3>Cost for two</h3>
            <h2>Menu</h2>

            <ul>
                {/* {itemCards.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name} - {"Rs. "} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                ))} */}
            </ul>

        </div>
    )
}

export default RestaurantMenu;
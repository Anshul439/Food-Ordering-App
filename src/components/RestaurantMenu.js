import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);


    if(resInfo === null) return <Shimmer /> 

    const { name, cuisines, costForTwoMessage, costForTwoDisplayMessage } = resInfo?.cards[2]?.card?.card?.info || resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>

            <ul>
                {itemCards.map(item => <li>{item.card.info.name} - Rs. {item.card.info.price / 100 || Rs. item.card.info.defaultPrice / 100}</li>)}
            </ul>

        </div>
    )
}

export default RestaurantMenu;
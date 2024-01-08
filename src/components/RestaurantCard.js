import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="res-name">{name}</h3>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>
      <div className="rating">
        <img
          className="star"
          src="https://www.freeiconspng.com/thumbs/stars-png/download-png-image-star-png-image-1.png"
        ></img>
        <h4>{avgRating}</h4>
        <h4 className="time">• {sla.deliveryTime} mins</h4>
      </div>
      <div>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

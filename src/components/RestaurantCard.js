import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[220px] bg-gray-200 rounded-lg h-[450px] hover:bg-gray-300">
      <img className="w-[200px] h-[150px] rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <div className="rating flex">
        <img
          className="w-[20px] mr-[5px]"
          src="https://www.freeiconspng.com/thumbs/stars-png/download-png-image-star-png-image-1.png"
        ></img>
        <h4 className="mr-[5px]">{avgRating}</h4>
        <h4 className="time">• {sla.deliveryTime} mins</h4>
      </div>
      <h4 className="cuisine text-slate-800 text-sm">{cuisines.join(", ")}</h4>
      <br></br>
      <div>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

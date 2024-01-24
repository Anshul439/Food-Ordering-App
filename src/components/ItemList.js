import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              {item.card.info.isBestseller === true ? <img src="https://www.freeiconspng.com/uploads/best-seller-icon-png-2.png" className="w-12"></img> : ""}
              <span>{item.card.info.isVeg === 1 ? <img src="https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png" className="w-4"></img> : <img src="https://www.pngkey.com/png/full/245-2459071_non-veg-icon-non-veg-symbol-png.png" className="w-4"></img>}</span>
              <span>{item.card.info.name} </span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-1 mx-8 my-[86px] rounded-lg bg-white text-green-600 shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-28"></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

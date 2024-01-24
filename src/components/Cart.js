import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

  return (
    <div className="text-center m-4 p-4">
      <div className="flex justify-between"><h1 className="text-3xl font-bold ml-[703px]">Cart</h1><button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button></div>
      <div className="w-6/12 m-auto">
        
        {cartItems.length === 0 && (<h1 className="font-bold">Cart is empty</h1>)}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

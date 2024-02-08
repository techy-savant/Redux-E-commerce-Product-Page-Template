import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/cart/Modal";

const CartContainer = () => {
    const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  //Handlers
  const clearCartHandler = ()=>{
    // dispatch(clearCart());
    dispatch(openModal());
  }

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCartHandler}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;

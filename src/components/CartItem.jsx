import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, toggle } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { id, img, title, price, amount } = props.item;
  const dispatch = useDispatch();

  //Handlers
  const removeHandler = ()=>{
    dispatch(removeItem(id));
  }
  const increaseHandler = ()=>{
    dispatch(toggle({'id': id, 'option': 'up'}));
  }
  const decreaseHandler = ()=>{
    dispatch(toggle({'id': id, 'option': 'down'}));
  }

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={removeHandler}
        >
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={increaseHandler}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={decreaseHandler}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;

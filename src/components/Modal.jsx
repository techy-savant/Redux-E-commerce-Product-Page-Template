import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../features/cart/Modal";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const cancelHandler = () => {
    dispatch(closeModal());
  };

  const confirmHandler = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={confirmHandler}
          >
            Confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={cancelHandler}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;

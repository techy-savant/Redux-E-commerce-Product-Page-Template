import { useEffect } from "react";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  console.log(isOpen);

  return (
    <main>
      {isOpen && <Modal />}

      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;

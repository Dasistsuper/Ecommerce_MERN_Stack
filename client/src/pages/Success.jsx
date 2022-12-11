import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { Link } from 'react-router-dom';
import Confetti from "react-confetti";
import "./success.css";

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);


  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);


  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, [])

  const handleShow = toggle => {
    setShow(toggle);
  }

  return (
    <div>
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Awesome! Your order is being prepared...`}
      <Link to="/">
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </Link>
      
    </div>
        <div
        onMouseEnter={() => handleShow(true)}
        onMouseLeave={() => handleShow(false)}
        className="confetti-wrap"
        ref={confettiRef}>
        <Confetti
          recycle={show}
          numberOfPieces={600}
          width={width}
          height={height}
        />
      </div>
      </div>
  );
};

export default Success;
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/layout/Header/Header";
import Footer from "./Component/layout/Footer/Footer";
import Home from "./Component/Home/Home";
import ProductDetails from "./Component/Product/ProductDetails.js";
import Products from "./Component/Product/Products";
import Search from "./Component/Product/Search";
import LoginSignUp from "./Component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import UserOptions from "./Component/layout/Header/UserOptions";
import Profile from "./Component/User/Profile";
import UpdateProfile from "./Component/User/UpdateProfile";
import UpdatePassword from "./Component/User/UpdatePassword";
import ForgotPassword from "./Component/User/ForgotPassword";
import ResetPassword from "./Component/User/ResetPassword";
import Cart from "./Component/Cart/Cart";
import Shipping from "./Component/Cart/Shipping";
import ConfirmOrder from "./Component/Cart/ConfirmOrder";
import OrderSuccess from "./Component/Cart/OrderSuccess";
import Payment from "./Component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import MyOrders from "./Component/Order/MyOrders";
import OrderDetails from "./Component/Order/OrderDetails";
import Dashboard from "./Component/Admin/Dashboard";
import ProductList from "./Component/Admin/ProductList";
import NewProduct from "./Component/Admin/NewProduct";
import UpdateProduct from "./Component/Admin/UpdateProduct";
import OrderList from "./Component/Admin/OrderList";
import ProcessOrder from "./Component/Admin/ProcessOrder";
import UsersList from "./Component/Admin/UsersList";
import UpdateUser from "./Component/Admin/UpdateUser";
import NotFound from "./Component/layout/NotFound/NotFound";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      {/* {isAuthenticated && <UserOptions user={user} />} */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/products/:keyword" exact element={<Products />} />

        <Route path="/about" exact element={<h1>about</h1>} />
        <Route path="/contact" exact element={<h1>contact</h1>} />

        <Route path="/search" exact element={<Search />} />

        <Route path="/login" exact element={<LoginSignUp />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/password/forgot" exact element={<ForgotPassword />} />
        <Route
          path="/password/reset/:token"
          exact
          element={<ResetPassword />}
        />

        {isAuthenticated && (
          <Route path="/account" exact element={<Profile />} />
        )}

        {isAuthenticated && (
          <Route path="/me/update" exact element={<UpdateProfile />} />
        )}
        {isAuthenticated && (
          <Route path="/password/update" exact element={<UpdatePassword />} />
        )}
        {isAuthenticated && (
          <Route path="/shipping" exact element={<Shipping />} />
        )}
        {isAuthenticated && (
          <Route path="/order/confirm" exact element={<ConfirmOrder />} />
        )}
        {isAuthenticated && (
          <Route path="/success" exact element={<OrderSuccess />} />
        )}
        {isAuthenticated && (
          <Route path="/orders" exact element={<MyOrders />} />
        )}
        {isAuthenticated && (
          <Route path="/order/:id" exact element={<OrderDetails />} />
        )}
        {isAuthenticated && user.role === "admin" && (
          <Route path="/admin/dashboard" exact element={<Dashboard />} />
        )}
        {isAuthenticated && user.role === "admin" && (
          <Route path="/admin/products" exact element={<ProductList />} />
        )}
        {isAuthenticated && user.role === "admin" && (
          <Route path="/admin/product" exact element={<NewProduct />} />
        )}
        {isAuthenticated && user.role === "admin" && (
          <Route path="/admin/product/:id" exact element={<UpdateProduct />} />
        )}
        {isAuthenticated && user.role === "admin" && (
          <Route path="/admin/orders" exact element={<OrderList />} />
        )}
        {isAuthenticated && user.role === "admin" && (
          <Route path="/admin/order/:id" exact element={<ProcessOrder />} />
        )}
        {isAuthenticated && user.role === "admin" && (
          <Route path="/admin/users" exact element={<UsersList />} />
        )}
        {isAuthenticated && user.role === "admin" && (
          <Route path="/admin/user/:id" exact element={<UpdateUser />} />
        )}
        {/* {isAuthenticated && user.role === "admin" && (
          <Route path="/admin/reviews" exact element={<ProductReviews />} />
        )} */}
        {stripeApiKey && isAuthenticated && (
          <Route
            path="/process/payment"
            exact
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            }
          />
        )}

        <Route exact element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

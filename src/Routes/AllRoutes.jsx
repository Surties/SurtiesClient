import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../Components/Navbar";

import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";
import News from "../Pages/News";
import Career from "../Pages/Career";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Admin from "../Pages/Admin";
import PrivateRoutes from "../Components/PrivateRoutes";
import UnAuthorized from "../Components/UnAuthorized";
import DetailNews from "../Pages/DetailNews";

import CatagoryPage from "../Pages/CatagoryPage";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <News />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoutes>
              <>
                <Navbar />
                <Admin />
              </>
            </PrivateRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <Signup />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <Navbar />
              <ContactUs />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <Navbar />
              <AboutUs />
            </>
          }
        />
        <Route
          path="/career"
          element={
            <>
              <Navbar />
              <Career />
            </>
          }
        />
        <Route
          path="/news"
          element={
            <>
              <Navbar />
              <News />
            </>
          }
        />
        <Route
          path="/news/id/:id"
          element={
            <>
              <Navbar />
              <DetailNews />
            </>
          }
        />
        <Route
          path="/unauthorized"
          element={
            <>
              <UnAuthorized />
            </>
          }
        />
        <Route
          path="/news/catagory/:catagory"
          element={
            <>
              <Navbar />
              <CatagoryPage />
            </>
          }
        />
        {/* <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<>Not Found 404 </>} /> */}
      </Routes>
    </>
  );
}

export default AllRoutes;

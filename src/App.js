import React from "react";
import {
  About,
  Footer,
  Header,
  Music,
  FormikContact,
} from "./container";
import { Navbar } from "./components";
import {initialiseAnalytics} from "./GoogleAnalytics";
import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

initialiseAnalytics()

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path=""
            element={
              <>
                <Header />
              </>
            }
          />
          <Route
            exact
            path="music"
            element={
              <>
                <Music />
              </>
            }
          />
          <Route
            exact
            path="about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            exact
            path="contact"
            element={
              <>
                <FormikContact />
              </>
            }
          />
          {/* <Route path="*" element={ <Navigate to="/" /> } /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

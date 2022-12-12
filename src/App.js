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
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

initialiseAnalytics()

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
              </>
            }
          />
          <Route
            exact
            path="/music"
            element={
              <>
                <Music />
              </>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <>
                <FormikContact />
              </>
            }
          />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
};

export default App;

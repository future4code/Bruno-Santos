import React from "react";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../pages/ListTripsPage/ApplicationFormPage";
import LoginPage from "../pages/LoginPage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import CreateTripPage from "../pages/AdminHomePage/CreateTripPage";
import TripDetailsPage from "../pages/AdminHomePage/TripDetailsPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/trips"}>
          <ListTripsPage />
        </Route>
        <Route exact path={"/application"}>
          <ApplicationFormPage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/admin"}>
          <AdminHomePage />
        </Route>
        <Route exact path={"/create"}>
          <CreateTripPage />
        </Route>
        <Route exact path={"/details"}>
          <TripDetailsPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;

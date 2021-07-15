import React from "react";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/publicPages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../pages/publicPages/applicationFormPage/ApplicationFormPage";
import LoginPage from "../pages/adminPages/loginPage/LoginPage";
import AdminHomePage from "../pages/adminPages/adminHomePage/AdminHomePage";
import CreateTripPage from "../pages/adminPages/createTripPage/CreateTripPage";
import TripDetailsPage from "../pages/adminPages/tripDetailsPage/TripDetailsPage";
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
        <Route exact path={"/details/:id"}>
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

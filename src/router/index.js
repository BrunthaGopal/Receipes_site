import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preloader from "../components/Preloader";
import About from "../views/About";
import Contact from "../views/Contact";
import CareerPage from "../views/CareerPage";

// Format
const Home = lazy(() => import("../views/Home"));
const MealInfo = lazy(() => import("../views/MealInfo"));

const SearchResult = lazy(() => import("../views/SearchResult"));
const SearchBar = lazy(() => import("../components/SearchBar"));
const Ingredients = lazy(() => import("../views/IngredientMeal"));
const Footer = lazy(() => import("../components/Footer"));


const AppRouter = () => {
  return (
    <Router basename={"/"}>
      <Suspense fallback={<Preloader />}>
        <SearchBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/meal/:id" component={MealInfo} />Y
          <Route path="/search/q=:param" component={SearchResult} />
          <Route path="/ingredients/:id" component={Ingredients} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/career" component={CareerPage} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default AppRouter;

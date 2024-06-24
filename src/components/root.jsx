import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import NoMatch from "./Pages/NoMatch";
import Home from "./Pages/App";
import Details from "./Pages/Details";

export default function Root() {
  const routes = [
    { path: "/", Component: Home },
    { path: "/projects/:id", Component: Details },
    { path: "*", Component: NoMatch },
  ];

  return (
    <Router>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path} Component={Component} />
        ))}
      </Routes>
    </Router>
  );
}

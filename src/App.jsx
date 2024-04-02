import React, { Suspense } from "react";
// import MainRoute from "./router/router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardPage from "./components/cardpage/cardpage";
import Home from "./Home/home";


export default function App() {
  return (
    <Router>
      <Suspense
        fallback={<div className="font-bold text-2xl p-4 w-full h-screen bg-slate-400 flex justify-center items-center ">LOADING..</div>}
      >
        <Switch>
          <Route path="/CardPage" element={<CardPage />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<p>404 error - page not found!</p>} />
        </Switch>
      </Suspense>
    </Router>
  );
}

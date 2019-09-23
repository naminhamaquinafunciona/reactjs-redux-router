

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from '../pages/App'
import About from '../pages/About'

function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={Index} />
        <Route path="/sobre" exact component={About} />
    </Router>
  );
}

export default AppRouter;

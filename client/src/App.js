import "./App.css";
import "./style/global.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import CreateRecipe from "./pages/CreateRecipe";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recipe/:id">
          <RecipePage />
        </Route>
        <Route path="/create/">
          <CreateRecipe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import Header from "../navi/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartDetails from "../cart/CartDetails";
import DashBoard from "./Dashboard";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Container>
          <Switch>
            <Route path="/" exact component={DashBoard}></Route>
            <Route path="/cart" exact component={CartDetails}></Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;


import "../stylesheets/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Landing from "../Landing";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/card">
          <Header />
          <Main />
          <Footer />
        </Route>
      </Switch>
    </>
  );
}
export default App;

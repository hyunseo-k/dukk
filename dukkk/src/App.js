//import Button from "./Button";
//import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import NewHome from "./routes/NewHome";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id" component={Detail} />
        <Route path="/" component={NewHome} exact />
        <Route path="/movie" component={Home} />
      </Switch>
    </Router>
  );
}
//<Route path="/movie/:id" component={Detail} />
//<Route path="/" component={NewHome} exact />
//<Route path="/movie" component={Home} />
export default App;

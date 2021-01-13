import Home from '../src/component/home/Home';
import Practice from "../src/component/home/Practice";
import Codeforces from "../src/component/online_judge/codeforces/Codeforces"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/codeforces" component={Codeforces} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

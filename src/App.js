import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import CodeProjectHolder from "./components/CodeProjectHolder";
import RecordHolder from "./components/RecordHolder";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route exact path="/code-project">
          <CodeProjectHolder />
        </Route>
        <Route exact path="/record">
          <RecordHolder />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

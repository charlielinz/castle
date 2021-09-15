import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import ExperienceView from "./components/ExperienceView";
import SkillsView from "./components/SkillsView";
import ProfolioView from "./components/ProfolioView";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route exact path="/experience">
          <ExperienceView />
        </Route>
        <Route exact path="/skills">
          <SkillsView />
        </Route>
        <Route exact path="/profolio">
          <ProfolioView />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

import "./App.css";
import {
  Home,
  About,
  Skills,
  Education,
  Projects,
  Contact,
} from "./pages/index";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 app__sidebar">
              <Sidebar />
            </div>
            <div className="col-lg-9 app__content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/about">
                  <About />
                </Route>

                <Route path="/skills">
                  <Skills />
                </Route>

                <Route path="/education">
                  <Education />
                </Route>

                <Route path="/projects">
                  <Projects />
                </Route>

                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

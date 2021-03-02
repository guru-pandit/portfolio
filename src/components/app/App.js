import "./App.css";
// import { Home, About, Skills, Education, Projects, Contact } from "@pages";
// import Sidebar from "../sidebar/Sidebar";
import { Sidebar } from "@components/";
import { Home, About, Skills, Education, Projects, Contact } from "@pages/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 app__sidebar">
              <Sidebar />
            </div>
            <div className="col-md-9 app__content">
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

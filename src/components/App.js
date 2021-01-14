import "./App.css";
import {
  Home,
  About,
  Skills,
  Education,
  Projects,
  Contact,
} from "../pages/index";

function App() {
  return (
    <div className="app">
      <div className="app__sidebar">
        <h1>Sidebar</h1>
      </div>
      <div className="app__content">
        <h1>Content</h1>
        <Home />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

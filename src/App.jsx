import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages";
import { Suspense, lazy } from "react";
// import {Home, Projects, Contact, About} from "./pages"
import "./input.css";

// const Home = lazy(() => import('./pages/Home'));
// const Contact = lazy(() => import('./pages/Contact'));
// const About = lazy(() => import('./pages/About'));
// const Projects = lazy(() => import('./pages/Projects'));

const LazyAbout = lazy(() => import("./pages/About"));
const LazyProjects = lazy(() => import("./pages/Projects"));
const LazyContact = lazy(() => import("./pages/Contact"));



const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/connect" element={<Contact />} />
        </Routes>
      </Router> */}
      {/* <Navbar /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyAbout />
              </Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyProjects />
              </Suspense>
            }
          />
          <Route
            path="connect"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyContact />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;

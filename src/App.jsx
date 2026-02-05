import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages";
import { Suspense, lazy } from "react";
import "./input.css";

const LazyAbout = lazy(() => import("./pages/About"));
const LazyProjects = lazy(() => import("./pages/Projects"));
const LazyContact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/3dportfolio/" element={<Home />} />
          <Route
            path="/3dportfolio/about"
            element={
              <Suspense
                fallback={
                  <div className="w-full h-screen flex justify-center items-center">
                    <div className="loader"></div>
                  </div>
                }
              >
                <LazyAbout />
              </Suspense>
            }
          />
          <Route
            path="/3dportfolio/projects"
            element={
              <Suspense
                fallback={
                  <div className="w-full h-screen flex justify-center items-center">
                    <div className="loader"></div>
                  </div>
                }
              >
                <LazyProjects />
              </Suspense>
            }
          />
          <Route
            path="/3dportfolio/connect"
            element={
              <Suspense
                fallback={
                  <div className="w-full h-screen flex justify-center items-center">
                    <div className="loader"></div>
                  </div>
                }
              >
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

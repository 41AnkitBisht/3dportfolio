import ReactDOM from "react-dom/client";
import "./input.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, Projects } from "./pages";
import Navbar from "./components/Navbar";
import App from "./App";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Navbar />}>
//       <Route index element={<Home />} />
//       <Route path="about" lazy={() => import("./pages/About")} />
//       <Route path="projects" lazy={() => import("./pages/Projects")} element={<Projects />} />
//       <Route path="connect" lazy={() => import("./pages/Contact")} />
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );


ReactDOM.createRoot(document.getElementById("root")).render(<App />)
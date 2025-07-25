import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", index: true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <h5 className="vh-100">not found works</h5> },
      { path: "", element: <h5 className="vh-100">not found works</h5> },
    ],
  },
  {
    path: "layout",
    element: <Layout />,
    children: [
      { path: "", index: true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <h5 className="vh-100">not found works</h5> },
      { path: "", element: <h5 className="vh-100">not found works</h5> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

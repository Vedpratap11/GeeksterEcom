import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import First from "./pages/First";
import SingleProduct from "./pages/SingleProduct";
import About from "./pages/About";
import Contact from "./pages/COntact";
import Cart from "./pages/Cart.jsx"
import Brand from "./components/Brand.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <First />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element:<Cart/>
      },
      {
        path:"/product/brand/:brand",
        element: <Brand/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

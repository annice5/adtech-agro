import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/landing";
import About from "./pages/landing/components/about";
import Product from "./pages/landing/components/product";
import Showcase from "./pages/landing/components/services";
import Blog from "./pages/landing/components/testimonials";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      children: [
        {
          path: "about",
          element: <About />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "showcase",
          element: <Showcase />,
        },

        {
          index: "blog",
          element: <Blog />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

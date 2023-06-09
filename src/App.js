import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";

import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.scss"

const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>  {/* Represent Different Pages, yang beda. Kan Navbar dan Footer mah sama selalu, tapi content beda*/}
      <Footer/>
    </div>
  )

}

// Normalnya gini
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>
//   },
//   {
//     path: "/products/:id", /* kaya category gitu */
//     element: <Products/>
//   },
//   {
//     path: "/product/:id",
//     element: <Product/>
//   },
// ]);

// Pake Outlet
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element: [<Home/>, <ScrollRestoration/>]  // ini bug fix, soalnya pas klik link, page nya muncul di tengah, bukan dari atas.
      },
      {
        path:"/products/:slug",
        element: [<Products/>, <ScrollRestoration/>]
      },
      {
        path:"/product/:id",
        element: [<Product/>, <ScrollRestoration/>]
      }
    ]
  }
  
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

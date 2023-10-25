import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Users from "../pages/Users";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Layout from "../layout";
import Profile from "../pages/Profile";
import SingleProduct from "../pages/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/users",
        element: <Users />,
        name: "Users",
        icon: "bx bxs-user-circle",
      },
      {
        path: "/products",
        element: <Products />,
        name: "Products",
        icon: "bx bx-spreadsheet",
      },
      {
        path: "/categories",
        element: <Categories />,
        name: "Categories",
        icon: "bx bxs-category-alt",
      },
      {
        path: "/profile",
        element: <Profile />,
        name: "Profile",
        icon: "bx bxs-user-circle",
      },
      {
        path: "/products/:id",
        name: "SingleProduct",
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;

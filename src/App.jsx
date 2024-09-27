import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";

import Home from "../src/pages/Home";
import Thanks from "../src/pages/Thanks";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/gracias", element: <Thanks /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

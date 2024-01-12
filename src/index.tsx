import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { CakeProvider } from "./contexts/cakeContext";
import "./index.css";
import IndexPage from "./IndexPage";
import RootLayout from "./RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<IndexPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CakeProvider>
      <RouterProvider router={router} />
    </CakeProvider>
  </React.StrictMode>
);

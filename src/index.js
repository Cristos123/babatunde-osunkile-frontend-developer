import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./service/store";
import RocketDetails from "./component/RocketDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchResult } from "./component/SearchResult";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <Router>
        <Routes>
          <Route index path="/" element={<App />} />
          <Route index path="/rockets/:id" element={<RocketDetails />} />
          <Route index path="/rockets/" element={<SearchResult />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

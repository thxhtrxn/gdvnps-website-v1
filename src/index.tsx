/* @refresh reload */
import { render } from "solid-js/web";
import { lazy } from "solid-js";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";
import Home from "./pages";

const Download = lazy(() => import("./pages/download"));
const NotFound = lazy(() => import("./pages/404"));

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/download" component={Download} />
      <Route path="*" component={NotFound} />
    </Router>
  ),
  root!,
);

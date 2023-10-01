/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route, Routes, A } from "@solidjs/router";

import "./index.css";
import App from "./App";
import Home from "./Home";
import Homeless from "./Homeless";
import Store from "./Store";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error("Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?");
}

render(
    () => (
        <Router>
            <Routes>
                <Route path="/" component={App} />
                <Route path="/home" component={Homeless} />
                <Route path="/home/:name" component={Home} />
                <Route path="/store" component={Store} />
            </Routes>
        </Router>
    ),
    root
);

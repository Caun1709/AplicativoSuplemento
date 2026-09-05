import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Teste from "./Teste";
const root = createRoot(document.getElementById("root"));
root.render(
    <>
    <Teste/>
    </>
)
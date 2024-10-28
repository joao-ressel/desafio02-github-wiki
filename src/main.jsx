import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import GlobalStyles from './styles.js'
import { Home } from "./pages/Home/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>
);

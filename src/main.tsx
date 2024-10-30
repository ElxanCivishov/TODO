import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { KanbanProvider } from "./context/kanban/KanbanContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KanbanProvider>
      <App />
    </KanbanProvider>
  </StrictMode>
);

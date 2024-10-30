import { Toaster } from "react-hot-toast";
import "./App.css";
import KanbanBoard from "./components/kanban";

function App() {
  return (
    <div className="main">
      <KanbanBoard />
      <Toaster />
    </div>
  );
}

export default App;

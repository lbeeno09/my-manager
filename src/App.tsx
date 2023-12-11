import { useState } from "react";
import "./App.css";
import Navigation from "./Navigation.tsx";
import Pomodoro from "./Pomodoro.tsx";
import ToDo from "./Todo.tsx";

function App() {
  const [activeView, setActiveView] = useState("timer");

  return (
    <main className="container">
      <Navigation onClick={setActiveView} />
      <div style={{ display: activeView === "timer" ? "contents" : "none" }}>
        <Pomodoro />
      </div>
      <div style={{ display: activeView === "todo" ? "contents" : "none" }}>
        <ToDo />
      </div>
    </main >
  );
}

export default App;

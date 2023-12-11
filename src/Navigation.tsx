import React from "react";

interface NavigationProps {
  onClick: (dest: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onClick }) => {
  return (
    <nav className="navigation-bar">
      <button onClick={() => { onClick("timer") }}>Timer</button>
      <button onClick={() => { onClick("todo") }}>ToDo</button>
    </nav>
  );
}

export default Navigation;

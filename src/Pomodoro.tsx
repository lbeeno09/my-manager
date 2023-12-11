import { useState, useEffect } from "react";
import "./Pomodoro.css";

function Pomodoro() {
  const workingSeconds = 45 * 60;
  const restingSeconds = 15 * 60
  const [seconds, setSeconds] = useState(workingSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorking, setIsWorking] = useState(false);

  useEffect(() => {
    let intervalId: number;
    if (isRunning && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setTimeout(() => {
        setSeconds(isWorking ? restingSeconds : workingSeconds);
        setIsWorking((prevIsWorking: boolean) => !prevIsWorking);
      }, 1000);
    }

    return (() => clearInterval(intervalId));
  }, [isRunning, seconds]);

  const handleToggle = () => {
    setIsRunning((prevIsRunning: boolean) => !prevIsRunning);
  }

  const handleReset = () => {
    setSeconds(workingSeconds);
    setIsRunning(false);
  }

  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  let percentage: number;
  if (isWorking) {
    percentage = ((workingSeconds - seconds) / workingSeconds) * 100;
  } else {
    percentage = ((restingSeconds - seconds) / restingSeconds) * 100;
  }
  const strokeDashoffset = (circumference * (100 - percentage)) / 100;

  return (
    <div className="timer">
      <svg height={radius * 2} width={radius * 2} className="clock">
        <circle
          cx={radius}
          cy={radius}
          r={radius - 10}
          fill="transparent"
          stroke="#ccc"
          strokeWidth="20"
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - 10}
          fill="transparent"
          stroke="#4caf50"
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
        <text className="timer-symbol" x={radius} y={radius} textAnchor="middle" alignmentBaseline="middle" fill="#fff" fontSize="70" fontWeight="bold" onClick={handleToggle}>
          {isRunning ? "\u23F8" : "\u23F5"}
        </text>
      </svg>
      <div className="timer-text">
        <h1>{isWorking ? "Work" : "Rest"} ends in: {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? "0" : ""}{seconds % 60}</h1>
      </div>
      <div className="control">
        <button onClick={handleToggle}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Pomodoro;

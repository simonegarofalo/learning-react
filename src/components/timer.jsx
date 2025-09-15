import { Link } from "react-router";
import { DEFAULT_ATHLETE } from "/data/athletes.js";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext.jsx";

import openNew from "/assets/icons/open-new.svg";

function formatTime(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const centiseconds = Math.floor((ms % 1000) / 10);

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    ":" +
    String(centiseconds).padStart(2, "0")
  );
}

function Timer({ athlete = DEFAULT_ATHLETE, ...props }) {
  const { theme } = useTheme();
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimeRef = useRef(null);
  const accumulatedTimeRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      if (startTimeRef.current === null) {
        startTimeRef.current = Date.now();
      }

      intervalRef.current = setInterval(() => {
        setElapsed(
          Date.now() - startTimeRef.current + accumulatedTimeRef.current
        );
      }, 80);
    } else {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning]);

  return (
    <div className={`timer-wrapper ${theme}`}>
      <img src={athlete.avatar} alt={athlete.name} className="athlete-avatar" />
      <div>
        <h3>{athlete.name}</h3>
        <Link to={`/athletes/${athlete.slug}`}>
          <div className="view-profile-wrapper">
            <p className="view-profile">View profile</p>
            <img src={openNew} alt="open-new" className="open-new-icon" />
          </div>
        </Link>
      </div>
      <h3>{formatTime(elapsed)}</h3>
      <div className="button-wrapper">
        <button
          onClick={() => {
            setIsRunning(true);
            startTimeRef.current = Date.now();
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            accumulatedTimeRef.current += Date.now() - startTimeRef.current;
            startTimeRef.current = null;
          }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            setElapsed(0);
            setIsRunning(false);
            accumulatedTimeRef.current = 0;
            startTimeRef.current = null;
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;

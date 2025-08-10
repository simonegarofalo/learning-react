import {useState, useEffect, useRef} from 'react';

function Timer ({athlete = "Unknown", ...props}){
  // State to store the current count
  const [count, setCount] = useState(0);
  // State to control whether the timer is running
  const [isRunning, setIsRunning] = useState(false);
  // Stores the interval ID to prevent duplication
  const intervalRef = useRef(null);

  useEffect(() => {
    // If the timer is running and no interval is already set, start a new interval
    if (isRunning) {
      if (intervalRef.current !== null) return;
      // Set up the interval to increment count every millisecond
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 0.001);
      }, 1);
    } else {
      // If the timer is paused or reset, clear the interval
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // Cleanup function
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning]); // Dependency array

  return (
    <>
    <div className='timer-wrapper'>
      <h3>{athlete}</h3>
      <h4>{count.toFixed(3)}</h4>
      <div className="button-wrapper">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button
          onClick={() => {
            setCount(0);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
      </div>
    </>
  );
}

export default Timer;

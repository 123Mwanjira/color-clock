import { useEffect, useState } from "react";
import { format } from "date-fns";
import "./index.css";

// Main App component
function App() {

  // Store current date and time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update clock every second
  useEffect(() => {

    // Create interval timer
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(timer);

  }, []);

  return (
    <div className="app">

      {/* Clock container */}
      <div className="clock-container">

        {/* Title */}
        <h1 className="title">
          Dynamic Color Clock
        </h1>

        {/* Current date */}
        <p className="date">
          {format(currentTime, "EEEE, MMMM do yyyy")}
        </p>

        {/* Current time */}
        <h2 className="time">
          {format(currentTime, "hh:mm:ss a")}
        </h2>

      </div>
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";


function SecondsCounter({ hours, minutes, seconds }) {
  return (
    <div className="bigCounter">
    <div>
      <i class="far fa-clock"></i>
      {String(hours).padStart(2, "0")}:
      {String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}
    </div>
  </div>
  );
}

function Home() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  const hours = Math.floor(seconds / 3600); 
  const minutes = Math.floor((seconds % 3600) / 60); 
  const displaySeconds = seconds % 60; // 

  return <SecondsCounter hours={hours} minutes={minutes} seconds={displaySeconds} />;
}

export default Home;

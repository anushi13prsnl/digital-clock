// src/DigitalClock.js
import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  // State to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Function to update the time every second
    const updateClock = () => {
      setCurrentTime(new Date());
    };

    // Set an interval to call the updateClock function every second
    const intervalId = setInterval(updateClock, 1000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format the time to a readable format
  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div style={styles.clockContainer}>
      <h1 style={styles.clock}>{formatTime(currentTime)}</h1>
    </div>
  );
};

// Styles for the clock
const styles = {
  clockContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  clock: {
    fontSize: '48px',
  },
};

export default DigitalClock;

import { useState } from 'react';
import { useEffect } from 'react';
function TimeDate() {
  const [time , setTime] = useState(new Date());

  useEffect(() => {
    const IntervalId = setInterval( () => {
      setTime( new Date());
    })
    return () => {
      console.log('interval ended');
      clearInterval(IntervalId)
    }
  })

  return (
    <p className="lead">
      Time is {time.toLocaleTimeString()} And date is{" "}
      {time.toLocaleDateString()}{" "}
    </p>
  );
}

export default TimeDate;

import React, { useState } from "react";

import "./App.css";

const getNextWednessday = (date = new Date()) => {
  const dateCopy = new Date(date.getTime());

  const nextWednessday = new Date(
    dateCopy.setDate(
      dateCopy.getDate() + ((7 - dateCopy.getDay() + 3) % 7 || 7)
    )
  );

  nextWednessday.setHours(18, 30, 0);

  return nextWednessday;
};

const Time = (timeNow) => {
  const countDownDate = getNextWednessday(new Date()).getTime();
  const now = timeNow.timeNow.getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return (
    <div>
      <div className="fade"></div>
      <h1>Χρόνος για το επόμενο session!</h1>
      <div className="countbox">
        <p>
          {days} <span>Μέρες</span>
        </p>
        <p>
          {hours} <span>Ώρες</span>
        </p>
        <p>
          {minutes} <span>Λεπτά</span>
        </p>
        <p>
          {seconds} <span>Δευτερόλπετα</span>
        </p>
      </div>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const [timeNow, setTimeNow] = useState(now);
  const updatetime = () => {
    const newtime = new Date();
    setTimeNow(newtime);
  };
  setInterval(updatetime, 1000);

  return (
    <div className="App">
      <Time timeNow={timeNow} />
    </div>
  );
};

export default App;

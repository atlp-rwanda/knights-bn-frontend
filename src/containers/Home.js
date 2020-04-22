import React, { useEffect, useState } from 'react';
import '../assets/styles/styles.css';
import '../assets/styles/containers/landingPage.scss';

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2020-04-25') - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };}return timeLeft;};
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => { setTimeout(() => { setTimeLeft(calculateTimeLeft());}, 1000);
  });
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {return;}
    timerComponents.push( <span> {' '}{timeLeft[interval]} {interval}{' '}</span>);});
  return ( <div className="background"> <h1>Barefoot Nomad comming soon !!!</h1>
      <div className="countDoun">
        <h2>Remains:</h2>
        {timerComponents.length ? (timerComponents) : (<span> Barefoot Nomad</span>)}</div></div> );
}
export default CountdownTimer;

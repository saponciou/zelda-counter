'use client';
import styles from './page.module.css'
import { useEffect } from 'react';
import localFont from '@next/font/local'
import Link from 'next/link'

const myFont = localFont({ src: './fonts/hyliaserif.ttf' })

export default function Home() {
  let countdownEl: HTMLElement;
  if (typeof document === 'undefined') {
    // during server evaluation
  } else {
    // during client's browser evaluation
    countdownEl = document.querySelector("time") as HTMLElement;
  }

  function updateCountdown() {
    // Get the current date and time
    const currentTime = new Date();
    
    // Set the date and time of your event here
    const eventTime = new Date("May 12, 2023 12:00:00");
    
    // Calculate the time remaining until the event
    let timeRemaining = eventTime.valueOf() - currentTime.valueOf();
    
    // Convert the time remaining to days, hours, minutes, and seconds
    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    let newdays = days.toString().padStart(2, '0');
    let newhours = hours.toString().padStart(2, '0');
    let newminutes = minutes.toString().padStart(2, '0');
    let newseconds = seconds.toString().padStart(2, '0');
    
    // Update the countdown element with the time remaining
    countdownEl.innerHTML = `${newdays}:${newhours}:${newminutes}:${newseconds}`;
  }

  // Update the countdown every second
  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className={styles.main}>
      <span className={styles.label}>Counter</span>
      <h2>The Legends of Zelda</h2>
      <h1>Tears of the Kingdom</h1>
      {/* <h1 className={styles.countdown}>{countdownEl}</h1> */}
      <time className={myFont.className}></time>
      <br></br>
      {/* <div className={styles.container}> */}
      <iframe className={styles.responsive_iframe} src="https://www.youtube.com/embed/2SNF4M_v7wc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <Link href="https://discord.gg/rzelda" className={styles.link}>
        Join r/Zelda Discord
      </Link>
      {/* </div> */}
    </main>
  )
}

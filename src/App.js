import React, { useState, useEffect, useRef } from 'react';
// import { motion } from "framer-motion"

const messages = [
  { text: 'How do I get a web-site or app for my business?' },
  { text: 'Use a web developer!' },
  { text: 'OK! How do I find one?' },
  { text: 'Iono. Just Google it?' },
  { text: 'Oh! This guy looks good!' },
  { text: 'Send me the link?!' },
  { text: 'davidbell.co' },
];

export default function App() {
  const [messageToShow, setMessageToShow] = useState(0);

  useInterval(() => {
    setMessageToShow(messageToShow => messageToShow + 1);
  }, 2000);

  return (
    <div className='app'>
      <div className='walkthrough'>
        {messages.map((message, index) => {
          if (index > messageToShow) return <div key={index} />;

          return <Message key={index} message={message} />;
        })}
      </div>
    </div>
  );
}

function Message({ message }) {
  return (
    <div className='message'>
      <div className='avatar'>
        <span role='img' aria-label='frog'>
          🐸
        </span>
      </div>
      <div className='text'>{message.text}</div>
      <div className='avatar'>
        <span role='img' aria-label='monkey'></span>🐵
      </div>
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

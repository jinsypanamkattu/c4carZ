// BlinkingBanner.js
import React from 'react';
import '../css/BlinkingBanner.css';

function BlinkingBanner({ text }) {
  return <div className="blinking-banner text-center p-2">{text}</div>;
}

export default BlinkingBanner;
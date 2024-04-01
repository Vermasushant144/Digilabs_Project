'use client'

import React, { useState } from 'react';

function MyComponent() {
  const colors = ['#2E3192', '#009245', '#662D8C', '#516395', '#696969']; // Array of background colors
  let currentIndex = 0; // Index to track the current color
  let originalBackgroundColor = document.body.style.backgroundColor; // Store the original background color

  function addNotification() {
    // Show alert
    alert('Notification sent successfully!');
    // Change background color
    document.body.style.backgroundColor = colors[currentIndex];
    // Update index for the next color
    currentIndex = (currentIndex + 1) % colors.length;
    // Reset background color after 1 second
    setTimeout(function() {
      document.body.style.backgroundColor = originalBackgroundColor;
    }, 1000);
  }

  return (
    <div>
      <h1>Try <b>IT</b> Bell</h1>
      <svg
        version="1.1"
        id="L1"
        width="500"
        height="230"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <circle
          fill="none"
          stroke="#fff"
          strokeWidth="6"
          strokeMiterlimit="15"
          strokeDasharray="14.2472,14.2472"
          cx="50"
          cy="50"
          r="47"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="5s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          fill="none"
          stroke="#fff"
          strokeWidth="1"
          strokeMiterlimit="10"
          strokeDasharray="10,10"
          cx="50"
          cy="50"
          r="39"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="5s"
            from="0 50 50"
            to="-360 50 50"
            repeatCount="indefinite"
          />
        </circle>
        <g fill="#fff">
          <circle id="zoomCircle" fill="#9D0D3D" cx="50" cy="50" r="10">
            <animate
              attributeName="r"
              from="30"
              to="45"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate
              attributeName="r"
              from="45"
              to="30"
              dur="1s"
              repeatCount="indefinite"
              begin="1s"
            />
          </circle>
        </g>
      </svg>

      <div className="centers">
        <a id="notificationMenuButton" className="notification-link">
          <span className="notification">
            <span className="notification-icon"></span>
          </span>
        </a>
      </div>

      <div className="controls">
        <button className="increase" type="button" onClick={addNotification}>
          Send Notification
        </button>
      </div>
    </div>
  );
}

export default MyComponent;
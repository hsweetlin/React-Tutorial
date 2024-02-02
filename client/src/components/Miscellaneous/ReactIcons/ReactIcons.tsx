import React from "react";
import './ReactIcons.scss';
import {FaCircleArrowUp} from 'react-icons/fa6';
import { Link } from "react-router-dom";

export function Icons() {
  return (
    <div className="icons-container">
      <div id='middle_container'>
        <h1>React-Icons</h1>
        <p>React-icons is a small library that helps you add icons (from all different icon libraries)
          to your React apps. It delivers the icons to your app as components so they're easier to work with,
          and it lets you style them so they're consistent with the overall style of your app.</p>

        <p> React-icons uses ES6 features to import the icons into your React app.
          And it makes it so that only the icons you actually use from each library get imported.
          With React-icons, you only need to run one command to use any icons you want from a certain library.
          You just need to pick the correct import code and your icon is set.</p>

        <p> React-icons works with a bunch of different icon libraries like Font Awesome,
          Material UI, Bootstrap icons, and many others.</p>
          
          
      </div>
      
      <a href={'#middle_container'} className="arrow-icon"><FaCircleArrowUp/></a>
    </div>
  )
}
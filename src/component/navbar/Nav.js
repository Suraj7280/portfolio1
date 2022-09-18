import React from 'react'
import './Nav.css';
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
function Nav() {
  return (
    <div className="App">
      <div className="i-nav">
        <div className="nav-left">
          .Portfolio
        </div>
        <div className="nav-right">
          <ul type="none">
            <li><b><BsFillEmojiSunglassesFill /></b></li>
            <li><b><BsFillEmojiHeartEyesFill /></b></li>
            <li><b><BsFillEmojiLaughingFill /></b></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;

import React from "react";
import Links from "./Links"

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.userData.bio ? props.userData.bio : " "}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links userData={props.userData}/>
    </div>
  );
}

export default About;

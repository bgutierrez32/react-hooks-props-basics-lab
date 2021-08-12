import React from "react";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.userData.color }}>
        {props.userData.name} is a Web Developer from {props.userData.city}
      </h1>
    </div>
  );
}

export default Home;

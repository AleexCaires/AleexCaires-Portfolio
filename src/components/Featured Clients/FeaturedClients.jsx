import React from 'react'
import Images from "../Image";


const FeaturedClients = () => {
  return (
    <section id="main">
        <h1>Proud to have worked with:</h1>
        <div className="inner">
            <div className="featured-images">
            <Images
        src="Lyxor.png"
        className="featured-image"
        alt="Lyxor"
        style={{
          width: "200px",
          top: "16px",
          margin: "5px",
        }}
      />
       <Images
        src="AstraZeneca.png"
        className="featured-image"
        alt="AstraZeneca"
        style={{
          width: "200px",
          margin: "5px",
        }}
      />
            <Images
        src="CaffeNero.png"
        className="featured-image"
        alt="CaffeNero"
        style={{
          width: "200px",
          margin: "5px",
        }}
      />
       <Images
        src="Sharp.png"
        className="featured-image"
        alt="Sharp"
        style={{
          width: "200px",
          margin: "5px",
        }}
      />
      <Images
        src="EveryFriday.png"
        className="featured-image"
        alt="EveryFriday"
        style={{
          width: "190px",
          height:"90px"

        }}
      />
      <Images
        src="Collider.png"
        className="featured-image"
        alt="Collider"
        style={{
          width: "200px",
          margin: "5px",
        }}
      />
      <Images
        src="redgrain_logo_small.png"
        className="featured-image"
        alt="RedGrain"
        style={{
          width: "200px",
          margin: "5px",
        }}
      />
            </div>
        </div>
    </section>
  );
};



export default FeaturedClients


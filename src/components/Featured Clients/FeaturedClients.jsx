import React from 'react'
import Images from "../Image";


const FeaturedClients = () => {
  return (
    <section id="main">
        <h1>Clients </h1>
        <div className="inner">
            <div className="featured-images">
            <Images
        src="Lyxor.png"
        className="featured-image"
        alt="Lyxor"
        style={{
          width: "150px",
          top: "16px",
        }}
      />
       <Images
        src="AstraZeneca.png"
        className="featured-image"
        alt="AstraZeneca"
        style={{
          width: "150px",
        }}
      />
            <Images
        src="CaffeNero.png"
        className="featured-image"
        alt="CaffeNero"
        style={{
          width: "150px",
        }}
      />
       <Images
        src="Sharp.png"
        className="featured-image"
        alt="Sharp"
        style={{
          width: "150px",
        }}
      />
      <Images
        src="Collider.png"
        className="featured-image"
        alt="Collider"
        style={{
          width: "150px",
          top: "16px",
        }}
      />
            </div>
        </div>
    </section>
  );
};



export default FeaturedClients


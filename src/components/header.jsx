import React from "react";
import video from '../components/2386461-hd_1920_1080_24fps.mp4'

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <video
          className="video-background"
          playsInline
          autoPlay
          muted
          loop
          poster="/api/placeholder/1920/1080"
        >
          {/* Replace the src with your actual video file path */}
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p style={{fontWeight: 'bold'}}>{props.data ? props.data.paragraph : "Loading"}</p>
                {/* <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

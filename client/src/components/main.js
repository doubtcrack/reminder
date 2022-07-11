import React from "react";
import "../global.scss";
import Lottie from "react-lottie";
import hello from "../assets/hello.json";

const LandingPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: hello,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <section id="hero">
        <div className="container position-relative hide-mainbox">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 text-center icon-box">
              <h1>Pleasure To See You</h1>
              <h2>Now it's time to set the reminder</h2>
            </div>
          </div>
          <div className="text-center">
            <a href="#" className="btn-get-started scrollto">
              Let's Get Started
            </a>
          </div>
        </div>
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 text-center">
              <Lottie
                options={defaultOptions}
                height={"100%"}
                width={"100%"}
                className="lottie"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;

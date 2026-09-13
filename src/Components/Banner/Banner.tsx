import React from "react";
import BannerImg from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="mt-8">
      <div className=" container mx-auto">
        <div className="hero-content flex-row-reverse justify-between">
          <img src={BannerImg} className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold">
              Build Your Ideal <br />
               <span className=""> Development Stack</span>
            </h1>
            <p className="py-6">
              Explore frontend, backend, database, and tooling options, <br />  compare
              them side by side, and put together the stack that fits your <br />  next
              project.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

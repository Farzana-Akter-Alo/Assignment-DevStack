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
              Explore frontend, backend, database, and tooling options, <br />{" "}
              compare them side by side, and put together the stack that fits
              your <br /> next project.
            </p>
           <div className="flex gap-4 ">
             <button className="text-white w-48 bg-gradient-to-r from-[#F97316] to-[#EC4899] px-4 py-2 rounded-sm font-semibold">Explore Technologies</button>
            <button className=" border border-base-300 w-48 px-4 py-2 rounded-sm font-semibold">Learn More</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

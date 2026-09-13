import FooterImg from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="container mx-auto mt-20  ">
      <div className="footer sm:footer-horizontal p-4 mb-10 border-t-2 border-base-300 x-4 pt-16">
        <aside>
          <img src={FooterImg} alt="" />
          <p className="text-base-content">
            Curated tools, technologies, and resources for developers building{" "}
            <br />
            modern software.
          </p>
          <ul className="flex gap-4 font-bold">
            <li>
              <a href="">GitHub</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </aside>
        <nav className="">
          <h6 className=" font-bold text-black">PRODUCT</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Technologies</a>
          <a className="link link-hover">Projects</a>
        </nav>
        <nav>
          <h6 className="font-bold text-black">COMPANY</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="font-bold text-black">LEGAL</h6>
          <a className="link link-hover"> Privacy policy</a>
          <a className="link link-hover">Terms of Service</a>
        </nav>
      </div>
      <div className="flex justify-between text-base-content text-sm border-t-2 border-base-300 p-4">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <ul className="flex gap-6">
          <li>
            <a href=""></a>Privacy
          </li>
          <li>
            <a href="">Terms</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

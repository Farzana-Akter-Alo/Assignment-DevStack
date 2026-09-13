import logo from "../../assets/logo-text.png";

function Nav() {
  return (
    <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px] font-semibold">
            <li>
              <a href="#" className="text-[#D91B7E]">
                Home
              </a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-6">
          <button className="font-bold">Sign In</button>
          <button className="text-white bg-[#D91B7E] px-4 py-2 rounded-3xl font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

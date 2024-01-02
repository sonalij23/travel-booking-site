import React, { useState } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, scroller } from "react-scroll";

const Header = () => {
  const navigate = useNavigate();

  const { user, logOut } = useUserAuth();

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  const handleLogOut = async () => {
    try {
      await logOut();
      setIsMobileOpen(!isMobileOpen);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleNavigation = (path) => {
    setIsMobileOpen(!isMobileOpen);
    navigate(path);
  };

  const handleHomeClick = () => handleNavigation("/");
  const handleToursClick = () => handleNavigation("/tours");
  const handleAboutClick = () => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo("About", {
        smooth: true,
        offset: -170,
        duration: 500,
      });
    }, 100);
  };
  const handleLoginClick = () => handleNavigation("/login");
  const handleRegisterClick = () => handleNavigation("/register");

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full bg-white md:justify-around ">
      <div className="w-40 md:w-60 ">
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
      </div>
      <div>
        {user ? (
          <p className="px-4 py-1 text-white rounded-3xl md:hidden bg-primary-color">
            {user.displayName}
          </p>
        ) : (
          <p
            className="px-4 py-1 font-semibold text-white rounded-3xl md:hidden bg-primary-color"
            onClick={() => navigate("/login")}
          >
            Login
          </p>
        )}
      </div>

      <GiHamburgerMenu
        className="mr-3 text-3xl md:hidden"
        onClick={toggleMobileMenu}
      />
      <div
        className={`absolute right-0 w-2/3 p-5 sm:p-10 bg-white border-solid md:w-1/3 md:static top-12 md:p-0 border-[1px] md:block md:border-0 ${
          isMobileOpen ? "block" : "hidden"
        } `}
      >
        <ul className="flex flex-col items-center text-lg font-semibold md:flex-row justify-evenly">
          <Link
            to="Home"
            smooth={true}
            offset={-170}
            duration={500}
            className="my-3 md:my-0 md:mr-2 lg:mr-0 hover:text-primary-color active:text-primary-color"
            onClick={handleHomeClick}
          >
            Home
          </Link>
          <Link
            to="Tour"
            smooth={true}
            offset={-170}
            duration={500}
            className="my-3 md:mr-2 lg:mr-0 hover:text-primary-color md:my-0"
            onClick={handleToursClick}
          >
            Tours
          </Link>

          <Link
            to="About"
            smooth={true}
            offset={-170}
            duration={500}
            className="my-3 md:mr-2 lg:mr-0 hover:text-primary-color md:my-0"
            onClick={handleAboutClick}
          >
            About
          </Link>

          {user ? (
            <li className="hidden px-5 py-1 font-semibold text-white md:mr-2 lg:mr-0 rounded-3xl md:block bg-primary-color">
              {user.displayName}
            </li>
          ) : (
            <li
              className="hidden hover:text-primary-color md:block md:mr-2 lg:mr-0"
              onClick={handleLoginClick}
            >
              Login
            </li>
          )}
          {user ? (
            <li
              className="w-1/2 py-1 my-3 text-white bg-black rounded-md md:my-0 md:w-auto md:px-4"
              onClick={handleLogOut}
            >
              Logout
            </li>
          ) : (
            <li
              className="w-1/2 px-4 py-1 my-3 text-white rounded-3xl bg-primary-color md:w-auto "
              onClick={handleRegisterClick}
            >
              Register
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;

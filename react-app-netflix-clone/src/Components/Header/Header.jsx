import React from "react";
import "./header.css";
import netflixLogo from "../../assets/images/Netflix.png";

// import SearchIcon from "@mui/icons-material/Search";
import { IoSearch } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { IoMdArrowDropdownCircle } from "react-icons/io";
// 
const Header = () => {
  return (
    <div className="row">
      <div className="header-left col-md-6 d-flex">
        <ul className="gap-4 d-flex align-items-center list-unstyled">
          <li>
            <img src={netflixLogo} alt="Netflix logo" width="100" />
          </li>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="header-right col-md-6 d-flex justify-content-end">
        <ul className="gap-4 d-flex align-items-center list-unstyled">
          <li>
            {" "}
            <IoSearch />{" "}
          </li>
          <li>
            <MdNotificationsNone />
          </li>
          <li>
            <MdAccountBox />
          </li>
          <li>
            <IoMdArrowDropdownCircle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

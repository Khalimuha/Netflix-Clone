import React from "react";
import "./header.css";
import netflixLogo from "../../assets/images/netflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
          <SearchIcon />
          </li>  
          <li>
            <NotificationsNoneIcon />
          </li>
          <li>
            <AccountBoxIcon />
          </li>
          <li>
            <ArrowDropDownIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

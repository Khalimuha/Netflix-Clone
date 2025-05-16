
import React from "react";
import logo from "../../Assets/images/netflix.png";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div>
      <div className="header-outer-container">
        {/* Fixed the typo here */}
        <div className="header-container">
          <div className="header-left">
            <ul>
              <li>
                <img src={logo} alt="netflix logo" />
              </li>
              <li>Netflix</li>
              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Language</li>
            </ul>
          </div>
          <div className="header-right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />{" "}
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import BookmarkBorderTwoToneIcon from "@mui/icons-material/BookmarkBorderTwoTone";
import { MessageSquareWarning } from "lucide-react";
import { SquareActivity } from "lucide-react";
import { Moon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThreads } from "@fortawesome/free-brands-svg-icons";

function Sidenav() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="logo"
      />
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <ExploreOutlinedIcon />
          <span>Explore</span>
        </button>
        <button className="sidenav__button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <button className="sidenav__button">
          <ChatIcon />
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
      </div>

      <div className="sidenav__more">
        <button
          className="sidenav__button"
          onClick={() => setShowPopup(!showPopup)}
        >
          <MenuIcon />
          <span>More</span>
        </button>

        {/* Pop-up Menu */}
        {showPopup && (
          <div className="sidenav__popup">
            <button className="popup__button">
              <SettingsIcon />
              <span>Settings</span>
            </button>
            <button className="popup__button">
              <SquareActivity />
              <span>Your activity</span>
            </button>
            <button className="popup__button">
              <BookmarkBorderTwoToneIcon />
              <span>Saved</span>
            </button>
            <button className="popup__button">
              <Moon />
              <span>Switch appearance</span>
            </button>
            <button className="popup__button">
              <MessageSquareWarning />
              <span>Report a problem</span>
            </button>

            <hr className="popup__divider" />
            <button className="popup__button">
              <FontAwesomeIcon icon={faThreads} className="thread" />
              <span>Threads</span>
            </button>

            <hr className="popup__divider" />

            <button className="account__button">
              <span>Switch accounts</span>
            </button>

            <hr className="divider" />

            <button className="popup__button">
              <LogoutIcon />
              <span>Log out</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidenav;

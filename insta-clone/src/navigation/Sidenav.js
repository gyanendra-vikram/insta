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
import { MessageSquareWarning, SquareActivity, Moon, Sun, ChevronLeft } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidenav() {
  const [activePopup, setActivePopup] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  const morePopupRef = React.useRef(null);
  const appearancePopupRef = React.useRef(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (morePopupRef.current && morePopupRef.current.contains(event.target)) ||
        (appearancePopupRef.current &&
          appearancePopupRef.current.contains(event.target))
      ) {
        return;
      }

      setActivePopup(null);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    console.log(darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

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
          onClick={() => setActivePopup(activePopup === "more" ? null : "more")}
        >
          <MenuIcon />
          <span>More</span>
        </button>

        {/* More Pop-up */}
        {activePopup === "more" && (
          <div className="sidenav__popup" ref={morePopupRef}>
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
            <button
              className="popup__button"
              onClick={() => setActivePopup("appearance")} // Show appearance popup
            >
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

            <button className="popup__button" onClick={handleLogout}>
              <LogoutIcon />
              <span>Log out</span>
            </button>
          </div>
        )}

        {/* Appearance Pop-up (Replaces "More" popup) */}
        {activePopup === "appearance" && (
          <div className="appearance__popup" ref={appearancePopupRef}>
            <div className="appearance-popup-header">
              <button
                className="back-button"
                onClick={() => setActivePopup("more")}
              >
                <ChevronLeft />
              </button>
              <h3>Switch appearance</h3>
              {darkMode ? (
                <Sun className="header-icon" />
              ) : (
                <Moon className="header-icon" />
              )}
            </div>
            <div className="appearance-popup-body">
              <span>Dark mode</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidenav;

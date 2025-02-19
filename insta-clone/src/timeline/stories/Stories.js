import React, { useRef, useState } from "react";
import "./Stories.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Stories() {
  const [stories] = useState([
    {
      username: "yashasvi.raj_",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      username: "aman_24010",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      username: "secret.ns",
      profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      username: "rajeev.101",
      profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      username: "anoopdusadh",
      profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      username: "divyansh_raj",
      profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      username: "archna_79",
      profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      username: "baranwalsneha",
      profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      username: "vanshika_javrani",
      profilePic: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      username: "yashika.singh",
      profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      username: "mysterious.me28",
      profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      username: "meetz02",
      profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      username: "_srivastavaanshi",
      profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
    },
  ]);

  const storiesRef = useRef(null);

  const scrollLeft = () => {
    storiesRef.current.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = () => {
    storiesRef.current.scrollBy({ left: 150, behavior: "smooth" });
  };

  return (
    <div className="stories-container">
      <button className="scroll-btn left" onClick={scrollLeft}>
        <ChevronLeftIcon />
      </button>
      <div className="stories" ref={storiesRef}>
        {stories.map((story, index) => (
          <div key={index} className="story">
            <div className="story__border">
              <img
                src={story.profilePic}
                alt={story.username}
                className="story__image"
              />
            </div>
            <p className="story__username">
              {story.username.length > 10
                ? story.username.slice(0, 10) + "..."
                : story.username}
            </p>
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={scrollRight}>
        <ChevronRightIcon />
      </button>
    </div>
  );
}

export default Stories;

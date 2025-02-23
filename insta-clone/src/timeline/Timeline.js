import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";
import Stories from "./stories/Stories";
import sample from "./WhatsApp Image 2025-02-16 at 22.35.04_8d135441.jpg";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "gyanendra_vikram_",
      postImage: sample,
      likes: 104,
      timestamp: "12h",
      caption: "Lost in the brew, found in moments📸",
    },
    {
      user: "prachi_tolani",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 432,
      timestamp: "1d",
      caption: "The world is a book and those who do not travel read only one page",
    },
    {
      user: "abhay_7",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 140,
      timestamp: "2d",
      caption: "Dare to be different",
    },
    {
      user: "sahil_s",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      likes: 14,
      timestamp: "2d",
      caption: "The best things in life are free",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <Stories />
        <div className="timeline_posts">
          {posts.map((post, index) => (
            <React.Fragment key={index}>
              <Post
                user={post.user}
                postImage={post.postImage}
                likes={post.likes}
                timestamp={post.timestamp}
                caption={post.caption}
              />
              {index !== posts.length - 1 && <hr className="post__divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;

import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorzIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { MessageCircle } from "lucide-react";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Post({ user, postImage, likes, timestamp }) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  const handleSave = () => {
    setIsSaved(!isSaved);
  };
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          <div className="us"> {user} </div>
          <span>• {timestamp}</span>
        </div>
        <MoreHorzIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            {isLiked ? (
              <FavoriteIcon
                className="postIcon"
                onClick={handleLike}
                style={{ color: "red" }}
              />
            ) : (
              <FavoriteBorderIcon className="postIcon" onClick={handleLike} />
            )}
            <MessageCircle className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            {isSaved ? (
              <BookmarkOutlinedIcon
                className="postIcon"
                onClick={handleSave}
                style={{ color: "white" }}
              />
            ) : (
              <BookmarkBorderIcon className="postIcon" onClick={handleSave} />
            )}
          </div>
        </div>
        {likes} likes
      </div>
    </div>
  );
}

export default Post;

// "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

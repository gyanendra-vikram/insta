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

function Post({ user, postImage, likes, timestamp, caption }) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [comments, setComments] = React.useState([]);
  const [commentText, setCommentText] = React.useState("");

  const MAX_LENGTH = 50;

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  const handleSave = () => {
    setIsSaved(!isSaved);
  };
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText("");
    }
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
        <strong>{likes} likes</strong>
        <div className={`post__caption ${isExpanded ? "expanded" : ""}`}>
          <strong>{user}</strong>{" "}
          {isExpanded
            ? caption
            : `${caption.slice(0, MAX_LENGTH)}${
                caption.length > MAX_LENGTH ? "..." : ""
              }`}
          {caption.length > MAX_LENGTH && (
            <span
              className="showMore"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? " Show less" : "more"}
            </span>
          )}
        </div>

        {/* Comments Section */}
        <div className="post__comments">
          {comments.map((comment, index) => (
            <p key={index}>
              <strong>{user}:</strong> {comment}
            </p>
          ))}
        </div>

        {/* Comment Input */}
        <form className="post__commentBox" onSubmit={handleCommentSubmit}>
          <input
            className="post__input"
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          {commentText.trim() && (
            <button className="post__button" type="submit">
              Post
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Post;

// "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

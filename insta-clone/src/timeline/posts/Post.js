import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import MoreHorzIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Post() {
  return (
    <div className="post">
        <div className="post__header">
            <div className="post__headerAuthor">
                <Avatar>G</Avatar>
                 gyanendra_vikram_ • <span>20h</span>
            </div>
            <MoreHorzIcon />
        </div>
        <div className="post__image">
            <img src="https://pixlr.com/images/generator/text-to-image.webp"
            alt="" 
            />
        </div>
        <div className="post__footer">
            <div className="post__footerIcons">
                <div className="post__iconsMain">
                    <FavoriteBorderIcon className="postIcon" />
                    <ChatBubbleOutlineOutlinedIcon className="postIcon" />
                    <TelegramIcon className="postIcon" />
                </div>
                <div className="post__iconSave">
                    <BookmarkBorderIcon className="postIcon" />
                </div>
            </div>
            15,336 likes
        </div>
    </div>
  )
}

export default Post

// "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
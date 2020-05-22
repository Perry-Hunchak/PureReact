import React from "react";
import moment from "moment";
import Avatar from "./Avatar";
import "./index.css";
import { Author } from "./Author";
import {
  ReplyButton,
  LikeButton,
  MoreOptionsButton,
  RetweetButton,
} from "./Buttons";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

const Time = ({ time }) => (
  <span className="time">{moment(time).fromNow()}</span>
);

export default Tweet;

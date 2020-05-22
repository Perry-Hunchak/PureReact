import React from "react";
import ReactDOM from "react-dom";
import Tweet from "./Tweet";

const data = {
  message: "A tweet about something cool",
  gravatar: "5c3dd2d257ff0e14dbd2583485dbd44b",
  author: {
    handle: "dceddia",
    name: "Dave Ceddia",
  },
  likes: 17,
  retweets: 3,
  timestamp: "2019-07-10 21:24:37",
};

ReactDOM.render(<Tweet tweet={data} />, document.querySelector("#root"));


import React, { useEffect, useState } from "react";
import "../css/Feed.css";
import Post from "../views/Post";
import TweetBox from "../views/TweetBox";
import firebase from "firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

   useEffect(() => {
    firebase.firestore().collection("users").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []); 

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;
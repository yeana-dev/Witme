import Home from "../screens/Home";
import Post from "../screens/Post";
import { getAllPosts } from "../services/posts";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function MainContainer(props) {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const resp = await getAllPosts();
        setPostData(resp);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);
  console.log(postData);
  return (
    <div className="main-container">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/posts">
          <Post />
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;

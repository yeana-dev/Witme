import Home from "../screens/Home";
import SideProjectPosts from "../screens/SideProjectPosts";
import StudyPosts from "../screens/StudyPosts";
import CreatePost from "../screens/CreatePost";
import Login from "../screens/Login";
import Register from "../screens/Register";
import {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
} from "../services/posts";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function MainContainer(props) {
  const history = useHistory();
  // Data with category = "side_project"
  const [sideProjectPosts, setSideProjectPosts] = useState([]);
  // Data with category = "study_group"
  const [studyGroupPosts, setStudyGroupPosts] = useState([]);
  // Fetching posts with category "side_project"
  useEffect(() => {
    const getSideProjectPosts = async () => {
      try {
        const resp = await getAllPosts();
        const filteredData = resp.filter(
          (post) => post.category["name"] === "side_project"
        );
        setSideProjectPosts(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getSideProjectPosts();
  }, []);

  // Fetching posts with category "study_group"
  useEffect(() => {
    const getStudyGroupPosts = async () => {
      try {
        const resp = await getAllPosts();
        const filteredData = resp.filter(
          (post) => post.category["name"] === "study_group"
        );
        setStudyGroupPosts(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getStudyGroupPosts();
  }, []);

  const handlePostCreate = async (post) => {
    try {
      if (props.category === "side_project") {
        const newPost = await createPost(post, "side_project");
        setSideProjectPosts((prevState) => [...prevState, newPost]);
        history.push("/new-post-recruit");
      } else {
        const newPost = await createPost(post, "study_group");
        setSideProjectPosts((prevState) => [...prevState, newPost]);
        history.push("/study-group");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main-container">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login
            handleLogin={props.handleLogin}
            handleRegister={props.handleRegister}
          />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/recruit-side-project">
          <SideProjectPosts posts={sideProjectPosts} />
        </Route>
        <Route path="/study-group">
          <StudyPosts posts={studyGroupPosts} />
        </Route>
        <Route path="/new-post-recruit">
          <CreatePost
            category="side_project"
            handlePostCreate={handlePostCreate}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;

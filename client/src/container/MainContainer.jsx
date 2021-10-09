import Home from "../screens/Home";
import SideProjectPosts from "../screens/SideProjectPosts";
import StudyPosts from "../screens/StudyPosts";
import PostForm from "../screens/PostForm";
import Login from "../screens/Login";
import Register from "../screens/Register";
import PostDetail from "../screens/PostDetail";
import {
  getAllPosts,
  createPost,
  updatePost,
  // deletePost,
} from "../services/posts";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function MainContainer(props) {
  const history = useHistory();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await getAllPosts();
        setPosts(resp);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const handlePostCreate = async (post) => {
    try {
      if (props.category === "side_project") {
        const newPost = await createPost(post, "side_project");
        setPosts((prevState) => [...prevState, newPost]);
        history.push(`/new-post-recruit/${newPost.id}`);
      } else {
        const newPost = await createPost(post, "study_group");
        setPosts((prevState) => [...prevState, newPost]);
        history.push(`/study-group/${newPost.id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePostUpdate = async (id, postData) => {
    const updatedPost = await updatePost(id, postData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? updatedPost : post;
      })
    );
    console.log(updatedPost);
    if (updatedPost.category["name"] === "side_project") {
      history.push(`/recruit-side-project/${updatedPost.id}`);
    } else {
      history.push(`/study-group/${updatedPost.id}`);
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
            loginError={props.loginError}
            setLoginError={props.setLoginError}
          />
        </Route>
        <Route path="/register">
          <Register handleRegister={props.handleRegister} />
        </Route>
        <Route path="/recruit-side-project" exact>
          <SideProjectPosts posts={posts} />
        </Route>
        <Route path="/study-group" exact>
          <StudyPosts posts={posts} />
        </Route>
        <Route path="/recruit-side-project/:id">
          <PostDetail posts={posts} currentUser={props.currentUser} />
        </Route>
        <Route path="/study-group/:id">
          <PostDetail posts={posts} currentUser={props.currentUser} />
        </Route>
        <Route path="/new-post-recruit">
          <PostForm
            category="side_project"
            handlePostCreate={handlePostCreate}
          />
        </Route>
        <Route path="/new-post-study">
          <PostForm
            category="study_group"
            handlePostCreate={handlePostCreate}
          />
        </Route>
        <Route path="/post-edit/:id">
          <PostForm posts={posts} handlePostUpdate={handlePostUpdate} />
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;

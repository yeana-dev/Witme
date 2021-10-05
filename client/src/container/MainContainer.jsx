import Home from "../screens/Home";
import SideProjectPosts from "../screens/SideProjectPosts";
import StudyPosts from "../screens/StudyPosts";

import { getAllPosts } from "../services/posts";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function MainContainer(props) {
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

  console.log(sideProjectPosts);
  console.log(studyGroupPosts);

  return (
    <div className="main-container">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recruit-side-project">
          <SideProjectPosts />
        </Route>
        <Route path="/study-group">
          <StudyPosts />
        </Route>
      </Switch>
    </div>
  );
}

export default MainContainer;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "./style/PostForm.css";

function PostForm(props) {
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    looking_for: "",
    skills: "",
    // User don't need to fill the category since this screen has its category from props
    category: `${props.category}`,
    content: "",
  });

  useEffect(() => {
    if (params.id && props.posts.length > 0) {
      // If there is an ID parameter and having a data set of posts, find a post to edit by
      // grabbing ID from parameter and filter from posts data.
      const post = props.posts.find((post) => Number(params.id) === post.id);
      if (post) {
        setPost({
          title: post.title,
          looking_for: post.looking_for,
          skills: post.skills,
          category: post.category,
          content: post.content,
        });
      }
      // Pre-filling editing post's content into editor
      editorRef.current.getInstance().setHTML(post.content);
    }
  }, [params.id, props.posts]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Toast UI Editor
  const editorRef = React.createRef();
  const handleContentChange = () => {
    setPost((prevState) => ({
      ...prevState,
      content: editorRef.current.getInstance().getHTML(),
    }));
  };

  return (
    <div className="post-form-container">
      <form
        className="create-post"
        onSubmit={(event) => {
          event.preventDefault();
          // On submit, we will need to check if we are trying to edit or create a post,
          if (params.id) {
            // If there is a parameter of post id, meaning we are updating the post,
            // We need to execute PUT method that we got as props from MainContainer.
            // Passing the current post's id and current post's content
            props.handlePostUpdate(params.id, post);
          } else {
            // If there is no parameter, meaning we are creating a new post,
            // We need to execute POST method that we got as props from MainContainer.
            // Passing the post's content and the current post's category, which we got as props from MainContainer also.
            props.handlePostCreate(post, props.category);
          }
        }}
      >
        {/* Display header accordingly */}
        <header>{params.id ? "EDIT POST" : "NEW POST"}</header>
        <div className="post-form-top">
          <input
            type="text"
            name="title"
            placeholder="Title"
            id="form-title"
            value={post.title}
            onChange={handleChange}
          />
          {/* We only need to display looking_for dropdown option if the user is creating a post looking for
          a new team member for their side project. We can do this by checking in two ways.
          1. If the this post is getting updated, check if current post already has a looking_for key
          2. If the this post is being created, check if the current category we are at is 'side_project'*/}
          {(post.looking_for || props.category === "side_project") && (
            <select
              name="looking_for"
              id="form-looking-for"
              onChange={handleChange}
              value={post.looking_for}
            >
              <option>I am looking for</option>
              <option value="Front-end">Front-end Developer</option>
              <option value="Back-end">Back-end Developer</option>
              <option value="Designer">Designer</option>
              <option value="All">Above All</option>
            </select>
          )}
          <input
            type="text"
            name="skills"
            id="form-skills"
            placeholder="Skills/Stacks required. Ex. JavaScript,Figma,Python"
            value={post.skills}
            onChange={handleChange}
          />
        </div>
        <div id="toast-ui-editor">
          <Editor
            name="content"
            value={post.content}
            previewStyle="vertical"
            height="500px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            ref={editorRef}
            // Color changing plugin for Toast UI Editor
            plugins={[colorSyntax]}
            onChange={handleContentChange}
          />
        </div>
        <input type="submit" id="form-submit" />
      </form>
    </div>
  );
}

export default PostForm;

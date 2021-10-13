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
    category: `${props.category}`,
    content: "",
  });

  useEffect(() => {
    if (params.id && props.posts.length > 0) {
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
          if (params.id) {
            props.handlePostUpdate(params.id, post);
          } else {
            props.handlePostCreate(post, props.category);
          }
        }}
      >
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

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        console.log(post);
        setPost({
          title: post.title,
          looking_for: post.looking_for,
          skills: post.skills,
          category: post.category,
          content: post.content,
        });
      }
    }
  }, [params.id, props.posts]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="create-post"
      onSubmit={(event) => {
        event.preventDefault();
        if (params.id) {
          props.handlePostUpdate(params.id, post);
        } else {
          props.handlePostCreate(post);
        }
      }}
    >
      <label>
        Title
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
        />
      </label>
      <label>
        <select
          name="looking_for"
          onChange={handleChange}
          value={post.looking_for}
        >
          <option>I am looking for</option>
          <option value="Front-end">Front-end Developer</option>
          <option value="Back-end">Back-end Developer</option>
          <option value="Designer">Designer</option>
        </select>
        <label>
          Programming Language/Framework/Program required
          <input
            type="text"
            name="skills"
            value={post.skills}
            onChange={handleChange}
          />
        </label>
      </label>
      <label>
        Content
        <textarea name="content" value={post.content} onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  );
}

export default PostForm;

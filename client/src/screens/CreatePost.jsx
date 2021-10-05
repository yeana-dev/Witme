import { useState } from "react";

function CreatePost(props) {
  const [post, setPost] = useState({
    title: "",
    looking_for: "",
    skills: "",
    category: `${props.category}`,
    content: "",
  });

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
        props.handlePostCreate(post);
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
        <select name="looking_for" onChange={handleChange}>
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

export default CreatePost;

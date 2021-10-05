import PostCard from "../components/PostCard";

function StudyPosts(props) {
  return (
    <div className="study-posts-container">
      {props.posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </div>
  );
}

export default StudyPosts;

import PostCard from "../components/PostCard";

function SideProjectPosts(props) {
  return (
    <div className="side-project-posts-container">
      {props.posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </div>
  );
}

export default SideProjectPosts;

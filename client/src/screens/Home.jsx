import "./style/Home.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home">
      <div id="home-title">
        <header>
          Bring your team
          <br />
          together in Witme
        </header>
        <div id="home-title-bottom">
          A virtual meeting is easier than ever with Witme! <br />
          Create and meet your team to get{" "}
          <span className="highlighted">
            hands-on experience on projects
          </span>, <br />
          or join a study group sessions to{" "}
          <span className="highlighted">level up your motivation!</span>
        </div>{" "}
        <div id="home-view-list">
          <div>
            Are you a <span className="highlighted">developer</span> or{" "}
            <span className="highlighted">designer</span> looking to join a team
            for your next project?
            <Link to="/recruit-side-project">
              <button>View current listing of teams</button>
            </Link>
          </div>
          <div>
            Best way to{" "}
            <span className="highlighted">eliminates procrastination!</span>
            <Link to="/study-group">
              <button>View our current study groups</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

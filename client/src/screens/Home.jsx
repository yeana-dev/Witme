import "./style/Home.css";

function Home(props) {
  return (
    <div className="home">
      <div id="home-title">
        Bring your team
        <br />
        together in Witme
      </div>
      <div id="home-title-bottom">
        A virtual meeting is easier than ever with Witme! <br />
        Create and meet your team to get{" "}
        <span className="highlighted">
          hands-on experience on projects
        </span>, <br />
        or join a study group sessions to{" "}
        <span className="highlighted">level up your motivation!</span>
      </div>
    </div>
  );
}

export default Home;

import "./App.css";
import Layout from "./components/layout/Layout";
import MainContainer from "./container/MainContainer";

function App() {
  return (
    <div className="App">
      <Layout>
        <MainContainer />
      </Layout>
    </div>
  );
}

export default App;

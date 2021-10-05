import Navigation from "./Navigation";

function Layout(props) {
  return (
    <div className="layout">
      <Navigation />
      {props.children}
    </div>
  );
}

export default Layout;

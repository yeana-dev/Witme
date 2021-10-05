import Navigation from "./Navigation";

function Layout(props) {
  return (
    <div className="layout">
      <Navigation
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      {props.children}
    </div>
  );
}

export default Layout;

function Layout(props) {
  return (
    <div className="layout">
      <nav>I am a nav</nav>
      {props.children}
    </div>
  );
}

export default Layout;

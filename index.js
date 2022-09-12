"use strict";
const Header = function () {
  return (
    <header>
      <nav className="navbar">
        <img src="React.webp" className="logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

const MainContent = function () {
  return (
    <div className="container">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterpirse apps, including mobile apps</li>
      </ul>
    </div>
  );
};

const Footer = function () {
  return (
    <footer className="footer">
      <small>Copyright @2022 Dr.Green's development</small>
    </footer>
  );
};

const Page = function () {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};
ReactDOM.render(<Page />, document.getElementById("root"));

function getClassName(conditional) {
  return conditional ? "navbar-button--active" : "navbar-button--not-active";
}

function showNavbarCircle(conditional) {
  return conditional ? <div className="navbar-circle" /> : null;
}

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <div className="navbar">
      <button
        className={getClassName(currentPage === "home")}
        onClick={() => setCurrentPage("home")}
      >
        {showNavbarCircle(currentPage === "home")}
        <div>home</div>
      </button>
      <button
        className={getClassName(currentPage === "portfolio")}
        onClick={() => setCurrentPage("portfolio")}
      >
        {showNavbarCircle(currentPage === "portfolio")}
        <div>portfolio</div>
      </button>
      <button
        className={getClassName(currentPage === "profile")}
        onClick={() => setCurrentPage("profile")}
      >
        {showNavbarCircle(currentPage === "profile")}
        <div>profile</div>
      </button>
    </div>
  );
}

export default Navbar;

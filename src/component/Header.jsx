function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img src={logo} alt="Logo" /> */}
        <h1 className="logo-text">Logo</h1>
      </div>
      {/* <div className="navbar-search">
        <input type="text" placeholder="github username" />
        <button>
          <i className="search-icon">🔍</i>
        </button>
      </div> */}
      <ul className="navbar-menu">
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">Job Board</a>
        </li>
        <li className="dropdown">
          <a href="#">Resources</a>
          <ul className="dropdown-content">
            <li>
              <a href="#">Resource 1</a>
            </li>
            <li>
              <a href="#">Resource 2</a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#">Leaderboards</a>
          <ul className="dropdown-content">
            <li>
              <a href="#">Developer Leaderboard</a>
            </li>
            <li>
              <a href="#">Company Leaderboard</a>
            </li>
            <li>
              <a href="#">Education Leaderboard</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
      </ul>
    </nav>
  );
}
export default Header;

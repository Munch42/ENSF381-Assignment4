import './Header.css';

function Header() {
  return (
    <>
    <header>
        <img src={require('../images/logo.jpg')} alt="LMS Logo" height="100" width="100" />
        <h1>LMS - Learning Management System</h1>
    </header>
    <div id="nav">
        <a href="login.html">Login</a><a href="leaderboard.html">Leaderboard</a><a href="#about">About LMS</a>
    </div>
    </>
  );
}

export default Header;

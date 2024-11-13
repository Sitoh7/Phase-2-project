import { NavLink, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink to="/">
          <span className="navbar-brand">Home</span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink to="/cart">
              <li className="nav-item">
                <span className="nav-link">Cart</span>
              </li>
            </NavLink>
            <NavLink to="/account">
              <li className="nav-item">
                <span className="nav-link">Account</span>
              </li>
            </NavLink>
            {isAuthenticated ? (
              <li className="nav-item">
                <button className="nav-link" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <NavLink to="/login">
                <li className="nav-item">
                  <span className="nav-link">Login</span>
                </li>
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

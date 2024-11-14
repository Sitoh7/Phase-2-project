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
        <NavLink to="/cart">
          <span className="nav-link">Cart</span>
        </NavLink>
        <NavLink to="/account">
          <span className="nav-link">Account</span>
        </NavLink>
        {isAuthenticated ? (
          <button className="nav-link" onClick={handleLogout}>Logout</button>
        ) : (
          <NavLink to="/login">
            <span className="nav-link">Login</span>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

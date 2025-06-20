import { useContext } from "react";
import { AuthContext } from "./components/AuthProvider";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => console.error("Logout error:", error));
  };

  return (
    <div className="navbar bg-orange-200">
      {/* Left dropdown */}
      <div className="flex-none">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Center brand */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">PrimeSport Zone</Link>
      </div>

      {/* Right profile/login/logout */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {user ? (
              <>
                <li><span className="text-sm text-gray-700">👤 {user.email}</span></li>
                <li><button onClick={handleLogout} className="text-red-500">Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
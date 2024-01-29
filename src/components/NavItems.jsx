import { Link } from "react-router-dom";
const NavItems = () => {
  return (
    <div className="nav-item">
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li>About Us</li>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavItems;

import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-12 px-12 flex justify-between items-center bg-rose-600 text-white">
      <h1 className="text-3xl font-bold">
        <Link to="/">Ecommerce</Link>
      </h1>
      <ul className="flex gap-5">
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;

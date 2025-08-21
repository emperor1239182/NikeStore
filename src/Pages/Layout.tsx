import { Outlet, Link } from "react-router-dom";
import { FiHeart, FiHome, FiUser, FiSearch, FiShoppingBag } from "react-icons/fi";

export const Layout = () => {
  return (
    <section className="flex min-h-screen">
      {/* Sidebar / Navbar */}
      <nav className="menu">
        <ul className="navListContainer">
          <li className="navlist hidden sm:block text-xl font-extrabold">
            <Link to="/home">Nike</Link>
          </li>

          <Link to="/home">
            <li className="navList">
              <FiHome size={18} />
              <p className="listText">Home</p>
            </li>
          </Link>

          <li className="navList">
            <FiSearch size={18} />
            <p className="listText">Shop</p>
          </li>

          <Link to="/favourite">
            <li className="navList">
              <FiHeart size={18} />
              <p className="listText">Favourites</p>
            </li>
          </Link>

          <Link to="/bag">
            <li className="navList">
              <FiShoppingBag size={18} />
              <p className="listText">Bag</p>
            </li>
          </Link>

          <Link to="/login">
            <li className="navList">
              <FiUser size={18} />
              <p className="listText">Profile</p>
            </li>
          </Link>
        </ul>
      </nav>

      {/* Main Page Content */}
      <main className="flex-1 max-w-4xl mx-auto p-4 sm:ml-[25%]">
        <Outlet />
      </main>
    </section>
  );
};

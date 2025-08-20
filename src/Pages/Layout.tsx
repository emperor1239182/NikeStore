import { Outlet, Link} from "react-router-dom";
import { FiHeart, FiHome, FiUser, FiSearch, FiShoppingBag } from "react-icons/fi";

export const Layout = () => {
    return (
        <>
        <section className="flex flex-col min-h-screen">

        <nav className="menu">
        <ul className="flex justify-around">
            <li className="navList">
                <Link to="/home"><FiHome size={18}/></Link>
                <p >Home</p>
            </li>
            <li className="navList">
                <FiSearch size={18}/> 
                <p>Shop</p>
            </li>
            <li className="navList">
                <Link to="/favourite"><FiHeart size={18}/></Link>
                <p>Favourites</p>
            </li>
            <li className="navList">
                <Link to="/bag"><FiShoppingBag size={18}/></Link>
                <p>Bag</p>
            </li>
            <li className="navList">
                <Link to="/login"><FiUser size={18}/></Link>
                <p>Profile</p>
            </li>
        </ul>
        </nav>
        
        <main className="flex-1">
        <Outlet />
        </main>

        </section>
        </>
    )
}
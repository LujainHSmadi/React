import { Outlet, Link, NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <>
            
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                    Contact
                </NavLink>
            </nav>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav> */}

            <Outlet />
        </>
    )
};

export default Layout;
import { Outlet } from "react-router-dom"
import Navbar from "./nav"

function Layout() {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default Layout;
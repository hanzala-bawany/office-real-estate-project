import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"

const AppLayout = () => {

console.log("laty out render hua he");


    return (
        <div className='layout'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default AppLayout
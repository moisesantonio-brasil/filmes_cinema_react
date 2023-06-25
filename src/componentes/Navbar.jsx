/* eslint-disable no-unused-vars */
import React from "react"

import { Link} from "react-router-dom"

const Navbar = () =>{
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}
export default Navbar
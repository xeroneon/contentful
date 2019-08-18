import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
    return (
        <>
            <nav>
                <Link to="/" style={{textDecoration: "none"}}>
                    <span>
                        Article Viewer
                    </span>
                </Link>
            </nav>
        </>
    )
}

export default Nav;
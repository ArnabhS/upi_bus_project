
import "./styles.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){
    return ( <nav className="nav">
        <Link to="/" className="title"> Upi Bus Service</Link>
        <ul>
            <CustomLink to="/FareChart">Fare Chart</CustomLink>
            <CustomLink to="/Maps">Maps</CustomLink>
            <CustomLink to="/BookTickets">BookTickets</CustomLink>
        </ul>
</nav>)

function CustomLink({to, children,...props}){
     const resolvedPath=useResolvedPath(to);
     const isActive=useMatch({path: resolvedPath.pathname, end:true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
    )

}

}
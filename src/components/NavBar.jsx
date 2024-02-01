import { Link } from "react-router-dom";
export default function NavBar(){
    return(
        <div id="container">
            <div className="logo">
                <Link to="/">kalvium</Link>
            </div>
            <div className="components">
                <Link to="/Contact">Contact</Link>
                <Link to="/Registration">Registration</Link>
            </div>
        </div>
    )
}
import backIcon from "../assets/photo/menu-btn.png"
import { Link } from "react-router-dom";

function Header(){
    return (
    <header class="header">
        <div class="container">
            <Link to="/" class="btn-category">
            <img src={backIcon} alt="Menu button" class="image-button"/>
            </Link>
        </div>
    </header>
    );
}

export default Header;
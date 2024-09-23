import internationalIcon from "../assets/photo/International.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Menu() {
    return (
        <section className="mobile-block">
            <div className="mobile-block_header is-danger">
                Меню
            </div>
            <div className="category-item">
                <img 
                    src={internationalIcon} 
                    className="komads2" 
                    alt="International" 
                    style={{ width: '150px', height: 'auto' }} 
                />
                <span className="category-item__title">International</span>
                <Link to="/HomePage">
                    <button className="button_team">Узнать</button>
                </Link>
            </div>
            <div className="category-item">
                <img 
                    src="https://esportsadvocate.net/wp-content/uploads/2023/04/ESL-One-Berlin-Dota-2-Major-18-teams.jpg" 
                    className="komads2" 
                    alt="Teams" 
                    style={{ width: '150px', height: 'auto' }} 
                />
                <span className="category-item__title">Teams</span>
                <Link to="/Categories">
                    <button className="button_team">Узнать</button>
                </Link>
            </div>
        </section>
    );
}

export default Menu;

import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return(
        <div>
            <h1>Порефлексируйте на танцующего кота или просмотрите список репозиториев</h1>
            <div className="wrap">
                <Link to="/cat"><button id="btn">Котик</button></Link>
                <Link to="/repos"><button id="btn">Репозитории</button></Link>
            </div>
        </div>
    )
}

export default MainPage;
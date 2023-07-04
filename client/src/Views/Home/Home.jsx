import React from "react";
import { Link } from "react-router-dom";


function Home() {
    return(
        <div>
            <h1>CRM Usuarios</h1>
            <div>
            <Link to="/register"> Registrar nuevo usuario</Link> 
            <Link to="/database"> Consultar usuarios</Link>
            </div>

           

        </div>
    )
}

export default Home
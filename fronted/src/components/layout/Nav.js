import '../../styles/components/layout/Nav.css'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({isActive}) => isActive ? "activo" : undefined}
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/nosotros" 
                            className={({isActive}) => isActive ? "activo" : undefined}
                        >
                            Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/mascotas" 
                            className={({isActive}) => isActive ? "activo" : undefined}
                        >
                            Mascotas en Adopción
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contacto" 
                            className={({isActive}) => isActive ? "activo" : undefined}
                        >
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;

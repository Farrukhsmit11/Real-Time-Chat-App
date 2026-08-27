import "./SideBar.css"
import { routes } from '../../routes/ProtectedRoutes';
import { NavLink, useNavigate } from 'react-router-dom';

const SideBar = ({isActive}) => {

    const navigate = useNavigate()

    return (
        <div className='nav-items-main'>
            {routes.map((route, index) => {
                return (
                    <NavLink
                        className={({ isActive }) => `nav-item-link  ${isActive ? "active" : ""}`}
                        to={route.path}
                        key={route.key}
                    >
                        <div className='nav-items-content'>
                            <span className='nav-icon'> {route.icon}
                            </span>
                            <span
                                className="route-label"
                            >
                                {route.key}</span>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default SideBar
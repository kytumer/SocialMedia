import { NavLink } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (<div className='sidebar'>
        <div className="sidebar__container">
            <ul>
                <li>
                    <NavLink to="/profile">Моя страница</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs">Сообщения</NavLink>
                </li>
                <li>
                    <NavLink to="/friends">Друзья</NavLink>
                </li>
                <li>
                    <NavLink to="/music">Музыка</NavLink>
                </li>
                <li>
                    <NavLink to="/settings">Настройки</NavLink>
                </li>
            </ul>
        </div>
    </div >
    )
}

export default Sidebar;
import React, {useState} from "react";
import {Link} from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { SidebarData } from '../../data/SiderBarData';
import "./NavigationBar.css";
import ListItem from '../SharedComponents/ListItem'
function NavigationBar(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <MenuOpenIcon  className={"icon"} onClick={showSidebar} titleAccess={"Open menu"}/>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <CloseIcon className={"icon"} titleAccess={"Close menu"} />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                           return <ListItem item={item} index={index}/>
                        })}
                    </ul>
                </nav>
        </>
    )
}

export default NavigationBar;

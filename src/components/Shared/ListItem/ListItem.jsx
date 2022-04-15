import {Link} from "react-router-dom";
import React from "react";
import "./ListItem.css";

function ListItem({item, index}){
    return (
        <li key={index} className={item.cName}>
            <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
            </Link>
        </li>
    );
}

export default ListItem;

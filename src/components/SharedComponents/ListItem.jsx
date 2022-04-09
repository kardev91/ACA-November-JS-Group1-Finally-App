import {Link} from "react-router-dom";
import React from "react";
import "./List_Item.css";

export default function ListItem({item, index}){
    return (
        <li key={index} className={item.cName}>
            <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
            </Link>
        </li>
    );
}

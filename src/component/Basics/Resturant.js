// import React from 'react'
import './style.css'
import MenuCard from "./menuCard";
import { useState } from 'react';
import Menu from "./menuApi";
const Resturent = () => {
    const [menuData,setMenuData] = useState(Menu);
    return (
        <>
           <MenuCard menuData={menuData}/>
        </>
    )

}
export default Resturent;
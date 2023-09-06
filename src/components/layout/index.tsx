import React from "react";
import Main from "../main";
import Menu from '../menu'
import { MenuBottom } from "../menu/menuBottom";

export default function Layout(){
    return(
       <div className = 'h-full flex flex-col justify-between'>
            <Menu />
            <Main />
            <MenuBottom />
       </div>
    )
}
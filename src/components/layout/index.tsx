import React from "react";
import Main from "../main";
import Menu from '../menu'
import { MenuBottom } from "../menu/menuBottom";

export default function Layout(){
    return(
       <>
            <Menu />
            <Main />
            <MenuBottom />
       </>
    )
}
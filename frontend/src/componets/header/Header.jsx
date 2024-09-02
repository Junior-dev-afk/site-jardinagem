import React from "react"
import style from "./header.module.css" 
import logo from "/public/imagens/logo.png"


function Header () {

    return (
        <div className={style.cabecalho} >
            <div style={{marginLeft : 20}}> 
                <img src={logo} alt="Mão segurando uma planta"/>
            </div>
            <div className={style.margin_inline}>
                <button className={style.button_header}>sobre</button>
                <button className={style.button_header}>contato</button>
            </div>
        </div>
    )

}


export default Header
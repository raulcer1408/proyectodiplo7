import PropsType from 'prop-types';
import { useState } from "react";
import { Formpopup } from "./form_popup";
export const Popup=({Boton})=>{
 const[isOpen,setIsOpen]=useState(false);
    return(
     <>
        <div>
            <h4>Proyecto Popup</h4>
            <button onClick={()=>setIsOpen(true)}>{Boton}</button>
        </div>
        {isOpen && <Formpopup setIsopen={setIsOpen}></Formpopup>}
     </>
    )
};

Popup.propTypes={
 Boton:PropsType.string
};
Popup.defaultProps={
    Boton:"Abrir"
};
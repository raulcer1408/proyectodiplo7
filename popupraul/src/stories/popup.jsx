import { useState } from "react";
import { Formpopup } from "./form_popup";
export const Popup=()=>{
 const[isOpen,setIsOpen]=useState(false);
    return(
     <>
        <div>
            <h4>Proyecto Popup</h4>
            <button onClick={()=>setIsOpen(true)}>Abrir Popup</button>
        </div>
        {isOpen && <Formpopup setIsopen={setIsOpen}></Formpopup>}
     </>
    )
};


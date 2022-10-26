import React, { useState } from "react";

//dropdown component 

export default function Dropdown({list}){
    
    console.log(list)
    const [isHover , setIsHover]  = useState(false)

    const [selectedItem, setSelectedItem] =useState('Select a Item')

    let Lists = list.map(item =>( <h3 className="list-item" key={item} onClick={()=> selectedText(`${item}`)}>{item}</h3>)) 
    
    function selectedText(item){
        setSelectedItem(item)
    }
    return(
        <div className="dropdown-container"  onMouseEnter={()=>(setIsHover(true))} onMouseLeave={()=>(setIsHover(false))}>
            <div className="dropdown" >
                <h2>{selectedItem}</h2> 
                <h2 className="dropdown-arrow"><img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/000000/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-4.png" alt="dropdown-arrow"/></h2>
            </div>
            {isHover && <div className="list-items-box">
                {Lists}
            </div>}
        </div>
    ) 
}

import React from "react";
import { useState } from "react";
import './style.css';

function Volume ({selected,setSelected, isActive, onToggle}) {

    const options = ['1 Cup', '2 Cups', '3 Cups', '4 Cups', '5 Cups']
    const promptText = "Volume of vessel";

    

    return (
        <div className = "vessel">
            <div className = "vessel-btn" 
            onClick={onToggle}>
             {selected ? selected : promptText}
             </div>
            {isActive && (
                    <div className="vessel-content"> 
                       {options.map((option) => (
                         <div key={option} onClick={() => {
                            setSelected(option);
                            onToggle();

                         }
                    
                    }
                        className = "vessel-item">{option}</div>
                       ))}
             </div> 
            )}
         </div>
    )
}

export default Volume;
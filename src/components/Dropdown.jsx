import React from "react";
import './style.css';

function Dropdown ({selected,setSelected, isActive, onToggle}) {


    const options = ['Assam', 'Black Tea', 'Ceylon', 'Earl Grey'];
    const promptText = "Select tea type";

  

  
    return (
        <div className = "dropdown">
            <div className = "dropdown-btn" 
            onClick = {onToggle}>
                {selected ? selected : promptText}
            </div>
            {isActive && (
                <div className="dropdown-content"> 
                    {options.map((option) => (
                        <div key={option} onClick={() => {
                            setSelected(option);
                            onToggle();
                        }} className="dropdown-item">{option}</div>
                    ))}
                </div> 
            )}
        </div>
    );
}

export default Dropdown;

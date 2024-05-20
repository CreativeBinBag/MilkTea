import React from "react";
import './style.css';

function TeaStrength({selected,setSelected, isActive, onToggle}) {

    const options = ['Strong', 'Medium', 'Delicate'];
    const promptText = "Tea Strength";

    const getColorClass = (option) => {
        switch (option) {
            case 'Strong':
                return 'strong';
            case 'Medium':
                return 'medium';
            case 'Delicate':
                return 'delicate';
            default:
                return '';
        }
    }

     
   

    return (
        <div className="teastrength">
            <div className={`teastrength-btn ${getColorClass(selected)}`} 
            onClick= {onToggle}>
                {selected ? selected : promptText}
            </div>
            {isActive && (
                <div className="teastrength-content">
                    {options.map((option) => (
                        <div key={option} onClick={() => {
                            setSelected(option);
                            onToggle();
                        }} 
                        className={`teastrength-item ${getColorClass(option)}`}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TeaStrength;
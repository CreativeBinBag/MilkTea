import React from "react";
import './style.css';




const Countdown = ({remainingTime}) => {

    const formattedMinutes = String(remainingTime.minutes).padStart(2, '0');
    const formattedSeconds = String(remainingTime.seconds).padStart(2, '0');

  
    return (
    
     <div className = "countdown"> 
        <div className = "content">
            <div className = "box">
                <div className = "value"> 
                   <span>{formattedMinutes}</span> 
                </div>
                <span className = "label"> minutes </span>
            </div>
            <div className = "box">
                <div className = "value"> 
                   <span>{formattedSeconds}</span> 
                </div>
                <span className = "label"> seconds </span>
            </div>            
         </div>
     </div>

    );
}

export default Countdown;
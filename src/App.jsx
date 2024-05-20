import React, {useState, useEffect} from 'react'
import './components/style.css'
import Countdown from "./components/countdown"
import Dropdown from "./components/Dropdown"
import TeaStrength from './components/TeaStrength';
import Volume from './components/Volume';
import Notepad from './components/Notepad';
import teapotImage from '../public/images/teapot.png'; // Import teapot image
import teaImage from '../public/images/tea.png'; // Import tea image
import fillSound from '../public/sounds/audio.mp3'; // Import fill sound




const brewingTimes = {

  'Assam': {
    
    'Strong': {

        '1 Cup':  {minutes: 3, seconds: 30}, 
        '2 Cups': {minutes: 4, seconds: 0},
        '3 Cups': {minutes: 4, seconds: 30},
        '4 Cups': {minutes: 5, seconds: 0},
        '5 Cups': {minutes: 5, seconds: 30},

    },
    'Medium': {

        '1 Cup':  {minutes: 3, seconds: 0}, 
        '2 Cups': {minutes: 3, seconds: 30},
        '3 Cups': {minutes: 4, seconds: 0},
        '4 Cups': {minutes: 4, seconds: 30},
        '5 Cups': {minutes: 5, seconds: 0},
    },
    'Delicate': {

        '1 Cup':  {minutes: 2, seconds: 30}, 
        '2 Cups': {minutes: 3, seconds: 0},
        '3 Cups': {minutes: 3, seconds: 30},
        '4 Cups': {minutes: 4, seconds: 0},
        '5 Cups': {minutes: 4, seconds: 30},

    }}, 

'Black Tea': {
    
    'Strong': {

        '1 Cup':  {minutes: 3, seconds: 0}, 
        '2 Cups': {minutes: 3, seconds: 30},
        '3 Cups': {minutes: 4, seconds: 0},
        '4 Cups': {minutes: 4, seconds: 30},
        '5 Cups': {minutes: 5, seconds: 0},

        },
    'Medium': {

        '1 Cup':  {minutes: 2, seconds: 30}, 
        '2 Cups': {minutes: 3, seconds: 0},
        '3 Cups': {minutes: 3, seconds: 30},
        '4 Cups': {minutes: 4, seconds: 0},
        '5 Cups': {minutes: 4, seconds: 30},
        },
    'Delicate': {

        '1 Cup':  {minutes: 2, seconds: 0}, 
        '2 Cups': {minutes: 2, seconds: 30},
        '3 Cups': {minutes: 3, seconds: 0},
        '4 Cups': {minutes: 3, seconds: 30},
        '5 Cups': {minutes: 4, seconds: 0},

    }},

 'Ceylon': {
    
    'Strong': {
    
        '1 Cup':  {minutes: 3, seconds: 30}, 
        '2 Cups': {minutes: 4, seconds: 0},
        '3 Cups': {minutes: 4, seconds: 30},
        '4 Cups': {minutes: 5, seconds: 0},
        '5 Cups': {minutes: 5, seconds: 30},
    
            },
    'Medium': {
    
         '1 Cup':  {minutes: 3, seconds: 0}, 
         '2 Cups': {minutes: 3, seconds: 30},
         '3 Cups': {minutes: 4, seconds: 0},
         '4 Cups': {minutes: 4, seconds: 30},
         '5 Cups': {minutes: 5, seconds: 0},
            },
    'Delicate': {
    
         '1 Cup':  {minutes: 2, seconds: 30}, 
         '2 Cups': {minutes: 3, seconds: 0},
         '3 Cups': {minutes: 3, seconds: 30},
         '4 Cups': {minutes: 4, seconds: 0},
         '5 Cups': {minutes: 4, seconds: 30},
    
    }},

'Earl Grey': {
    
    'Strong': {
        
         '1 Cup':  {minutes: 4, seconds: 0}, 
         '2 Cups': {minutes: 4, seconds: 30},
         '3 Cups': {minutes: 5, seconds: 0},
         '4 Cups': {minutes: 5, seconds: 30},
         '5 Cups': {minutes: 6, seconds: 0},
        
                },
    'Medium': {
        
         '1 Cup':  {minutes: 3, seconds: 30}, 
         '2 Cups': {minutes: 4, seconds: 0},
         '3 Cups': {minutes: 4, seconds: 30},
         '4 Cups': {minutes: 5, seconds: 0},
         '5 Cups': {minutes: 5, seconds: 30},
                },
    'Delicate': {
        
         '1 Cup':  {minutes: 3, seconds: 0}, 
         '2 Cups': {minutes: 3, seconds: 30},
         '3 Cups': {minutes: 4, seconds: 0},
         '4 Cups': {minutes: 4, seconds: 30},
         '5 Cups': {minutes: 5, seconds: 0},
        
     }}
};




function App() {

  const [selected, setSelected] = useState("");
  const [selectedStrength, setSelectedStrength] = useState("");
  const [selectedVolume, setSelectedVolume] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [remainingTime, setRemainingTime] = useState({minutes: '', seconds: ''});
  const [timerActive, setTimerActive] = useState(false);
  const [music] = useState(new Audio(fillSound)); // Create audio element



  
  const toggle = (menu) => {
    if(activeMenu === menu){
      setActiveMenu(null);

    }else {
      setActiveMenu(menu)
    }
  }

  const startTimer = () => {
    const time = calculateTime(selected, selectedStrength, selectedVolume);
    setRemainingTime({ minutes: time.minutes, seconds: time.seconds });
    setTimerActive(true);
    music.pause();


};

const handleStartClick = () => {
  if (!timerActive) {
    startTimer();

  }
};

  const calculateTime = (teaType, teaStrength, teaVolume) => {

    const brewingTime = brewingTimes[teaType][teaStrength][teaVolume];
    return {minutes: brewingTime.minutes, seconds: brewingTime.seconds};

  }

  // useEffect to manage timer countdown
  useEffect(()=> {
    let interval;

    if(timerActive) {
      interval = setInterval(() => {
        if(remainingTime.minutes === 0 && remainingTime.seconds === 0){
          clearInterval(interval);
          setTimerActive(false);
          music.play(); // Start playing audio when the timer reaches 0

        } else if(remainingTime.seconds === 0){
          setRemainingTime({minutes: remainingTime.minutes - 1, seconds: 59});
        } else {
          setRemainingTime({minutes: remainingTime.minutes, seconds: remainingTime.seconds -1});
        } 

      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [remainingTime, timerActive]);

  //useEffect to manage animation duration
   useEffect(() => {
    if (timerActive) {
      const totalBrewingTimeInSeconds = (remainingTime.minutes * 60) + remainingTime.seconds;
      const animationDuration = totalBrewingTimeInSeconds * 1000; // Convert to milliseconds
      document.documentElement.style.setProperty('--animation-duration', `${animationDuration}ms`);
    }
  }, [remainingTime, timerActive]);
  
 //update countdown timer when all selections are done 
  useEffect(() => {
    if (selected && selectedStrength && selectedVolume) {
      const brewTime = calculateTime(selected, selectedStrength, selectedVolume);
      setRemainingTime({ minutes: brewTime.minutes, seconds: brewTime.seconds });
    }
  }, [selected, selectedStrength, selectedVolume]);
  

  return (
    <div className = "container">
      
      <img src={teapotImage} alt="Teapot" className= "teapot" />
      <img src={teaImage} alt="Tea" className={`tea ${timerActive ? 'fill' : ''}`} />
      
     



        <Dropdown 
           selected = {selected} 
           setSelected = {setSelected}
           isActive = {activeMenu === 'dropdown'} 
           onToggle = {() => toggle('dropdown')}

           
        />


        <TeaStrength 
            selected = {selectedStrength} 
            setSelected = {setSelectedStrength}
            isActive = {activeMenu === 'teastrength'} 
            onToggle = {() => toggle('teastrength')}

        />

      
        <Volume 
            selected = {selectedVolume} 
            setSelected = {setSelectedVolume} 
            isActive = {activeMenu === 'volume'} 
            onToggle = {() => toggle('volume')}

            
        />
  
        <button className = "start-btn" onClick ={handleStartClick} disable = {`${(timerActive)}`}> Start Brewing! </button>
        <Countdown remainingTime = {remainingTime} />

        <Notepad selected= {selected} selectedStrength= {selectedStrength}/>

        <div className="text">A wise person once said, "Everytime I think about having milk tea during the evening, 
         I can only describe the feeling as, yes, things will be okay and life isn't all that bad."</div> 


     
    </div>
  )
}

export default App 
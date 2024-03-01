import React, { useState,useRef } from 'react'
import FanImage from '../Assets/fan.png'
import FanSound from '../Assets/fan-191436.mp3';

import './index.css'

const Fan = () => {

    const [animationDuration, setAnimationDuration] = useState('0s');
    const [fanSoundSpeed, setFanSoundSpeed] = useState(1)

    const audioRef = useRef(null);


    const handleOn = () => {
        setAnimationDuration('3s');
        playFanSound();
      };
    
      const handleOff = () => {
        setAnimationDuration('0s');
        stopFanSound();
      };
      const handle1=()=>{
        setAnimationDuration('1s');
        setFanSoundSpeed(0.5);
      }
      const handle2=()=>{
        setAnimationDuration('0.5s');
        setFanSoundSpeed(1);
      }
      const handle3=()=>{
        setAnimationDuration('0.1s')
        setFanSoundSpeed(2);
      }


      const playFanSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
            audioRef.current.addEventListener('play', () => {
                audioRef.current.playbackRate = fanSoundSpeed;
            });
        }
    };
    
    
      const stopFanSound = () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      };
  return (
    <div className='card-coantainer'>
      <img id='fan-img' src={FanImage} alt='fan' style={{ animationDuration }} />
      <audio ref={audioRef} src={FanSound} loop></audio>
      <div className='button-style'>
      <button onClick={handleOn}>ON</button>
      <button onClick={handleOff}>OFF</button>
      <button onClick={handle1}>1</button>
      <button onClick={handle2}>2</button>
      <button onClick={handle3}>3</button>
      </div>
      

    </div>
  )
}

export default Fan;
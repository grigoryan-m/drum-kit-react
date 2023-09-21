import './Button.css';
import React, { useEffect } from 'react';

function Button(props){
    useEffect(() => {
        document.addEventListener("keypress", (event)=>{
            if(event.key.toLowerCase() === props.hotkey){
                playSound();
            }
        })
    });

    let audio;
    const playSound = () => {
        audio = new Audio(`/audio/${props.title}.wav`);
        audio.play();
	}

    return(
        <button onClick={playSound}>
            <p className='buttonTitle'>{props.hotkey.toUpperCase()}</p>
            <p className='buttonDescription'>{props.title}</p>
        </button>
    );
}

export default Button;

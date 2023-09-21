import './Button.css';
import React, { useEffect } from 'react';

function Button(props){
    useEffect(() => {
        document.addEventListener("keypress", (event)=>{
            if(event.key.toLowerCase() === props.hotkey){
                document.innerHTML = "a";
            }
        })
    });

    return(
        <button>
            <p className='buttonTitle'>{props.hotkey.toUpperCase()}</p>
            <p className='buttonDescription'>{props.title}</p>
        </button>
    );
}

export default Button;
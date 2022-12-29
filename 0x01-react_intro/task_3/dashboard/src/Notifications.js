import React from 'react';
import './Notifications.css'
import closeIcon from './close-icon.png'
import { getLatestNotification } from './utils.js'

function notifications(){
    return(
        <div className='Notifications'>
            <button style={{ float:"right",  }} aria-label="Close"
                onClick={() => { 
                console.log("Close button has been clicked");}} >
                    <img src={closeIcon} alt="close button" height="10px" width="10px"></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li style={{color:"#1D0563"}} data-priority='default'>New course available</li>
                <li style={{color:"#DF354B"}} data-priority='urgent'>New resume available</li>
                <li style={{color:"#FF0B06"}} dangerouslySetInnerHTML={getLatestNotification()}></li>
            </ul>
        </div>
    );
}
export default notifications;
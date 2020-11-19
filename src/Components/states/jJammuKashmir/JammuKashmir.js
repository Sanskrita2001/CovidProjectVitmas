import React from 'react'
import JK from "./JK";
import "../card-styles.css"

function JammuKashmir({jk}) {
    return (
        <div style={userStyle}>
             {jk.map((value, index) => {
                return(
                <JK key={index} value={value}/>
                )
            })}
        </div>
    )
}
const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '0rem',
};

export default JammuKashmir

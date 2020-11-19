import React from 'react'
import LK from "./LK";
import "../card-styles.css"

function Ladakh({ladakh}) {
    return (
        <div style={userStyle}>
             {ladakh.map((value, index) => {
                return(
                <LK key={index} value={value}/>
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

export default Ladakh
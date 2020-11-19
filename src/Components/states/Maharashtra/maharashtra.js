import React from 'react'
import MH from "./MH";
import "../card-styles.css"

function Maharashtra({maharashtra}) {
    return (
        <div style={userStyle}>
             {maharashtra.map((value, index) => {
                return(
                <MH key={index} value={value}/>
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

export default Maharashtra

import React from 'react'
import JH from "./JH";
import "../card-styles.css"

function Jharkhand({jharkhand}) {
    return (
        <div style={userStyle}>
             {jharkhand.map((value, index) => {
                return(
                <JH key={index} value={value}/>
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

export default Jharkhand

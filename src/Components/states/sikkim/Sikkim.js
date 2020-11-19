import React from 'react'
import SK from "./SK";
import "../card-styles.css"

function Sikkim({sikkim}) {
    return (
        <div style={userStyle}>
             {sikkim.map((value, index) => {
                return(
                <SK key={index} value={value}/>
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

export default Sikkim

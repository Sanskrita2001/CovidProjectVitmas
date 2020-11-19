import React from 'react'
import AP from "./AP";
import "../card-styles.css"

function Andhra({arunachal}) {
    return (
        <div style={userStyle}>
             {arunachal.map((value, index) => {
                return(
                <AP key={index} value={value}/>
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

export default Andhra

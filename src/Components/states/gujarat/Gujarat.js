import React from 'react'
import GJ from "./GJ";
import "../card-styles.css"

function Gujarat({gujarat}) {
    return (
        <div style={userStyle}>
             {gujarat.map((value, index) => {
                return(
                <GJ key={index} value={value}/>
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

export default Gujarat

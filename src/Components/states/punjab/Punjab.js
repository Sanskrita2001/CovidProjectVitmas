import React from 'react'
import PB from "./PB";
import "../card-styles.css"

function Punjab({punjab}) {
    return (
        <div style={userStyle}>
             {punjab.map((value, index) => {
                return(
                <PB key={index} value={value}/>
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

export default Punjab

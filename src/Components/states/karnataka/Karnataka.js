import React from 'react'
import KA from "./KA";
import "../card-styles.css"

function Karnataka({karnataka}) {
    return (
        <div style={userStyle}>
             {karnataka.map((value, index) => {
                return(
                <KA key={index} value={value}/>
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

export default Karnataka

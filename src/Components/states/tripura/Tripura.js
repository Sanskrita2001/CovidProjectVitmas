import React from 'react'
import TR from "./TR";
import "../card-styles.css"

function Tripura({tripura}) {
    return (
        <div style={userStyle}>
             {tripura.map((value, index) => {
                return(
                <TR key={index} value={value}/>
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

export default Tripura

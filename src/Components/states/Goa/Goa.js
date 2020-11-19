import React from 'react'
import GA from "./GA";
import "../card-styles.css"

function Goa({goa}) {
    return (
        <div style={userStyle}>
             {goa.map((value, index) => {
                return(
                <GA key={index} value={value}/>
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

export default Goa

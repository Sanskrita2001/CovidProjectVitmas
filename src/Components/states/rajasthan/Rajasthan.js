import React from 'react'
import RJ from "./RJ";
import "../card-styles.css"

function Rajasthan({rajasthan}) {
    return (
        <div style={userStyle}>
             {rajasthan.map((value, index) => {
                return(
                <RJ key={index} value={value}/>
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

export default Rajasthan

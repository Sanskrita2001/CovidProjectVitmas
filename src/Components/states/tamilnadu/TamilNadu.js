import React from 'react'
import TN from "./TN";
import "../card-styles.css"

function TamilNadu({tamilnadu}) {
    return (
        <div style={userStyle}>
             {tamilnadu.map((value, index) => {
                return(
                <TN key={index} value={value}/>
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

export default TamilNadu

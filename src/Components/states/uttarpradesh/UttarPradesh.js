import React from 'react'
import UP from "./UP";
import "../card-styles.css"

function UttarPradesh({uttarpradesh}) {
    return (
        <div style={userStyle}>
             {uttarpradesh.map((value, index) => {
                return(
                <UP key={index} value={value}/>
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

export default UttarPradesh

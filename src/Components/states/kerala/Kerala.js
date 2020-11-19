import React from 'react'
import KL from "./KL";
import "../card-styles.css"

function Kerala({kerala}) {
    return (
        <div style={userStyle}>
             {kerala.map((value, index) => {
                return(
                <KL key={index} value={value}/>
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

export default Kerala
import React from 'react'
import MP from "./MP";
import "../card-styles.css"

function MadhyaPradesh({madhyapradesh}) {
    return (
        <div style={userStyle}>
             {madhyapradesh.map((value, index) => {
                return(
                <MP key={index} value={value}/>
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

export default MadhyaPradesh

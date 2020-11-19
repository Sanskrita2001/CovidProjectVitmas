import React from 'react'
import MN from "./MN";
import "../card-styles.css"

function Manipur({manipur}) {
    return (
        <div style={userStyle}>
             {manipur.map((value, index) => {
                return(
                <MN key={index} value={value}/>
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

export default Manipur

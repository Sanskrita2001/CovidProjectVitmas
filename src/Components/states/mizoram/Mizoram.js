import React from 'react'
import MZ from "./MZ";
import "../card-styles.css"

function Mizoram({mizoram}) {
    return (
        <div style={userStyle}>
             {mizoram.map((value, index) => {
                return(
                <MZ key={index} value={value}/>
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

export default Mizoram

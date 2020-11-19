import React from 'react'
import OR from "./OR";
import "../card-styles.css"

function Odisha({odisha}) {
    return (
        <div style={userStyle}>
             {odisha.map((value, index) => {
                return(
                <OR key={index} value={value}/>
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

export default Odisha

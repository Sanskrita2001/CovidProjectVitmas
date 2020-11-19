import React from 'react'
import AAP from "./AAP";
import "../card-styles.css"

function Andhra({andhra}) {
    return (
        <div style={userStyle}>
             {andhra.map((value, index) => {
                return(
                <AAP key={index} value={value}/>
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

export default Andhra

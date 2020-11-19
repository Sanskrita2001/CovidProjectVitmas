import React from 'react'
import AA from "./AA";
import "../card-styles.css"

function Andhra({andaman}) {
    return (
        <div style={userStyle}>
             {andaman.map((value, index) => {
                return(
                <AA key={index} value={value}/>
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
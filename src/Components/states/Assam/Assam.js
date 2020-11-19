import React from 'react'
import AS from "./AS";
import "../card-styles.css"

function Assam({assam}) {
    return (
        <div style={userStyle}>
             {assam.map((value, index) => {
                return(
                <AS key={index} value={value}/>
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

export default Assam

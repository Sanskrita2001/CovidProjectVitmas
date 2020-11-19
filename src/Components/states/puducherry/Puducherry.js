import React from 'react'
import PY from "./PY";
import "../card-styles.css"

function Puducherry({puducherry}) {
    return (
        <div style={userStyle}>
             {puducherry.map((value, index) => {
                return(
                <PY key={index} value={value}/>
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

export default Puducherry

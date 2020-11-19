import React from 'react'
import DN from "./DN";
import "../card-styles.css"

function Dadra({dadra}) {
    return (
        <div style={userStyle}>
             {dadra.map((value, index) => {
                return(
                <DN key={index} value={value}/>
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

export default Dadra

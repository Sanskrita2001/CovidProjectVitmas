import React from 'react'
import LD from "./LD";
import "../card-styles.css"

function Lakshwadeep({lakshwadeep}) {
    return (
        <div style={userStyle}>
             {lakshwadeep.map((value, index) => {
                return(
                <LD key={index} value={value}/>
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

export default Lakshwadeep
import React from 'react'
import NL from "./NL";
import "../card-styles.css"

function Nagaland({nagaland}) {
    return (
        <div style={userStyle}>
             {nagaland.map((value, index) => {
                return(
                <NL key={index} value={value}/>
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

export default Nagaland

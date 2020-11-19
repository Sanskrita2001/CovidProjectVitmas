import React from 'react'
import HP from "./HP";
import "../card-styles.css"

function Himachal({himachal}) {
    return (
        <div style={userStyle}>
             {himachal.map((value, index) => {
                return(
                <HP key={index} value={value}/>
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

export default Himachal

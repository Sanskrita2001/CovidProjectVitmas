import React from 'react'
import DL from "./DL";
import "../card-styles.css"

function Delhi({delhi}) {
    return (
        <div style={userStyle}>
             {delhi.map((value, index) => {
                return(
                <DL key={index} value={value}/>
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

export default Delhi

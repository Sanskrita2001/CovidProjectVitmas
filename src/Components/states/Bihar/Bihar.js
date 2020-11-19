import React from 'react'
import BR from "./BR";
import "../card-styles.css"

function Bihar({bihar}) {
    return (
        <div style={userStyle}>
             {bihar.map((value, index) => {
                return(
                <BR key={index} value={value}/>
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

export default Bihar

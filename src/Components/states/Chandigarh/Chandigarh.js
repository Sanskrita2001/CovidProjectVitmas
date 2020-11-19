import React from 'react'
import CH from "./CH";
import "../card-styles.css"

function Chandigarh({chandigarh}) {
    return (
        <div style={userStyle}>
             {chandigarh.map((value, index) => {
                return(
                <CH key={index} value={value}/>
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

export default Chandigarh

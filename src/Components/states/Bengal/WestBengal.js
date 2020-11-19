import React from 'react'
import WB from "./WB";
import "../card-styles.css"

function WestBengal({westbengal}) {
    return (
        <div style={userStyle}>
             {westbengal.map((value, index) => {
                return(
                <WB key={index} value={value}/>
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

export default WestBengal

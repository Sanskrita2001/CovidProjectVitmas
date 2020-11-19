import React from 'react'
import CT from "./CT";
import "../card-styles.css"

function Chhattisgarh({chhattisgarh}) {
    return (
        <div style={userStyle}>
             {chhattisgarh.map((value, index) => {
                return(
                <CT key={index} value={value}/>
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

export default Chhattisgarh

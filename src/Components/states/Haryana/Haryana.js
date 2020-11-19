import React from 'react'
import HR from "./HR";
import "../card-styles.css"

function Haryana({haryana}) {
    return (
        <div style={userStyle}>
             {haryana.map((value, index) => {
                return(
                <HR key={index} value={value}/>
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

export default Haryana

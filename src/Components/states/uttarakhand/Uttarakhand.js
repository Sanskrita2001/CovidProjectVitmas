import React from 'react'
import UK from "./UK";
import "../card-styles.css"

function Uttarakhand({uttarakhand}) {
    return (
        <div style={userStyle}>
             {uttarakhand.map((value, index) => {
                return(
                <UK key={index} value={value}/>
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

export default Uttarakhand

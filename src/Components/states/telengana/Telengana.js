import React from 'react'
import TG from "./TG";
import "../card-styles.css"

function Telengana({telengana}) {
    return (
        <div style={userStyle}>
             {telengana.map((value, index) => {
                return(
                <TG key={index} value={value}/>
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

export default Telengana

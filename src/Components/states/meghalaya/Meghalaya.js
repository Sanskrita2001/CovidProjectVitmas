import React from 'react'
import ML from "./ML";
import "../card-styles.css"

function Meghalaya({meghalaya}) {
    return (
        <div style={userStyle}>
             {meghalaya.map((value, index) => {
                return(
                <ML key={index} value={value}/>
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

export default Meghalaya

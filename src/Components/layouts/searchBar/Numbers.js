import React, { useState } from 'react'

const Numbers = ({details}) => {
    const [words, setWords] = useState('')
    const [filterDisplay, setFilterDisplay] = useState(details)
    const handleChange = (e) => {
        let oldList = details.map(detail => {
            return{
                state: detail.state.toLowerCase()
            }
        })

        if( e!==''){
            let newList = []
            setWords(e)
            newList = oldList.filter(detail => detail.state.includes(words.toLowerCase()))
            setFilterDisplay(newList)
        } else{
            setFilterDisplay(details)
        }
    }
    return (
        <div>
            <h1>Numbers</h1>
            filter: <input onChange={e => handleChange(e.target.value)}></input>
            {filterDisplay.map((detail, i) => {
                <div key={i}>
                    <li>
                        {detail.state} &nbsp;
                        <span>{detail.state}</span>
                    </li>
                </div>
            })}
        </div>
    )
}

export default Numbers

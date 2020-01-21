import React from 'react'

function Parent(props) {
    return (
        <div>
           <button onClick={props.greetHandler}>Click</button> 
        </div>
    )
}

export default Parent

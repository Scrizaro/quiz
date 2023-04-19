import React from "react"

export default function FirstPage(props){


    return (
        <div className="menu">
        <h1 className='page-title'>Quizzical</h1>
        <span className='page-description'>Description</span>
        <button className='start-button' onClick={() => props.start()}>Start Quizzical</button>
      </div>
    )
}
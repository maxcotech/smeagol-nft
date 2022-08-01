import { appColor } from '../appConstants'
import React from 'react'

function Dots() {
    return (
        <>
            <div style={{ display: 'inline-block', marginRight: '5px', background: appColor, borderRadius: "30%", width: '10px', height: '10px' }} />
            <div style={{ display: 'inline-block', marginRight: '5px', background: appColor, borderRadius: "30%", width: '10px', height: '10px' }} />
            <div style={{ display: 'inline-block', marginRight: '5px', background: appColor, borderRadius: "30%", width: '10px', height: '10px' }} />
        </>
    )
}

export default Dots
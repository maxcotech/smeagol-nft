import React from 'react'

function SiteGap({ children, bg }) {
    return (
        <div style={{ padding: '40px 4vw', background: bg }}>
            {children}
        </div>
    )
}

export default SiteGap
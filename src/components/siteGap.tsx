import React from 'react'

function SiteGap({ children, bg }:{bg?: string, children?:React.ReactNode}) {
    return (
        <div style={{ padding: '40px 4vw', background: bg }}>
            {children}
        </div>
    )
}

export default SiteGap
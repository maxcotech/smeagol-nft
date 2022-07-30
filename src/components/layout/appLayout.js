import { Container } from '@mui/system'

import React from 'react'
import Navbar from './configs/navbar'

function AppLayout({ children }) {
    return (
        <div style={{ overflow: 'hidden' }}>
            <Navbar />
            <Container sx={{ position: 'relative' }} disableGutters={true} maxWidth='xl'>
                {children}
            </Container>
        </div>
    )
}

export default AppLayout
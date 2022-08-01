import { Box, Paper } from '@mui/material'
import "../../styles/card.css";
import React from 'react';


function MapCard({ children, img }: {children: React.ReactNode,img: string, title?: string, num?: string}) {
    return (
        <Paper elevation={0} sx={{ borderRadius: '20px' }}>
            <img src={img} style={{ borderRadius: '20px', width: '100%', maxWidth: '100%', height: 'auto', objectFit: 'cover' }} />
            <Box sx={{ pb: 5, mx: 2 }}>
                {children}
            </Box>
        </Paper>
    )
}

export default MapCard
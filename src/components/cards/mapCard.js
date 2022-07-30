import { Box, Grid, Paper } from '@mui/material'
import { appColor } from 'appConstants'
import { Title3 } from 'components/typography'
import { Title0 } from 'components/typography'
import "styles/card.css";
import React from 'react'
import { Title1 } from 'components/typography';
import { Title2 } from 'components/typography';
import { appBg } from 'appConstants';

function MapCard({ children, img }) {
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
import { Grid } from '@mui/material'
import React from 'react'

function GItem({ sizes = [], children, component, ...others }) {
    return (
        <Grid component={component} {...others} item xs={sizes[0] ?? 12} sm={sizes[1] ?? 12} md={sizes[2] ?? 12} lg={sizes[3] ?? 12}>{children}</Grid>
    )
}

export default GItem
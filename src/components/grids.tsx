import { Grid, GridProps, Box } from '@mui/material'
import React from 'react'

function GItem({ sizes = [], children, component, ...others }:{
    sizes?: number[],
    children?: React.ReactNode,
    component?: React.ElementType<any>,
    others?: GridProps,
    style?: object

}) {
    return (
        <Grid component={(component ?? undefined) as React.ElementType<any>} {...others} item xs={sizes[0] ?? 12} sm={sizes[1] ?? 12} md={sizes[2] ?? 12} lg={sizes[3] ?? 12}>{children}</Grid>
    )
}

export default GItem
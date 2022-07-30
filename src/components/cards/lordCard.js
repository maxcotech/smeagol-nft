import { Box, Paper } from '@mui/material'
import { appColor } from 'appConstants'
import { Grey } from 'components/typography'
import { Title3 } from 'components/typography'
import React from 'react'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'

function LordCard({ name, img, role, handle, linkedin }) {
    return (
        <Paper elevation={0} sx={{ borderRadius: '20px', background: 'rgba(255,255,255, 0.9)', p: 2 }}>
            <img src={img} style={{ borderRadius: '20px 20px 0px 0px', width: '100%', height: '300px', objectFit: 'cover' }} />
            <Box className="df jsb" sx={{ my: 2 }}>
                <div>
                    <Title3 style={{ color: appColor, fontWeight: 'bold' }}>{name}</Title3>
                    <Grey sm style={{ textTransform: 'uppercase' }}>{role}</Grey>
                </div>
                {handle ?
                    <a href={linkedin ? handle : `https://twitter.com/${handle}`} rel="noreferrer" target="_blank" style={{ color: appColor }}>{linkedin ? <BsLinkedin size={25} style={{ color: appColor }} /> : <BsTwitter size={25} style={{ color: appColor }} />}</a>
                    : <></>}
            </Box>
        </Paper>
    )
}

export default LordCard
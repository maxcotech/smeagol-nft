import { Box, Grid, Paper } from '@mui/material'
import { bgImg } from 'appConstants'
import { appColor } from 'appConstants'
import GItem from 'components/grids'
import AppLayout from 'components/layout/appLayout'
import SiteBtn from 'components/siteBtn'
import SiteGap from 'components/siteGap'
import { Title3 } from 'components/typography'
import { Grey } from 'components/typography'
import React from 'react'
import { TiArrowRightOutline } from "react-icons/ti";


function Home() {
    return (
        <AppLayout>
            <SiteGap>
                <Box className="df ac jc" sx={{ minHeight: '100vh', width: '100%' }}>
                    <Grid container alignItems="center" justifyContent="center">
                        <GItem sizes={[12, 10, 8, 6]} style={{ position: 'relative' }}>
                            <img src={bgImg} width="100%" height="inherit" />
                            <div className="bgOverlay" />
                        </GItem>
                    </Grid>

                    {/* <div style={{ textAlign: 'center' }}><Box className='homeTitle'>Smeagol</Box>
                        <Box className="homeTitle">cops</Box></div> */}
                </Box>
                <Grid container sx={{ mt: 10, color: 'white' }} className="df ac jsb">
                    <GItem sizes={[12, 6, 4, 4]}><div>Copyright ©{new Date().getFullYear()} Smeagols</div>
                        <div>All rights reserved</div></GItem>
                    {/* <GItem sizes={[12, 6, 4, 5]} component={Paper} elevation={0} className="df ac jsb" sx={{ borderRadius: '10px', py: 2, px: 4 }}>
                        <div>
                            <Grey sm>Need more info</Grey>
                            <Title3 color={appColor}>View Lords</Title3>
                        </div>
                        <SiteBtn p={5} bw="2px" rightIcon={<TiArrowRightOutline size={20} />}>More Info</SiteBtn>
                    </GItem> */}
                </Grid>
            </SiteGap>
        </AppLayout>
    )
}

export default Home
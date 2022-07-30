import { Box, Grid, Paper } from '@mui/material'
import { micheal } from 'appConstants'
import { rafael } from 'appConstants'
import { redwalker } from 'appConstants'
import { hodlImg } from 'appConstants'
import { todoImg } from 'appConstants'
import { narrateImg } from 'appConstants'
import { oluxkwu } from 'appConstants'
import { chisom } from 'appConstants'
import { athanasius } from 'appConstants'
import { appColor } from 'appConstants'
import MapCard from 'components/cards/mapCard'
import Dots from 'components/dots'
import GItem from 'components/grids'
import AppLayout from 'components/layout/appLayout'
import SiteBtn from 'components/siteBtn'
import SiteGap from 'components/siteGap'
import { Title3 } from 'components/typography'
import { Grey } from 'components/typography'
import { Title0 } from 'components/typography'
import React from 'react'
import { TiArrowRightOutline } from 'react-icons/ti'

function Smeagolmap() {
    return (
        <AppLayout>
            <SiteGap>
                <Box sx={{ mt: "200px" }} />
                <div className='df ac'>
                    <Title0 style={{ color: 'white', marginRight: '20px' }}>Road Map</Title0><Dots />
                </div>
            </SiteGap>
            <SiteGap>
                <Grid container spacing={3}>
                    <GItem sizes={[12, 6, 4, 3]}>
                        <MapCard img={narrateImg}>
                            The Smeagol Cops are here to maintain peace in the Web3 space like a good cop.
                            Bringing in balance amongst the Web3 and NFT community.
                            This community is working on involving itself with IRL activities, which is apart from advertising campaign,
                            includes meet and greet, media outings, space holdings, media tours.
                        </MapCard>
                    </GItem>
                    <GItem sizes={[12, 6, 4, 3]}>
                        <MapCard title="Todo" num="02" img={todoImg}>
                            With ongoing meetings and pending collaboration with IRL brands and companies,
                            Smeagol Cops will be involved in making merches for our community.
                            Smeagol Cops will involve in a lot of IRL meetups for the web3 community at large.
                            Brands and design from our community will be made available to our holders to get at a 50% discount.
                        </MapCard>
                    </GItem>
                    <GItem sizes={[12, 6, 4, 3]}>
                        <MapCard title="Why HODL" num="03" img={hodlImg}>
                            Smeagol Cops holders will have access freely to any product related to Smeagol Cops and at a friendly discount.
                            On future trading, drivativies from Smeagol Cops will be allowed to our holders to mint
                            at least an art for free and they're to be whitelisted on any NFT project which are in
                            collaboration with Smeagol Cops.
                        </MapCard>
                    </GItem>
                    <GItem sizes={[12, 6, 6, 3]} />

                </Grid>
                <Grid container sx={{ mt: 10, color: 'white' }} className="df ac jsb">
                    <GItem sizes={[12, 6, 4, 4]}><div>Copyright ©{new Date().getFullYear()} Smeagols</div>
                        <div>All rights reserved</div></GItem>
                </Grid>
            </SiteGap>
        </AppLayout>
    )
}

export default Smeagolmap
import { Grid, Hidden, Paper, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { micheal } from 'appConstants'
import { redwalker } from 'appConstants'
import { appColor } from 'appConstants'
import { rafael } from 'appConstants'
import { oluxkwu } from 'appConstants'
import { chisom } from 'appConstants'
import { athanasius } from 'appConstants'
import LordCard from 'components/cards/lordCard'
import Dots from 'components/dots'
import GItem from 'components/grids'
import AppLayout from 'components/layout/appLayout'
import SiteGap from 'components/siteGap'
import { Grey } from 'components/typography'
import { Title3 } from 'components/typography'
import { Title0 } from 'components/typography'
import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { SiDiscord } from 'react-icons/si'

function Lords() {
    return (
        <AppLayout>
            <SiteGap>
                <Box sx={{ mt: "150px" }} />
                <div className='df ac'>
                    <Title0 style={{ color: 'white', marginRight: '20px' }}>Team members</Title0><Dots />
                </div>
                <br />
                <Grid container spacing={2}>
                    <GItem sizes={[12, 5, 4, 3]}>
                        <LordCard name="alracleDAO" role="founder" handle="alracleDAO" img={redwalker} />
                    </GItem>
                    <GItem sizes={[12, 5, 4, 3]}>
                        <LordCard name="Agu" role="Collab manager" img={athanasius} handle="DaddyAgu" />
                    </GItem>
                    {/* <GItem sizes={[12, 5, 4, 3]}><LordCard name="Oluxkwu" role="Management" handle="oluxkwu" img={oluxkwu} /></GItem> */}
                    <GItem sizes={[12, 5, 4, 3]}>
                        <LordCard name="Rafael" role="artist" handle="SnowwSno" img={rafael} />
                    </GItem>
                    <Hidden lgDown><GItem sizes={[12, 5, 4, 3]}></GItem></Hidden>
                    <GItem sizes={[12, 5, 4, 3]}>
                        <LordCard name="Maxwell" linkedin handle="https://www.linkedin.com/in/chisom-ozonwankwo-08872b107" role="Software engineer" img={chisom} />
                    </GItem>
                    <GItem sizes={[12, 5, 4, 3]}>
                        <LordCard name="Akazi" linkedin handle="https://www.linkedin.com/in/michael-akazi-336ba3144" role="Software engineer" img={micheal} />
                    </GItem>

                </Grid>
            </SiteGap>
            <SiteGap>
                <div className='df ac'>
                    <Title0 style={{ color: 'white', marginRight: '20px' }}>Connect with us</Title0><Dots />
                </div>
                <Grey>
                    Follow Us On Social Media, To Stay Up To Date!
                </Grey>
                <Stack direction="row" sx={{ mt: 5 }} flexWrap='wrap'>
                    <a href="http://www.twitter.com/SmeagolCop" target="_blank" rel="noreferrer">
                        <Paper elevation={0} className="df ac" sx={{ mb: 2, mr: "4vw", px: "3vw", pr: "4vw", py: 2 }}>
                            <BsTwitter color={appColor} size={25} />
                            <div style={{ marginLeft: '10px' }}>
                                <span style={{ color: appColor }}>Twitter</span>
                                <Grey style={{ textTransform: 'uppercase' }} sm>Follow us on twitter</Grey>
                            </div>
                        </Paper>
                    </a>
                    <a href="https://discord.gg/p3Mgyj5wFX" target="_blank" rel="noreferrer">
                        <Paper elevation={0} className="df ac" sx={{ mb: 2, px: "3vw", pr: "4vw", py: 2 }}>
                            <SiDiscord color={appColor} size={25} />
                            <div style={{ marginLeft: '10px' }}>
                                <span style={{ color: appColor }}>Discord</span>
                                <Grey style={{ textTransform: 'uppercase' }} sm>Join our discord</Grey>
                            </div>
                        </Paper>
                    </a>
                </Stack>
            </SiteGap>
            <SiteGap>
                <Grid container sx={{ mt: 2, color: 'white' }} className="df ac">
                    <GItem sizes={[12, 6, 4, 4]}><div>Copyright ©{new Date().getFullYear()} Smeagols</div>
                        <div>All rights reserved</div></GItem>

                </Grid>
            </SiteGap>
        </AppLayout>
    )
}

export default Lords
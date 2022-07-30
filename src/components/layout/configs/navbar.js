import { AppBar, Box, Container, Hidden, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "styles/layout.css"
import { appLogo } from "appConstants";
import SiteBtn from "components/siteBtn";
import { BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { appBg } from "appConstants";
import { Drawer } from 'antd';
import { HiOutlineMenu } from "react-icons/hi";
import { appColor } from "appConstants";



export default function Navbar() {

    return (
        <>
            <Box style={{ backgroundColor: "transparent" }} sx={{ flexGrow: 1 }}>
                <AppBar position='fixed' color="inherit" elevation={0}>
                    <Container disableGutters={true} maxWidth="xl">
                        <Toolbar style={{ background: appBg, padding: "15px 4vw 15px 4vw", minHeight: '80px' }}>

                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mt: 1, cursor: 'pointer' }}
                            >
                                <Link to='/'>
                                    <img src={appLogo} style={{ width: '60px', height: 'auto' }} />
                                </Link>
                            </Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ width: 'auto', mt: 1 }}>
                                <Hidden lgDown>

                                </Hidden>
                                <Hidden lgDown><Box sx={{ flexGrow: 1 }} /></Hidden>
                            </Box>


                            <Hidden lgUp><Box sx={{ flexGrow: 1 }} /></Hidden>
                            <Hidden smDown>
                                <Box className="df ac">
                                    <Link to="/"><SiteBtn p={6} font="18px">Home</SiteBtn></Link>
                                    <Link to="/map"><SiteBtn p={6} font="18px">Road map</SiteBtn></Link>
                                    <Link to="/lords"><SiteBtn p={6} font="18px">Lords</SiteBtn></Link>
                                    {/* <Hidden lgDown><SiteBtn p={6} disabled font="18px">Stake</SiteBtn>
                                        <SiteBtn p={6} disabled font="18px">Shop</SiteBtn>
                                        <SiteBtn p={6} disabled font="18px">Gallery</SiteBtn></Hidden> */}
                                    <Hidden mdDown><a href="http://www.twitter.com/SmeagolCop" target="_blank" rel="noreferrer"><SiteBtn p={4} font="25px"><Box sx={{ mb: '-5px', mr: '-5px' }}><BsTwitter /></Box></SiteBtn></a>
                                        <a href="https://discord.gg/p3Mgyj5wFX" target="_blank" rel="noreferrer"><SiteBtn p={4} font="25px"><Box sx={{ mb: '-5px', mr: '-5px' }}><SiDiscord /></Box></SiteBtn></a>
                                        {/* <SiteBtn p={6} font="18px"><span style={{ fontWeight: 900 }}>ME</span></SiteBtn> */}
                                    </Hidden>
                                </Box>
                            </Hidden>
                            <Hidden lgUp>
                                <MobileDrawer />
                            </Hidden>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </>
    );
}



const MobileDrawer = () => {
    const [visible, setVisible] = React.useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <div className='df ac' style={{ borderRadius: '10px', padding: '8px', marginLeft: '10px', background: 'transparent', cursor: 'pointer' }}>
                <HiOutlineMenu color={appColor} size={30} onClick={showDrawer} />
            </div>
            <Drawer placement="right" drawerStyle={{ background: appBg }}
                width={230} style={{ paddingTop: '70px' }} onClose={onClose} visible={visible}>

                <Link to="/"><SiteBtn bg="transparent" style={{ margin: '10px', textAlign: 'left !important' }} p={6} font="18px">Home</SiteBtn></Link>
                <Link to="/map"><SiteBtn bg="transparent" style={{ margin: '10px', textAlign: 'left !important' }} p={6} font="18px">Road map</SiteBtn></Link>
                <Link to="/lords"><SiteBtn bg="transparent" style={{ margin: '10px', textAlign: 'left !important' }} p={6} font="18px">Lords</SiteBtn></Link>
                {/* <Hidden lgDown><SiteBtn bg="transparent"  style={{textAlign:'left !important'}} p={6} disabled font="18px">Stake</SiteBtn>
                    <SiteBtn bg="transparent"  style={{textAlign:'left !important'}} p={6} disabled font="18px">Shop</SiteBtn>
                    <SiteBtn bg="transparent"  style={{textAlign:'left !important'}} p={6} disabled font="18px">Gallery</SiteBtn></Hidden> */}
                <a href="http://www.twitter.com/SmeagolCop" target="_blank" rel="noreferrer"><SiteBtn bg="transparent" style={{ margin: '10px', textAlign: 'left !important' }} p={6} font="18px" icon={<BsTwitter />}> Twitter</SiteBtn></a>
                <a href="https://discord.gg/p3Mgyj5wFX" target="_blank" rel="noreferrer"><SiteBtn bg="transparent" style={{ margin: '10px', textAlign: 'left !important' }} p={6} font="18px" icon={<SiDiscord />}> Discord</SiteBtn></a>
                {/* <SiteBtn bg="transparent"  style={{textAlign:'left !important'}} p={6} font="18px"><span style={{ fontWeight: 900 }}>ME</span></SiteBtn */}


            </Drawer>
        </>
    );
};


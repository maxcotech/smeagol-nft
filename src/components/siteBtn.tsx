import { CircularProgress } from '@mui/material';
import { appColor } from '../appConstants';
import React from 'react'
import  "../styles/siteBtn.css";

export interface SiteBtnProps {
    font : string,
    bg: string,
    onClick: (setLoader:(val: boolean) => void) => void,
    style: object,
    type: any,
    href: string,
    children:React.ReactNode,
    p: number,
    icon: React.ReactNode,
    bw: string,
    clr: string,
    height: string,
    disabled:boolean,
    rightIcon: React.ReactNode,
    width: string | number,
    borderRadius: string | number

}
function SiteBtn({ font, bg, onClick, style, type, href, children, p = 0, icon, bw, clr, height, disabled, rightIcon, width, borderRadius }: Partial<SiteBtnProps>) {
    const [loader, setLoader] = React.useState(false);
    const getDisabledState = () => {
        if (disabled !== null && typeof disabled !== "undefined") {
            console.log(disabled);
            return disabled;
        }
        return loader;
    }

    const clickHandler = () => {
        if (onClick) onClick(setLoader);
    }
    return (
        <button type={type} href={href} onClick={clickHandler} disabled={getDisabledState()} style={{
            borderRadius,
            width, height, color: clr ?? appColor, borderWidth: bw ?? "0px", fontSize: font, padding: `${p}px ${p * 2}px`, backgroundColor: bg ?? "white"
            //@ts-ignore
            , "&:hover": { color: 'white' }, marginLeft: '5px', marginRight: '5px', opacity: disabled ? "0.5" : '1', ...style
        }} className="siteBtn">
            {loader ? <> <CircularProgress size='15px' color='inherit' /><span style={{ paddingRight: '5px' }} /></> : <>{icon}<span style={{ paddingRight: '5px' }} /></>} <span style={{ paddingRight: '5px' }}>{children}</span>
            <span className="df ac" style={{ marginLeft: '10px' }}>{rightIcon}</span>
        </button>
    )
}

export default SiteBtn
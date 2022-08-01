import { Grey1 } from "../appConstants";
import "../styles/typography.css";

export interface TypoProps {
    children?: React.ReactNode,
    sm?: boolean,
    color?: string,
    style?: {},
    className?: string,
    onClick?: () => void 
}

export const P = ({ children, sm, color, style, className, onClick }: TypoProps) => <div onClick={onClick} className={`P ${className}`} style={{ color, fontSize: sm ? "11px" : "", ...style }}>{children}</div>

export const Red = ({ children, sm, style, className, onClick }: TypoProps) => <div onClick={onClick} className={`P ${className}`} style={{ fontWeight: '600', color: 'rgb(255,0,0)', fontSize: sm ? "11px" : "", ...style }}>{children}</div>

export const Title0 = ({ color, children, style, className, onClick }: TypoProps) => <div onClick={onClick} className={`Title0 ${className}`} style={{ color, fontWeight: '800', ...style }}>{children}</div>

export const Title1 = ({ color, children, style, className, onClick }: TypoProps) => <div onClick={onClick} className={`Title1 ${className}`} style={{ color, fontWeight: '700', ...style }}>{children}</div>

export const Grey = ({ children, sm, style, className, onClick }: TypoProps) => <div onClick={onClick} className={`P ${className}`} style={{ color: Grey1, ...style, fontSize: sm ? "11px" : "" }}>{children}</div>

export const Title2 = ({ color, children, style, className, onClick }: TypoProps) => <h4 onClick={onClick} className={`Title2 ${className}`} style={{ color, fontWeight: '700', ...style }}>{children}</h4>

export const Span = ({ children, sm, color, style, className, onClick }: TypoProps) => <span onClick={onClick} className={`P ${className}`} style={{ display: 'inline-block', marginRight: '5px', color, fontSize: sm ? "11px" : "", ...style }}>{children}</span>

export const Title3 = ({ color, children, style, className, onClick }: TypoProps) => <h4 onClick={onClick} className={`Title3 ${className}`} style={{ color, fontWeight: '500', ...style }}>{children}</h4>

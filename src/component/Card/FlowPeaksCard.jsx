import { useContext } from "react";
import { ThemeContext } from "../../themeContext";
import ClockIcon from '../../assets/clockicon.svg';

const FlowPeaksCard = (props) => {
    const theme = useContext(ThemeContext);
    return (
        <div className="card" style={{ background: theme.cardBackground, color: theme.text }}>
            <div className="card-body">
                <div className="pb-2"><b className="">My Flow Peaks</b></div>
                <div><span><img src={ClockIcon} alt='clock-icon' className="pb-1"/></span>&nbsp;&nbsp;{props.text}</div>
            </div>
        </div>
    )
}

export default FlowPeaksCard;
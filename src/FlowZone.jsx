import React, { useContext } from 'react';
import { ThemeContext } from "./themeContext";
import FlowPeaksCard from "./component/Card/FlowPeaksCard";
import ToolsIcon from './assets/tools-icon.svg'
import LessonsIcon from './assets/lessonsicon.svg';
import ClubIcon from './assets/clubicon.svg';
import Gamepad from './assets/game-pad.svg';
import Info from './assets/info.svg';
import ForyouIcon from './assets/foryouicon.svg';
import GloballyIcon from './assets/globallyicon.svg';

const FlowZone = ({ children }) => {
    const theme = useContext(ThemeContext);
    const tableData = [
        {
            icon: Gamepad,
            category: 'Games',
            foryou: <a href='#' style={{color: '#00B3CC'}}><b>Explore</b></a>,
            globally: 'Memory Game'
        },
        {
            icon: ToolsIcon,
            category: 'Tools',
            foryou: 'Affirmation',
            globally: 'Thought Guides'
        },
        {
            icon: LessonsIcon,
            category: 'Lessons',
            foryou: 'Lorem Ipsum',
            globally: 'Lorem Ipsum'
        },
        {
            icon: ClubIcon,
            category: 'Clubs',
            foryou: 'Lorem Ipsum',
            globally: 'Lorem Ipsum'
        },
    ]
    return (
        <div className="flow-zone" style={{ color: theme.text }}>
            <div className="row m-0 p-0">
                <div className="col-sm-12 col-md-6 mx-auto border border-4 border-secondary rounded-4">
                    <div className="h5 py-4 text-center">Flow Zone</div>
                    <div className="d-flex justify-content-between align-items-center px-4 py-2" style={{ borderRadius: '10px', background: theme.cardBackground }}>
                        <div className="h5 py-2 mb-0">About Flow Zone</div> <div><i className="fas fa-angle-down"></i></div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center my-3">
                        <div className="h5 mb-0">Flow Peaks <span><img src={Info} alt='info-icon' /></span></div>
                        <div className="px-3 py-2" style={{ borderRadius: '10px', background: theme.cardBackground }}>Weekly</div>
                    </div>
                    <div className="donut-chart py-3">
                        {children}
                    </div>
                    <div className="row py-2">
                        <div className="col-6">
                            <FlowPeaksCard text="02PM - 08PM" />
                        </div>
                        <div className="col-6">
                            <FlowPeaksCard text="04PM - 11PM" />
                        </div>
                    </div>
                    <div className="toolkit my-4">
                        <h4>My Thriving Toolkit</h4>
                        <div className="table-responsive">
                            <table className="table" style={{ "--bs-table-color": theme.text, "--bs-table-bg": "transparent", borderColor: theme.cardBackground }}>
                                <thead>
                                    <tr>
                                        <th> </th>
                                        <th className='text-center'><img src={ForyouIcon} className='pb-1' /> For you</th>
                                        <th className='text-center'><img src={GloballyIcon} className='pb-1' /> Globally</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        tableData.map(x => (
                                            <tr key={x.category}>
                                                <td className='text-left'><img src={x.icon} alt="" /> {x.category}</td>
                                                <td className='text-center'>{x.foryou}</td>
                                                <td className='text-center'>{x.globally}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowZone;

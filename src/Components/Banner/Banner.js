import './Banner.css'
import {NavLink} from 'react-router-dom';
import FadeInText from '../Animations/FadeInText.js';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BugReportIcon from '@mui/icons-material/BugReport';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';

function Banner() {
    return (
        <div className='main-banner'>
            <nav className='nav-links'>
                <NavLink className="home-link" end to="/">
                    <DashboardIcon style={{ fontSize: 40 }}></DashboardIcon>
                </NavLink>
                <NavLink className="test-link" end to="/projects">
                    <BugReportIcon style={{ fontSize: 40 }}></BugReportIcon>
                </NavLink>
                <NavLink className="analytics-link" end to="/about">
                    <DonutSmallIcon style={{ fontSize: 40 }}></DonutSmallIcon>
                </NavLink>
            </nav>
            <FadeInText 
                    text='PEN TESTING ENVIRONMENT'
                    el='h2'
                    className='main-header-text'/>
        </div>
    )
}

export default Banner;
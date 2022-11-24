import PollIcon from '@mui/icons-material/Poll';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MenuIcon from '@mui/icons-material/Menu';

import D1Contain from './d1Contain'

import { Link } from "react-router-dom";

import { useState } from 'react';

const Dashboard = () => {

    const [isActive1, setIsActive1] = useState(false);

    const HomeClick = () => {
        console.log('HomeClick')
    }

    const Dashboard1Click = () => {
        console.log('Dashboard1')
    }

    const Dashboard2Click = () => {
        console.log('Dashboard2')
    }

    const ContactClick = () => {
        console.log('Contact')
    }

    const MenuClick = () => {
        console.log('Menu')
        setIsActive1(current => !current);
    }

    return (
        <div className="page">

            <div className="NavBar" style={{ display: isActive1 ? 'none' : 'block' }}>
                <div className="nbLogo">
                    <Link to="/" className='nbLink-Logo' onClick={HomeClick}>
                        <PollIcon className="nbicon"></PollIcon>
                        <div className="nbtext" >電力交易輔助系統</div>
                    </Link>

                    <Link to="/" className='nbLink-Home' onClick={HomeClick}>
                        <HomeIcon className="nbicon" />
                        <div className="nbtext" >首頁</div>
                    </Link>

                    <Link to="/dashboard1" className='nbLink-Dashboard1' onClick={Dashboard1Click}>
                        <DashboardIcon className="nbicon" />
                        <div className="nbtext" >監測</div>
                    </Link>

                    <Link to="/dashboard2" className='nbLink-Dashboard2' onClick={Dashboard2Click}>
                        <DashboardIcon className="nbicon" />
                        <div className="nbtext" >試算</div>
                    </Link>

                    <Link to="/contact" className='nbLink-Contact' onClick={ContactClick}>
                        <PermContactCalendarIcon className="nbicon" />
                        <div className="nbtext" >聯絡我們</div>
                    </Link>

                    <Link className='nbLink-Menu' onClick={MenuClick}>
                        <MenuIcon className="nbicon" />
                    </Link>
                </div>
            </div>

            <div className="NavBarMobile" style={{ display: isActive1 ? 'flex' : 'none' }}>
                <div className="nbmLogo">
                    <Link to="/" className='nbmLink-Home' onClick={HomeClick}>
                        <HomeIcon className="nbmicon" />
                        <div className="nbmtext" >首頁</div>
                    </Link>

                    <Link to="/dashboard1" className='nbmLink-Dashboard1' onClick={Dashboard1Click}>
                        <DashboardIcon className="nbmicon" />
                        <div className="nbmtext" >監測</div>
                    </Link>

                    <Link to="/dashboard2" className='nbmLink-Dashboard2' onClick={Dashboard2Click}>
                        <DashboardIcon className="nbmicon" />
                        <div className="nbmtext" >試算</div>
                    </Link>

                    <Link to="/contact" className='nbmLink-Contact' onClick={ContactClick}>
                        <PermContactCalendarIcon className="nbmicon" />
                        <div className="nbmtext" >聯絡我們</div>
                    </Link>

                    <Link to="/dashboard1" className='nbmLink-Close' onClick={MenuClick}>
                        <div className="nbmtext" >X</div>
                    </Link>
                </div>
            </div>

            <div className="Page" style={{ display: isActive1 ? 'none' : 'block' }}>
                <D1Contain></D1Contain>
            </div>
        </div>
    )
}

export default Dashboard;
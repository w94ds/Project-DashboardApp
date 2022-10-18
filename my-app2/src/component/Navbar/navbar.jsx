import "./navbar.scss";

import PollIcon from '@mui/icons-material/Poll';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from "react-router-dom";

const Navbar = () => {

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
    }

    return (
        <div className="navbar">

            <div className="nbwrapper">

                <div className="nbLogo">
                    <Link to="/" className='nbLink-Logo' onClick={HomeClick}>
                        <PollIcon className="nbicon"></PollIcon>
                        <div className="nbtext" >Multi-Energy Analysis System </div>
                    </Link>

                    <Link to="/" className='nbLink-Home' onClick={HomeClick}>
                        <HomeIcon className="nbicon" />
                        <div className="nbtext" >Home Page</div>
                    </Link>

                    <Link to="/dashboard1" className='nbLink-Dashboard1' onClick={Dashboard1Click}>
                        <DashboardIcon className="nbicon" />
                        <div className="nbtext" >Dashboard1</div>
                    </Link>

                    <Link to="/dashboard2" className='nbLink-Dashboard2' onClick={Dashboard2Click}>
                        <DashboardIcon className="nbicon" />
                        <div className="nbtext" >Dashboard2</div>
                    </Link>

                    <Link to="/contact" className='nbLink-Contact' onClick={ContactClick}>
                        <PermContactCalendarIcon className="nbicon" />
                        <div className="nbtext" >Contact</div>
                    </Link>

                    <Link className='nbLink-Menu' onClick={MenuClick}>
                        <MenuIcon className="nbicon" />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
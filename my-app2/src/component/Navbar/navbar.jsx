import "./navbar.scss";

import PollIcon from '@mui/icons-material/Poll';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

import { Link } from "react-router-dom";

const Navbar = () => {

    const ContactClick = () => {
        console.log('Hi')
    }

    return (
        <div className="navbar">

            <div className="wrapper">
                <div className="Logo">
                    <Link to="/" className='Link'>
                        <PollIcon className="icon"></PollIcon>
                        <div className="text" >Multi-Energy Analysis System </div>
                    </Link>
                </div>

                <div className="items">
                    <div className="item">
                        <Link to="/" className='Link'>
                            <HomeIcon className="icon" />
                            <div className="text" >Home Page</div>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="/dashboard" className='Link'>
                            <DashboardIcon className="icon" />
                            <div className="text" >Dashboard</div>
                        </Link>
                    </div>
                    <div className="item" onClick={ContactClick}>
                        <Link to="/contact" className='Link'>
                            <PermContactCalendarIcon className="icon" />
                            <div className="text" >Contact Us</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
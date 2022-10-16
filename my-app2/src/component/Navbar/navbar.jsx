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

            <div className="wrapper">

                <div className="Logo">
                    <Link to="/" className='Link-Logo' onClick={HomeClick}>
                        <PollIcon className="icon"></PollIcon>
                        <div className="text" >Multi-Energy Analysis System </div>
                    </Link>

                    <Link to="/" className='Link-Home' onClick={HomeClick}>
                        <HomeIcon className="icon" />
                        <div className="text" >Home Page</div>
                    </Link>

                    <Link to="/dashboard1" className='Link-Dashboard1' onClick={Dashboard1Click}>
                        <DashboardIcon className="icon" />
                        <div className="text" >Dashboard1</div>
                    </Link>

                    <Link to="/dashboard2" className='Link-Dashboard2' onClick={Dashboard2Click}>
                        <DashboardIcon className="icon" />
                        <div className="text" >Dashboard2</div>
                    </Link>

                    <Link to="/contact" className='Link-Contact' onClick={ContactClick}>
                        <PermContactCalendarIcon className="icon" />
                        <div className="text" >Contact</div>
                    </Link>

                    <Link className='Link-Menu' onClick={MenuClick}>
                        <MenuIcon className="icon" />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
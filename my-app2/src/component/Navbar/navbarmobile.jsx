import "./navbarmobile.scss";

// import PollIcon from '@mui/icons-material/Poll';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
// import MenuIcon from '@mui/icons-material/Menu';

import { Link } from "react-router-dom";

const Navbar = () => { 
    const HomeClick = () => {
        console.log('Home')
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

    return (
        <div className="navbarmobile">

            <div className="nbmwrapper">

                <div className="nbmLogo">
                    <Link to="/" className='nbmLink-Home' onClick={HomeClick}>
                        <HomeIcon className="nbmicon" />
                        <div className="nbmtext" >Home Page</div>
                    </Link>

                    <Link to="/dashboard1" className='nbmLink-Dashboard1' onClick={Dashboard1Click}>
                        <DashboardIcon className="nbmicon" />
                        <div className="nbmtext" >Dashboard1</div>
                    </Link>

                    <Link to="/dashboard2" className='nbmLink-Dashboard2' onClick={Dashboard2Click}>
                        <DashboardIcon className="nbmicon" />
                        <div className="nbmtext" >Dashboard2</div>
                    </Link>

                    <Link to="/contact" className='nbmLink-Contact' onClick={ContactClick}>
                        <PermContactCalendarIcon className="nbmicon" />
                        <div className="nbmtext" >Contact</div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
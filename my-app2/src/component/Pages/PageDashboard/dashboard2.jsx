import './dashboard2.scss'
import Navbar from '../../Navbar/navbar'
import NavbarMobile from '../../Navbar/navbarmobile'

const Dashboard = () => {

    return (
        <div className="dashboard2">
            <div className="db2NavBar">
                <Navbar></Navbar>
            </div>

            <div className="db2NavBarMobile">
                <NavbarMobile></NavbarMobile>
            </div>

            <div className="db2Page" >
                Dashboard2
            </div>
        </div>
    );
};

export default Dashboard;
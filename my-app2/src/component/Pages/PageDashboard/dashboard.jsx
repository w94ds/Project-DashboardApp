import './dashboard.scss'
import Navbar from '../../../component/Navbar/navbar'

const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="NavBar">
                <Navbar></Navbar>
            </div>
            <div className="Page" >
                Dashboard
            </div>
        </div>
    );
};

export default Dashboard;
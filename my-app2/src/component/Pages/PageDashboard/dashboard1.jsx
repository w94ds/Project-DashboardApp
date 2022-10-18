import './dashboard1.scss'
import Navbar from '../../Navbar/navbar'
import NavbarMobile from '../../Navbar/navbarmobile'
import {useState} from 'react';

const Dashboard = () => {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(true);

    const clickhandler = () => {
        console.log('Click')
        setIsActive1(current => !current);
        setIsActive2(current => !current);
    }

    return (
        <div className="dashboard1">
            <div className="db1NavBar" style={{display: isActive1 ? 'none' : 'block'}}>
                <Navbar></Navbar>
            </div>

            <div className="db1NavBarMobile"  style={{display: isActive2 ? 'none' : 'flex'}}>
                <NavbarMobile></NavbarMobile>
            </div>

            <div className="db1Page" style={{display: isActive1 ? 'none' : 'block'}}>
                Dashboard1
                <button onClick={clickhandler}>Click</button>
                <div>test zone</div>
            </div>
        </div>
    )
}

export default Dashboard;
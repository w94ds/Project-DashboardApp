import './contact.scss'
import Navbar from '../../../component/Navbar/navbar'
import NavbarMobile from '../../Navbar/navbarmobile'

const Contact = () => {

    return (
        <div className="contact">
            <div className="cNavBar">
                <Navbar></Navbar>
            </div>
            
            <div className="cNavBarMobile">
                <NavbarMobile></NavbarMobile>
            </div>

            <div className="cPage">
                Contact
            </div>
        </div>
    )
}

export default Contact;
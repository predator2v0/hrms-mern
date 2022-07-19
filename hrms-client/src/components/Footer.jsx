import "../assets/css/footer.css";
import Contactform from "./subomponents/Contactform";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container container'>
                <div className='contact-info'>
                    <h5 className='footer-heading'>Contact Info</h5>
                    <div className='email-info'>
                        <i class='bi bi-envelope'></i>
                        <p>info.customcastle@gmail.com</p>
                    </div>
                    <div className='address-info'>
                        <i class='bi bi-geo-alt'></i>
                        <p>
                            13A, 13C, tech park (19th floor), <br /> Dhenkanal,
                            dhenkanal, Odisha, India <br /> PIN: 759014
                        </p>
                    </div>
                    <div className='phone-info'>
                        <i class='bi bi-telephone-inbound'></i>
                        <p>
                            +91 1234-567-890, <br /> +91 9876-543-210
                        </p>
                    </div>
                </div>
                <div className='quick-links'>
                    <h5 className='footer-heading'>Quick Links</h5>
                    <ul>
                        <li>About Us</li>
                        <li>FAQs</li>
                        <li>Site Map</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <Contactform />
            </div>
            <div className='container text-white'>
                <p className='m-0 p-0'>&copy;2022, all rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;

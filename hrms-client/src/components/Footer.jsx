import React from "react";
import "../assets/css/footer.css";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container container'>
                <div className='contact-info'>
                    <div className="email-info">
                        <i class='bi bi-envelope'></i>{" "}
                        <p>info.customcastle@gmail.com</p>
                    </div>
                    <div className="address-info">
                        <i class='bi bi-geo-alt'></i>
                        <p>13A, 13C, tech park (19th floor), <br/> Dhenkanal, dhenkanal, Odisha, India <br /> PIN: 759014</p>
                        
                    </div>
                    <div className="social-icons">
                        <i class='bi bi-twitter'></i>
                        <i class='bi bi-facebook'></i>
                        <i class='bi bi-instagram'></i>
                        <i class='bi bi-youtube'></i>
                        
                    </div>
                </div>
                <div className='quick-links'>
                    <ul>
                        <li>some data</li>
                        <li>some more data</li>
                        <li>even more data</li>
                        <li>more and more data</li>
                        <li>data</li>
                    </ul>
                </div>
                <div className='contact-form'>
                    <form action="/contactus">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" placeholder="name"/>
                            <input type="text" className="form-control" id="email" placeholder="email"/>
                            <textarea className="form-control" id="email" placeholder="message" ></textarea>
                            <input type="submit" className="btn submit-btn" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;

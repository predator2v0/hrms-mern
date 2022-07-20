import "../assets/css/about.css";
import aboutImage from "../assets/img/aboutus.svg";
import selectImage from '../assets/img/select_house.svg'
const About = () => {
    return (
        <div className='about component-shadow'>
            <div className='about-container'>
                <h3 className="about-heading">About Us</h3>
                <div className='easy-access'>
                    <p class='easy-access-text'>
                        CustomCastle offers you a query free platform to search
                        for a best home as well as someone who takes care of
                        your home like their own. In this era, where it's a
                        major challenge to find a better shelter, we offer you
                        the easiest solution that will make you find the best
                        one. Hope we will make you find your dream house with
                        affordable cost. Custom Castle gives you access to
                        hundreds of houses at almost every location across the
                        country, making it easy for you to relocate to your
                        destination without being physically present.
                    </p>
                    <img src={aboutImage} alt='' className='about-image' />
                </div>
                <div className="select-house">
                <img src={selectImage} alt='' className='select-image' />
                    <p class='select-house-text'>
                        A number of landlords and owners from countrywide
                        locations are taking part in publishing their property
                        online with us for rent, making the customer to compare
                        prices and choose the desired house of their choice,
                        making it really "affordable" for them. Custom Castle provides a platform for both owners as
                        well as tenants to fulfill their needs of property
                        rental service easily. it saves time and effort of both
                        owners and tenants for physically searching and
                        advertising for rental services.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
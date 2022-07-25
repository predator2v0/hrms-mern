const Propertytype = () => {
    return (
        <div className='property-type-component'>
            <div className='property-type apartment'>
                <img src='/res/img/apartment.jpg' alt='' />
                <h4 className='property-type-caption'>Apartment</h4>
            </div>
            <div className='property-type pg'>
                {" "}
                <img src='/res/img/pg.jpg' alt='' />
                <h4 className='property-type-caption'>PG</h4>
            </div>
            <div className='property-type hostel'>
                {" "}
                <img src='/res/img/hostel.jpg' alt='' />
                <h4 className='property-type-caption'>Hostel</h4>
            </div>
            <div className='property-type office'>
                {" "}
                <img src='/res/img/office.jpg' alt='' />
                <h4 className='property-type-caption'>Office</h4>
            </div>
            <div className='property-type shop'>
                <img src='/res/img/shop.jpg' alt='' />
                <h4 className='property-type-caption'>Shop</h4>
            </div>
        </div>
    );
};

export default Propertytype;

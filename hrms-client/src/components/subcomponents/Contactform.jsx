const Contactform = () => {
    return (
        <div className='contact-form'>
            <h5 className="footer-heading">Contact Us</h5>
            <form action='/contactus'>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control'
                        id='name'
                        placeholder='name'
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control'
                        id='email'
                        placeholder='email'
                    />
                </div>
                <div className='form-group'>
                    <textarea
                        className='form-control'
                        id='email'
                        placeholder='message'
                    ></textarea>
                </div>
                <div className='form-group'>
                    <input type='submit' className='btn submit-btn' />
                </div>
            </form>
        </div>
    );
};

export default Contactform;

import { useState } from "react";
import axios from "axios";

const Contactform = () => {
    const [feedback, setFeedback] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleFormChange = (e) => {
        let key = e.target.id;
        let value = e.target.value;

        setFeedback({ ...feedback, [key]: value });
    };
    const sendFeedback = async (e) => {
        e.preventDefault();
        try {
            const feedbackSent = await axios.post(
                "http://localhost:7777/contactus",
                feedback,
                {
                    "Content-type": "application/json",
                }
            );
            if (feedbackSent) {
                window.alert(feedbackSent.data.msg);
                setFeedback({ name: "", email: "", message: "" });
            }
        } catch (err) {
            window.alert(err.response.data.msg);
            console.log("error in storing response " + err);
        }
    };
    return (
        <div className='contact-form'>
            <h5 className='footer-heading'>Contact Us</h5>
            <form method='POST'>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control'
                        id='name'
                        value={feedback.name}
                        onChange={handleFormChange}
                        placeholder='name'
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control'
                        id='email'
                        value={feedback.email}
                        onChange={handleFormChange}
                        placeholder='email'
                    />
                </div>
                <div className='form-group'>
                    <textarea
                        className='form-control'
                        id='message'
                        value={feedback.message}
                        onChange={handleFormChange}
                        placeholder='message'
                    ></textarea>
                </div>
                <div className='form-group'>
                    <input
                        type='submit'
                        className='btn submit-btn'
                        onClick={sendFeedback}
                    />
                </div>
            </form>
        </div>
    );
};

export default Contactform;

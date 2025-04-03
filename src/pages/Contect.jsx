import React, { useState } from 'react'
import './Contect.css'
import { db } from '../../Firebase';
import { collection, addDoc } from 'firebase/firestore';


const Contect = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log('Form submitted:', formData);
    }
    return (
        <>
            <div className="container mt-5">
                <div className="contact-form">
                    <h3 className="text-center">Contact Us</h3>
                    <form onSubmit={handleSubmit}> 
                        <div className="row">
                            <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" required name='name' onChange={handleChange} />
                            </div>
                            <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" required name='email' onChange={handleChange} />
                            </div>
                            <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="phone" className="form-label">Mobile Number</label>
                                <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required name='phone' onChange={handleChange} />
                            </div>
                            <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Enter your address" name='address'  onChange={handleChange} />
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows={3} placeholder="Enter your message" required defaultValue={""} name='message'  onChange={handleChange}/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-submit fs-5">Submit</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Contect
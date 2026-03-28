import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GarageBilling({ closeForm }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Service Booked Successfully");
        closeForm();
    };
    return (
        <div className="modal">

            <div className="modal-content">

                <h2 className="text-center">Bike Service Booking</h2>

                <form onSubmit={handleSubmit}>

                    <input className="detail"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                    />


                    <input className="detail"
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number"
                        required
                    />

                    <input className="detail"
                        type="text"
                        name="bikeModel"
                        placeholder="Bike Model"
                        required
                    />

                    <input className="detail"
                        type="text"
                        name="bikeNumber"
                        placeholder="Bike Number"
                    />

                    {/* checkbox */}
                    <div className="service-type">
                        <h3>Select Service</h3>

                        <label className="service-option">
                            <input type="checkbox" name="serviceType" value="Oil Change" />
                            <span>Oil Change</span>
                        </label>

                        <label className="service-option">
                            <input type="checkbox" name="serviceType" value="Full Service" />
                            <span>Full Service</span>
                        </label>

                        <label className="service-option">
                            <input type="checkbox" name="serviceType" value="Engine Repair" />
                            <span>Engine Repair</span>
                        </label>

                        <label className="service-option">
                            <input type="checkbox" name="serviceType" value="Wheele Gresing" />
                            <span>Engine Repair</span>
                        </label>

                        <label className="service-option">
                            <input type="checkbox" name="serviceType" value="Brake Repair" />
                            <span>Brake Repair</span>
                        </label>

                    </div>




                    <input className="detail"
                        type="date"
                        name="date"
                        required
                    />

                    <textarea className="detail"
                        name="problem"
                        placeholder="Describe Bike Problem"
                    />

                    <div >

                        <button type="submit" className="submit-btn">
                            Submit
                        </button>

                        <button type="button" className="close-btn" onClick={closeForm}>
                            Close
                        </button>

                    </div>

                </form>

            </div >

        </div >
    )
}

export default GarageBilling

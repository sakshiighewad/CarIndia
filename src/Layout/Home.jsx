import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Home.css'
import img1 from '../assets/img1.png';
import BookServiceForm from '../Services/BookServiceForm';
import GarageBilling from '../Services/GarageBilling';
function Home() {


    const [showForm, setShowForm] = useState(false);

    const openForm = () => {
        setShowForm(true);
    };
    const closeForm = () => {
        setShowForm(false);
    };
    return (
        <div className="home">
            <div className="overlay"></div>
            <div className="content">
                <h1>Smart Garage Solutions</h1>
                <h2>Fast. Reliable. Affordable Bike Services</h2>
                <button className="btn-main" onClick={openForm}>
                    Book Service
                </button>

            </div>
            {showForm && <BookServiceForm closeForm={closeForm} />}
            {showForm && <GarageBilling closeForm={closeForm} />}
        </div >
    );
}

export default Home;

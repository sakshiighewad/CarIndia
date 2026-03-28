import React from 'react'
import './WheelG.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import wheel1 from "../assets/wheel1.png"
// import wheel2 from "../assets/Wheel2.png"
import wheel3 from "../assets/wheel3.png"
function WheelG() {
    return (
        <div className="wheel-container">

            <h1 className='header1'>Wheel Greasing Service</h1>
            <h2 className='text-center1'>What is Wheel Greasing?</h2>
            <p>
                Wheel greasing is the process of applying grease to the wheel bearings
                and hub of a bike or scooter. This helps the wheel rotate smoothly
                and reduces friction.
            </p>
            {/* Carousel */}
            <div id="wheelCarousel" className="d-block w-100" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={wheel1} alt="Wheel Greasing" width="500" />
                    </div>

                    {/* <div className="carousel-item">
                        <img src={wheel2} alt="Wheel Greasing" width="500" />
                    </div> */}

                    <div className="carousel-item">
                        <img src={wheel3} alt="Wheel Greasing" width="500" />
                    </div>

                </div>

                {/* Buttons */}
                <button className="carousel-control-prev" type="button" data-bs-target="#wheelCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#wheelCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div >



            <h2 >Why Wheel Greasing is Important</h2>
            <ul>
                <li>Reduces friction between wheel parts</li>
                <li>Prevents bearing damage</li>
                <li>Makes the wheel rotation smooth</li>
                <li>Reduces noise while riding</li>
                <li>Increases wheel life</li>
            </ul>

            <h2>Wheel Greasing Process in Garage</h2>
            <ol>
                <li>Remove the wheel from the bike or scooter.</li>
                <li>Open the wheel hub and bearings carefully.</li>
                <li>Clean old grease and dust using cleaner.</li>
                <li>Apply fresh high-quality grease to the bearings.</li>
                <li>Reassemble the wheel and tighten properly.</li>
                <li>Check wheel rotation and alignment.</li>
            </ol>

        </div >
    )
}

export default WheelG
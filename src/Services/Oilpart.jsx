import React from 'react'
import './Oilpart.css'
import motul from '../assets/motul.png'
import castrol1 from '../assets/castrol1.png'
import total from '../assets/total.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';

function Oilpart() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <div className="container mt-5">
            <Container>
                <h1 className='text-center'>Best Oils</h1>
                <Row className="g-4">

                    <Col md={4}>
                        <Card border="light" >
                            <Card.Img
                                src={motul}
                                className='card-img'
                            />

                            <Card.Body className='text-center'>
                                <Card.Title >motul Oil</Card.Title>
                                {/* <Card.Text>
                                    Some quick example text to build on the card title.
                                </Card.Text> */}
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card border="light" >
                            <Card.Img src={castrol1}
                                className='card-img'
                            />
                            <Card.Body className='text-center'>
                                <Card.Title>Castrol1 Oil</Card.Title>
                                {/* <Card.Text>
                                    Some quick example text to build on the card title.
                                </Card.Text> */}
                                <Button >Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card border="light" >
                            <Card.Img src={total}
                                className='card-img' // image class for styling in css
                            />
                            <Card.Body className='text-center'>
                                <Card.Title>total Oil </Card.Title>
                                {/* <Card.Text>
                                    Some quick example text to build on the card title.
                                    Price: ₹450
                                </Card.Text> */}
                                <Button >Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div >
    )
}

export default Oilpart

// import React from 'react'
// import './Oilpart.css'
// import homeoilimg from '../assets/homeoilimg.jpg'
// import veedoloil from '../assets/veedoloil.jpg'
// import oilcastrol from '../assets/oilcastrol.jpg'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


// function Oilpart() {
//     return (
//         <div className="container mt-5">

//             <Container>
//                 <h1>Best Oils </h1>
//                 <Row>
//                     <Col>

//                         <Card border="primary" style={{ width: '18rem' }}>
//                             <Card.Img variant="top" src={homeoilimg} />
//                             <Card.Body>
//                                 <Card.Title>Card Title</Card.Title>
//                                 <Card.Text>
//                                     Some quick example text to build on the card title and make up the
//                                     bulk of the card's content.
//                                 </Card.Text>
//                                 <Button variant="primary">Go somewhere</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col>
//                         <Card border="primary" style={{ width: '18rem' }}>
//                             <Card.Img variant="top" src={veedoloil} />
//                             <Card.Body>
//                                 <Card.Title>Card Title</Card.Title>
//                                 <Card.Text>
//                                     Some quick example text to build on the card title and make up the
//                                     bulk of the card's content.
//                                 </Card.Text>
//                                 <Button variant="primary">Go somewhere</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col>
//                         <Card border="primary" style={{ width: '18rem' }}>
//                             <Card.Img variant="top" src={oilcastrol} />
//                             <Card.Body>
//                                 <Card.Title>Card Title</Card.Title>
//                                 <Card.Text>
//                                     Some quick example text to build on the card title and make up the
//                                     bulk of the card's content.
//                                 </Card.Text>
//                                 <Button variant="primary">Go somewhere</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>

//                 </Row>
//             </Container >
//         </div>
//     )
// }

// export default Oilpart

import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Blog() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card className='mt-5'>
                        <Card.Header><h3>Welcome to the Backside</h3></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    This week we finally introduced the Backend of web development, and I am more than excited and considering placing the majority of my focus toward a backend job.
                                    The Backend is significantly more fun and seems to have a lot more capabilities than the Front.
                                    Design is friendly and fun, but I enjoy the Backend's power for programming.
                                    I'm not sure if I want to design only websites forever.
                                    After the Bootcamp, I would like to learn a Backend language like Go or Java.
                                    This week has gone smoother than any other week.
                                    I believe JavaScript gave me just enough base to understand PHP quickly.
                                    Also, I think PHP is similar enough to JavaScript, where PHP solidified the logic of my JavaScript.

                                    {' '}
                                </p>
                                <p>
                                    {' '}
                                    Next week we are going into Laravel, and I was told Laravel is like React for PHP.
                                    I am incredibly excited.
                                    Each week I enjoy programming at an exponential rate.
                                    However, it is challenging to decide on what language, frameworks, and packages to use.
                                    There are so many resources that it is hard to figure out what utilities are best for a new programmer.
                                    As of today, I have been exposed to HTML, CSS, Bootstrap, JavaScript, PHP, and now Laravel.
                                    I would love to take a year and solidify my knowledge in these languages while maybe tackling one more such as Go, Java, or Python.
                                    I don't want to just kind of know everything; I want to reach mastery, so when new programs come out, I have the background to understand why the revisions and new programs are so powerful.
                                    {' '}
                                </p>

                                <footer className="blockquote-footer mt-3">
                                    <cite title="Source Title">HTML CSS and JavaScript</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}


// {/* <p>{' '}{' '}</p> */ }
// {/* <Card className='mt-5'>
//                         <Card.Header><h3>HTML CSS and JavaScript <strong>!?</strong></h3></Card.Header>
//                         <Card.Body>
//                             <blockquote className="blockquote mb-0">
//                                 <p>
//                                     {' '}

//                                     {' '}
//                                 </p>
//                                 <p>
//                                     {' '}

//                                     {' '}
//                                 </p>
//                                 <p>
//                                     {' '}

//                                     {' '}
//                                 </p>
//                                 <footer className="blockquote-footer mt-3">
//                                     <cite title="Source Title">HTML CSS and JavaScript</cite>
//                                 </footer>
//                             </blockquote>
//                         </Card.Body>
//                     </Card> */}
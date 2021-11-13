import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'
function Portfolio() {
    return (
        <Container>
            <Row style={{display: 'flex', justifyContent: 'center'}} className='mt-5'>
                
                    <Card style={{ width: '18rem', height: '18rem' }} className=' m-5 text-center'>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Fishing Hooks</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">React JS</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/Troyallen98/Fishing-Hooks">Github</Card.Link>
                            <Card.Link href="https://gng-bait-tackle.web.app/">Live URL</Card.Link>
                        </Card.Body>
                    </Card>


                     <Card style={{ width: '18rem', height: '18rem' }} className=' m-5 text-center'>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>ToDo List</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">React JS</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/Troyallen98/TodoList">Github</Card.Link>
                            <Card.Link href="https://todo-list-122.web.app">Live URL</Card.Link>
                        </Card.Body>
                    </Card>




                    <Card style={{ width: '18rem', height: '18rem' }} className=' m-5 text-center'>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Weather App</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">JavaScript, CSS, Bootstrap, HTML</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/Troyallen98/weatherApp">Github</Card.Link>
                            <Card.Link href="https://troyallen98.github.io/weatherApp/">Live URL</Card.Link>
                        </Card.Body>
                    </Card>



                    <Card style={{ width: '18rem', height: '18rem' }} className=' m-5 text-center'>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Bouncing Balls</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">State managment</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/Troyallen98/Bouncing-balls">Github</Card.Link>
                            <Card.Link href="https://troyallen98.github.io/Bouncing-balls/">Live URL</Card.Link>
                        </Card.Body>
                    </Card>



                    <Card style={{ width: '18rem', height: '18rem' }} className=' m-5 text-center'>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Campaign</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Bootstrap, HTML</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://github.com/Troyallen98/Campaign">Github</Card.Link>
                            <Card.Link href="https://troyallen98.github.io/Campaign/">Live URL</Card.Link>
                        </Card.Body>
                    </Card>



            </Row>
        </Container>
    )
}

export default Portfolio

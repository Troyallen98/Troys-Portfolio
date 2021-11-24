import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import balls from '../styles/images/balls.png'
import mindReader from '../styles/images/mindReader.png'
import resturant from '../styles/images/resturant.png'
import weatherApp from '../styles/images/weatherApp.png'
import fishinghooks from '../styles/images/fishinghooks.png'
import todo from '../styles/images/todo.png'
import sillystory from '../styles/images/sillystory.png'
import alarm from '../styles/images/alarm.png'

function Portfolio() {
    return (
        <Container>
            <Row style={{ display: 'flex', justifyContent: 'center' }} className='mt-5 mx-1'>

                <Card className='col-3 m-5 text-center'>
                    <Card.Img className='mt-2 img-fluid' variant="top" src={fishinghooks} />
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

                <Card className=' col-3 m-5 text-center'>
                    <Card.Img className='mt-2 img-fluid' variant="top" src={todo} />
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

                <Card className='col-3 m-5 text-center'>
                    <Card.Img className='mt-2 img-fluid' variant="top" src={weatherApp} />
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


                <Card className='col-3 m-5 text-center'>
                    <Card.Img className='mt-2 img-fluid'variant="top" src={balls}/>
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



                <Card className='col-3 m-5 text-center'>
                    <Card.Img className='mt-2 img-fluid' variant="top" src={mindReader} />
                    <Card.Body>
                        <Card.Title>Mind Reader</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://github.com/Troyallen98/MindReaderReact">Github</Card.Link>
                        <Card.Link href="https://mind-readerreact.web.app/">Live URL</Card.Link>
                    </Card.Body>
                </Card>

                <Card className='col-3 m-5 text-center'>
                    <Card.Img className='mt-2 img-fluid' variant="top" src={resturant} />
                    <Card.Body>
                        <Card.Title>React Resturant</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">React JS</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://github.com/Troyallen98/Resturant">Github</Card.Link>
                        <Card.Link href="https://react-resturant-page.web.app/">Live URL</Card.Link>
                    </Card.Body>
                </Card>

                <Card className='col-3 m-5 text-center'>
                    <Card.Img className='mt-2 img-fluid' variant="top" src={sillystory} />
                    <Card.Body>
                        <Card.Title>Silly Stories</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">HTML, JS</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://github.com/Troyallen98/SillyStoriesGen">Github</Card.Link>
                        <Card.Link href="https://troyallen98.github.io/SillyStoriesGen/">Live URL</Card.Link>
                    </Card.Body>
                </Card>
                <Card className='col-3 m-5 text-center'>
                    <Card.Img className='mt-2 img-fluid' variant="top" src={alarm} />
                    <Card.Body>
                        <Card.Title>Alarm Clock</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">HTML,CSS, JS</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://github.com/Troyallen98/alarmClock">Github</Card.Link>
                        <Card.Link href="https://troyallen98.github.io/alarmClock/">Live URL</Card.Link>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Portfolio

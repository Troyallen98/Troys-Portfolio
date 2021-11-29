import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Blog() {
    return (
        <Container>
            <Row>
                <Col>
                <Card className='mt-5'>
                        <Card.Header><h3>Opinions on React?</h3></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    This week we were introduced to React, a Javascript Framework.
                                    React is like a library of different tools you can plug into your code.
                                    React Bootstrap has to be one of my favorite frameworks that our instructors, Ian and Justin, have introduced to our cohort.
                                    React Bootstrap is extremely simple and an excellent tool for the base structure and design of a webpage, and all of the documentation is easy to read.
                                    From what I understand, the React library's extent is insane, and I am eager to design my final portfolio project with React.
                                    Next week our instructors are introducing hooks and expressed that everything becomes significantly more manageable using Hooks instead of class components.

                                    {' '}
                                </p>
                                <p>
                                    {' '}
                                    I would love to learn more about hooks and hopefully find ways to refactor some of my current projects with React going forward.
                                    With React and React Bootstrap, I can finally make my websites look more presentable without having an extensive CSS background and focus more on the logic and communication between components rather than getting lost and hyper-focusing on the design of my portfolio.
                                    React seems to be here to stay for a long while.
                                    With the new release of the React beta, I would love to dive deep and look into the latest version and see what all its documentation has to offer because React provided an easy way to manage state compared to vanilla JavaScript and was a project that made more sense to me than others in the past.
                                    {' '}
                                </p>
                                <footer className="blockquote-footer mt-3">
                                    <cite title="Source Title">HTML CSS and JavaScript</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    <Card className='mt-5'>
                        <Card.Header><h3>CLIs? Do I think they are scary?</h3></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Going from not having a computer three years ago to pursuing a job in web development has been an experience.
                                    But CLIs have become a source of amazement for me.
                                    CLIs are beautiful, and I would love to create a mind-activated terminal.
                                    The amount of data that would be required to have this technology would be crazy.
                                    But imagine having something similar to Jarvis or Edith from IronMan.
                                    This technology would take forever to code.
                                    But imagine having technology that had almost unimaginable power at the fingertips of our minds.
                                    Most work nowadays is done online, making office jobs capable without ever being at the office.
                                    Office jobs could be done entirely by the brain, and the only work required of an office job would be thought of action.

                                    {' '}
                                </p>
                                <p>
                                    {' '}
                                    A CLI with the power of Edith would have to have some form of component.
                                    I would argue it would be nearly impossible with pure javascript.
                                    I would have to find a way to use components with a potent API that has spent countless hours learning security, defense, and tactical intelligence.
                                    But we could use it with something along the lines of Neuralink.
                                    It could provide solutions for people who have trouble remembering basic tasks or even sorting through massive amounts of data and solving convoluted tasks such as calculating really large prime numbers that could be used for testing computers.

                                    {' '}
                                </p>
                                <p>
                                    {' '}
                                    I believe with a good solid team that has pure intentions, anything is possible.
                                    That is why pseudocoding is so essential not only for an individual but also on a holistic approach.
                                    A great team can change the world by collaborating and emphasizing their experiences and diverse background.
                                    It is hard to change the world.
                                    However, with a willing team that is open to suggestions that may seem otherworldly, I believe that computers could save the world and document culture to an unimaginable degree.

                                    {' '}
                                </p>
                                <footer className="blockquote-footer mt-3">
                                    <cite title="Source Title">HTML CSS and JavaScript</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    <Card className='mt-5'>
                        <Card.Header><h3>React..2?</h3></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    React caused me to rethink websites and apps.
                                    React makes development and design significantly easier in ways that are hard to describe.
                                    While I have only practiced with react for three weeks, react made designing more complex websites easier and significantly faster.
                                    It allows communication by layers of abstraction with other components exceptionally easily.
                                    React Router Dom has to be one of my favorite frameworks because it takes away the complexity of OnClick functions for every element on the page.
                                    The React Router allows you to connect and add links throughout your page by adding extensions onto the end of your URL, enabling the website not to be reloaded and stored in state.
                                    After this week, I will say I am more optimistic for my future in web software development than ever before.
                                    However, I do realize I still face many challenges ahead.
                                    {' '}
                                </p>
                                <p>
                                    {' '}
                                    The most challenging hurdle to overcome in the Bootcamp is being comfortable with the unknown and knowing that you can understand anything, although it may take some time, so you have to be patient.
                                    Patience has proven very difficult for me.
                                    I want to understand something the second I am exposed to anything new, and coding is not something that anyone can instantly understand.
                                    From syntax to logic problems, web development takes patience and tranquility with the chaotic unknown.
                                    Moving forward, I am excited to plan more of my final project and pull all the things I have learned together.
                                    {' '}
                                </p>
                                <p>
                                    {' '}
                                    I would say ideas for my final project have changed some but not significantly.
                                    I believe I am about on track to completing what I originally intended during the first three weeks of Bootcamp, minus some bells and whistles that I assumed were easy, and have now come to a conclusion that will take a lot longer than I anticipated.
                                    I want a simple splash page with an image of me and a nice navbar that links with my portfolio and blog.
                                    I can't wait to graduate from the Bootcamp and begin the next phase of my programming career.
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
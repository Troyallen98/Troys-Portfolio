import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function Blog() {
    return (
        <Container>
            <Row>
                <Col>
                <Card className='mt-5'>
                        <Card.Header><h3>First Week Of In-Person</h3></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    This week was tough.
                                    This week was the first time we had multiple projects, and honestly, time management is problematic when dealing with new material and the added stress of an environment switch.
                                    Remote learn has its pros and cons, but after being in person at Awesome inc., I feel that I have taken the first step in becoming "awesome" myself.
                                    Being in an environment where everyone wants to code, and companies in the tech industry are swarming around provides a unique, supportive, and overwhelmingly optimistic air.
                                    This week, we primarily focused on Bootstrap 5 and Javascript.
                                    With each passing day, javascript seems less intimidating and more of a comforting friend.
                                    {' '}
                                </p>
                                <p>
                                    {' '}
                                    I went from hardly understanding what a function does to writing complete functions readable by human comprehension.
                                    My favorite part of this week is "Atomic Design," being able to break down websites and see how they are structured made recreating things I see less overwhelming and manageable.
                                    {' '}
                                </p>
                                <p>
                                    {' '}
                                    One thing I could better this week is writing out my pseudocode.
                                    I got flustered by the number of projects, and instead of sitting down and writing out a game plan, I dropped my hand.
                                    I plan to take more time in the coming weeks to write out my ideas and goals as I advance.
                                    Toward the middle of the week, they asked the platoon to reflect on our "why?".
                                    At first, I thought i could boldly state why I decided to take Awesome Inc's camp.
                                    However, after reflecting hard and going over the central responses such as I like to learn, I want a stable career, I want to think, I want to build something that changes the world.
                                    I have concluded, much like the story of how I stumbled through Awesome Inc's doors, the choice feels right.
                                    {' '}
                                </p>
                                <footer className="blockquote-footer mt-3">
                                    <cite title="Source Title">HTML CSS and JavaScript</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    <Card className='mt-5'>
                        <Card.Header><h3>Essentials for a Good Project!</h3></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    This week we learned a lot about the development process, and it demonstrated the power of pseudocode.
                                    The development process consists of planning out what needs to be done.
                                    This process could also be considered an idea.
                                    Then you ask what is required and check for the materials and resources necessary to expand the idea.
                                    Once you have everything planned out, you can think about what the design of a product should look like and eventually lead to implementing the project.

                                    {' '}
                                </p>
                                <p>
                                    {' '}
                                    To develop good code, a developer needs to collaborate with their team to create clean and dry code.
                                    The developer must also account for potential errors by users.
                                    So with their team, the developer should run a series of tests on the code and try every way possible to break the code and then add error handling to help ensure that the user experience is excellent.
                                    Together these steps in the development process lead to the deployment of a project, where a developer and their team hands off the finished project to the buyer.
                                    A good programmer will make sure there are comments, and the code is easy to read.
                                    A good developer does not want to pass along messy wet code that makes the inherited coder's job a nightmare.
                                    {' '}
                                </p>
                                <p>
                                    {' '}
                                    However, a great developer must also meet deadlines and know how to deliver.
                                    Code is never 100% complete and will always require maintenance as well as updates.
                                    Here the code enters its final stage in the development process and is used by users, acquire reviews and feedback, prompting the cycle to start over and continue throughout the circle of development.
                                    {' '}
                                </p>
                                <footer className="blockquote-footer mt-3">
                                    <cite title="Source Title">HTML CSS and JavaScript</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    <Card className='mt-5'>
                        <Card.Header><h3>MVC? OOP?</h3></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    This week we learned about the design pattern, MVC (Model, View, and Controler), and more than ever, pseudocode seems to be the answer for object-oriented programming.
                                    According to Alexander S.
                                    Gillis, a technical writer from TechTarget, "Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic."
                                    This layer of abstraction makes it possible for code to be compartmentalized and easier to read and function.
                                    Code that is object-orientally programmed can be much more extensive and is more efficient.
                                    However, projects that use object-oriented programming must be extensively planned and organized before code ever hits the page.
                                    Initially, I thought of pseudocode as a means to prewriting.
                                    Still, as I have mentioned before, pseudocode seems to be a methodology for coding rather than coding in a specific language.

                                    {' '}
                                </p>
                                <p>
                                    {' '}
                                    MVC is a great example of a design pattern that should be object-oriented programmed.
                                    A team may use the MVC model on a large project, where they discuss the project extensively and then divide tasks between individuals or smaller groups.
                                    One team could take the Model while another takes View, and then another team takes the final Controller methods for the project.
                                    Predicting future problems and collaborating on what needs to be done by an individual unit is done during the pseudocode session.
                                    Everyone gives their opinions on what needs to be done to prevent problems further down the road in the development process lifecycle.
                                    {' '}
                                </p>
                                <p>
                                    {' '}
                                    By assigning classes, objects, methods, and attributes, developers can carefully dictate what part of a program knows about each other so communication is easier and faster.
                                    I honestly don't believe coding is not possible without some form of pseudocode.
                                    Pseudocode is essential for any large project that deals with multiple components and needs classes to keep everything organized and easily accessible to fix bugs throughout the project after the project's deployment.
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
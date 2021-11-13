import React from 'react'
import {Card} from 'react-bootstrap'
function Portfolio() {
    return (
        <Card style={{ width: '18rem', height: '18rem'}} className='text-center'>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>Project Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Project Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="#">Github</Card.Link>
                <Card.Link href="#">Live URL</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Portfolio

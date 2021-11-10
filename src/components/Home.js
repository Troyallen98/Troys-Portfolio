import React from 'react'
import {Card } from 'react-bootstrap'

export default function Home() {
    return (
      
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="display-4">Hello, I'm Troy.</Card.Title>
                    <Card.Text className="display-5">
                        Welcome to my portfolio.
                    </Card.Text>
                    <Card.Link href="#">Github</Card.Link>
                    <Card.Link href="#">Linkedin</Card.Link>
                </Card.Body>
            </Card>
    
    )
}

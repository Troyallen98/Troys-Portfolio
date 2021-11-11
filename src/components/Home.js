import React from 'react'
import {Card } from 'react-bootstrap'

export default function Home() {
    return (
      
            <Card className='foobar' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="display-4">Hello, I'm Troy.</Card.Title>
                    <Card.Text className="display-5">
                        Welcome to my portfolio.
                    </Card.Text>
            
                </Card.Body>
            </Card>
    
    )
}

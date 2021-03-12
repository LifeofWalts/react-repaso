import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

export const Cards = ({ task }) => {
    return (
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Text>
                        {task}
                    </Card.Text>
                    <Link to ="/edit"className="btn btn-primary">Editar</Link>
                    <Button variant="danger">Borrar</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

import React from 'react'
import Form from 'react-bootstrap/Form'


export const Add = () => {
    return (
        <div>
            <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Escribe una tarea aquí" />
            </Form.Group>
        </div>
    )
}

import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export const Edit = () => {
    return (
        <div>
            <>
                <Form.Group>
                    <Form.Control size="lg" type="text" placeholder="Edita tu tarea aquí" />
                </Form.Group>
                <Button variant="primary">Confirmar</Button>
                <Button variant="danger">Cancelar</Button>
            </>
        </div>
    )
}

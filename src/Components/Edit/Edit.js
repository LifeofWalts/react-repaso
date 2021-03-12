import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom' 

export const Edit = () => {
    return (
        <div>
            <>
                <Form.Group>
                    <Form.Control size="lg" type="text" placeholder="Edita tu tarea aquí" />
                </Form.Group>
                <Button variant="primary">Confirmar</Button>
                <Link to="/" className="btn btn-danger">Cancelar</Link>
            </>
        </div>
    )
}

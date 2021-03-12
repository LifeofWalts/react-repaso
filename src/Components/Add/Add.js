import React, {useState, useContext} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { TaskContext } from '../../Context/TaskContext'

export const Add = () => {
    
    const {tasks, setTasks} = useContext(TaskContext)
    const [input, setInput] = useState("")

    const handleOnclick = (e)=>{
        e.preventDefault()
        setTasks([...tasks, {task:input}])
        console.log(tasks)
    }
    const handleOnChange = (e)=>{
        const { value } = e.target
        setInput(value)
    }
    return (
        <div>
            <Form.Group>
                <Form.Control size="lg" type="text" placeholder="Escribe una tarea aquí" onChange={handleOnChange}/>
            </Form.Group>
            <Button variant="primary" onClick={handleOnclick}>Confirmar</Button>
            <Link to="/" className="btn btn-danger">Cancelar</Link>
        </div>
    )
}

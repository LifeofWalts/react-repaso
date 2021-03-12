import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { Cards } from '../Cards/Cards';
import { TaskContext } from '../../Context/TaskContext'

export const Home = () => {
    const {tasks} = useContext(TaskContext)
    return (
            <div>
                <Link to="/add" className="btn btn-success">Add New Task</Link>
                {tasks.map((task)=>{
                    return <Cards task={task.task}/>
                })}
            </div>
    )
}
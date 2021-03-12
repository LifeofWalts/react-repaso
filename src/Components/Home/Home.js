import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { Cards } from '../Cards/Cards';
import { Task } from '../../Utils/PacticeDb'

export const Home = () => {
    return (
            <div>
                <Link to="/add" className="btn btn-success">Add New Task</Link>
                {Task.map((task)=>{
                    return <Cards task={task.task}/>
                })}
                <Cards />
            </div>
    )
}
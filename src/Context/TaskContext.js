import React, { createContext, useState } from 'react'


export const TaskContext = createContext()

const initialState = [{
    task: "tarea número 1"
},{
    task: "tarea número 2"
}, {
    task: "tarea número 3"
}, 
{
    task: "tarea número 4"
}]

export const TaskContextProvider = ( { children } ) => {

    const [tasks, setTasks] = useState(initialState)
    const contextValue ={
        tasks, setTasks
    }

    return (
        <TaskContext.Provider value={contextValue}>
            {children}
        </TaskContext.Provider>
    )
}
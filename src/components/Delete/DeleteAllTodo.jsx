import React from 'react'
import Button from '@mui/material/Button';
import "./DeleteAllTodo.css"

const DeleteAllTodo = ({allItems,deleteAllTodos}) => {
  return (
    <>
        {(!allItems.length==0)?
        <Button
        className='deleteBtn'
         color="error" 
         onClick={deleteAllTodos}>
            Delete all todo
        </Button>:
        ""
        }  

    </>

        
    
   
  )
}

export default DeleteAllTodo

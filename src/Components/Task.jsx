import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

function Task(props) {

    const [isChecked, setisChecked] = useState(false)
    // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    function handleChange() {
        setisChecked(!isChecked)
        if (isChecked) {
            props.setcompletedTasks(props.completedTasks - 1)
        }
        else {
            props.setcompletedTasks(props.completedTasks + 1)
        }
    }


    return (
        <>
            <div 
             style={{
                height: "60px", width: "267px", backgroundColor: "rgb(35, 32, 32)", margin: "10px", paddingLeft: "10px", borderRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center", overflow:"hidden"
            }}>


                {/* <input type='checkbox' onChange={handleChange} checked={isChecked} style={{ marginRight: "10px" }} /><span style={{ textDecoration: isChecked ? 'line-through' : 'none', fontSize: "20px" }}>{props.item}</span> */}
                <Checkbox size="small" onChange={handleChange} checked={isChecked} style={{ marginRight: "10px", color:"white" }} /><span style={{ textDecoration: isChecked ? 'line-through' : 'none', fontSize: "20px" }}>{props.item}</span> 
                <div style={{ flexGrow: "1" }}></div>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="grey" aria-label="edit" size="small">
                    <EditIcon/>
                </Fab>
                </Box>
                {/* <button style={{ marginRight: "10px", width: "60px", marginBottom: "5px" }}>Edit</button> */}
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="grey" aria-label="delete" size="small">
                    <DeleteIcon/>
                </Fab>
                </Box>
                {/* <button style={{ marginRight: "10px", width: "60px", marginBottom: "5px" }}>Delete</button> */}
            </div>
        </>
    )
}

export default Task
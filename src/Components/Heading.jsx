import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box';
import "./ComponentStyles/Heading.css"
import Button from '@mui/material/Button';
import Task from './Task';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function Heading() {

    const [list, setlist] = useState([])
    const [listItem, setlistItem] = useState("");
    const [totalTasks, settotalTasks] = useState(0);
    const [completedTasks, setcompletedTasks] = useState(0);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);


    useEffect(() => {
        settotalTasks(list.length);
    }, [list])


    function handleChange(e) {
        let val = e.target.value;
        setlistItem(val);
    }

    function handleAdd() {
        setlist([...list, listItem])
        setlistItem("")
    }
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center", color: "white", gap: "12px", width: "40%", marginTop: "10px", margin: "auto" }}>
                <h1 style={{marginTop:"40px"}}>Plan your day!</h1>
                <Box
                    height={100}
                    margin="auto"
                    borderRadius="40px"
                    width={250}
                    my={4}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid white' }}><div style={{ display: 'flex', flexDirection: 'column' }}><div><strong>To Do Done</strong></div>
                        <div>Keep it UP!</div></div><Box
                            height={55}
                            margin="auto"
                            borderRadius="50px"
                            width={60}
                            position="relative"
                            gap={4}
                            p={2}
                            my={4}
                            display="flex"
                            alignItems="center"
                            left={17}
                            backgroundColor="red"
                            sx={{ border: '2px solid red' }}
                        ><span style={{ fontSize: "35px", color: "black" }}><strong>{completedTasks + "/" + totalTasks}</strong></span></Box></Box>

                <div id='add' style={{ display: 'flex', width: "250px", alignItems: "center", justifyContent: "center", margin: "auto", gap: "30px" }}>
                    <input ref={inputRef} value={listItem} style={{ width: "250px", height: "30px", margin: "auto", borderRadius: "10px", backgroundColor: "#232020", paddingLeft: "10px", color: "white" }} onChange={handleChange} placeholder='Write your next task!' type='text' />
                    <Fab color="error" aria-label="add">
                        <AddIcon onClick={handleAdd} />
                    </Fab>
                </div>
                {list.length > 0 ?
                    list?.map((item) => {
                        return (
                            <Task list={list} inputRef={inputRef} setlist = {setlist} key={item} item={item} completedTasks={completedTasks} setcompletedTasks={setcompletedTasks} totalTasks={totalTasks} settotalTasks={settotalTasks} />
                        )
                    }) : <h3 style={{ marginTop: "20px" }}>No Tasks to Display!!</h3>}
            </div>
        </>
    )
}

export default Heading
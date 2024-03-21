import React from 'react'
import Box from '@mui/material/Box';
import "./ComponentStyles/Heading.css"
import Button from '@mui/material/Button';

function Heading() {


    return (
        <>
        <div style={{display:'flex', flexDirection:'column'}}>
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
                sx={{ border: '2px solid white' }}><div style={{display:'flex', flexDirection: 'column'}}><div><strong>To Do Done</strong></div>
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
                >Progress to be displayed</Box></Box>

                <div id='add' style={{display:'flex', width:"250px", alignItems:"center", justifyContent:"center", margin:"auto", gap:"30px"} }>
                <input style={{width: "250px",height:"30px", margin: "auto", borderRadius:"10px", backgroundColor:"#232020", paddingLeft:"10px"}} placeholder='Write your next task!' type='text'/> <Button variant="contained" size="small">Add</Button>
                </div>
                </div>
        </>
    )
}

export default Heading
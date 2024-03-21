import React ,{useState} from 'react'

function Task(props) {

    const [isChecked,setisChecked] = useState(false)


    function handleChange(){
        setisChecked(!isChecked)
    }


    return (
        <>
            <div style={{
                height: "28px", width: "267px", backgroundColor: "rgb(35, 32, 32)", margin: "10px", paddingLeft: "10px", borderRadius: "4px", paddingTop: "10px", display: "flex", justifyContent: "space-between", alignContent: "center"
            }}>


                <input type='checkbox' onChange={handleChange} checked={isChecked} style={{ marginRight: "10px" }} />{props.item}
                <div style={{ flexGrow: "1" }}></div>
                <button style={{ marginRight: "10px", width: "60px", marginBottom: "5px" }}>Edit</button><button style={{ marginRight: "10px", width: "60px", marginBottom: "5px" }}>Delete</button>
            </div>
        </>
    )
}

export default Task
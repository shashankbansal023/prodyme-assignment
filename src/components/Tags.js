import React from 'react'
import {Button} from '@mui/material'

function Tags({tags}){
    return (
        <div className="tags" style={{display:'flex' , width:'20vw' , flexWrap:'wrap', gap:'20px'}}>
            {
                tags.map(tag=>{
                    return <Button variant="contained"
                    sx={{
                        borderRadius:'15px',
                        backgroundColor:'white',
                        color:'black',
                        fontSize:'15px'
                    }}>{tag}</Button>
                })
            }
        </div>
    )
}

export default Tags;
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Navigation=({navItems})=>{

    const [item , setItem] = useState('');

    function handleChange(e){
        setItem(e.target.value)
    }
    return(
       <div style={{display:'flex', justifyContent:'start',alignItems:'center'}}>
           <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
           <InputLabel id="demo-simple-select-standard-label">Navigation  A</InputLabel>
                <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={item}
                onChange={handleChange}
                label="Navigation Category"
                >
                    {
                        navItems.map(navItem=>{
                            return <MenuItem value={navItem}>{navItem}</MenuItem>
                        })
                    }
                </Select>
      </FormControl>
      <MenuItem sx={{alignSelf:'end'}}>{item ? item :"Navigation A"}</MenuItem>
       </div>
    )
}

export default Navigation;
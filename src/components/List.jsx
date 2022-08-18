import './list.css'
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Button, TextField } from '@mui/material';
const List = () => {

    const [value, setvalue] = useState('')
    const [name, setName] = useState(["Navaneeth", "Akshay"])
    const onChange = (e) => {
        setvalue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setName(prev => [...prev, value])
    }
    return (
        <div className='main'>
            <div className='left'>
                <form onSubmit={onSubmit}>
                    <TextField
                        id="outlined-basic"
                        label="Enter the Name want to add"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        required
                    />
                    <Button style={{marginLeft:"2rem"}} type='submit' variant="contained">Contained</Button>
                </form>
            </div>
            <div className='right'>
                <Box sx={{ minWidth: 50 }}>
                    <FormControl style={{width:"10rem"}}>
                        <InputLabel id="demo-simple-select-label">Users</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Users"
                        >
                            {
                                name.map((name) => <MenuItem >{name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
    )
}

export default List
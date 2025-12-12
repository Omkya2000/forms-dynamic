import { useState } from 'react'
import {TextField,IconButton,Button,Box,Grid,Paper,Typography} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import './App.css'

function App() {
  const [rows,setRows]=useState([
    {name:'',value:''}
  ]);

  const handleChange=(index,field,value)=>{
    const updated=[...rows];
    updated[index][field]=value;
    setRows(updated)
  }

  const addRow=()=>{
    setRows([...rows,{name:'',value:''}])
  }

  const removeRow=(index)=>{
    setRows(rows.filter((__,i)=>i!==index))
  }

  const handleSubmit=()=>{
    console.log('Final Payload:',rows);
    
  }
 

  return (

    <>
     <Paper sx={{p:3}}>
    <Typography variant='h6' mb={2}>
      Dynamic Fields
    </Typography>
    {
      rows.map((row,index)=>(
        <Grid container spacing={2} key={index} alignItems='center' mb={1}>
          <Grid item xs={5}>
            <TextField label='Name' fullWidth value={row.name} onChange={(e)=>handleChange(index,"name",e.target.value)}/>
          </Grid>
          <Grid item xs={5}>
            <TextField label='Value' fullWidth value={row.value} onChange={(e)=> handleChange(index,"value",e.target.value)}/>
          </Grid>
          <Grid item xs={2}>
            {
              rows.length>1&&(
                <IconButton color='error' onClick={()=>removeRow(index)}>
                  <DeleteIcon/>
                </IconButton>
              )
            }

          </Grid>
        </Grid>
      ))
    } <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={addRow}
        sx={{ mt: 2 }}
      >
        Add Row
      </Button>
      <Button
        variant="outlined"
        onClick={handleSubmit}
        sx={{ mt: 2, ml: 2 }}
      >
        Submit
      </Button>

     </Paper>
    </>
  )
}

export default App

import React from 'react';
import { Box,Button,TextField,Typography,useTheme } from '@mui/material';
import {Add,Remove,Close} from '@mui/icons-material';
import { useState } from 'react';
import Navbar from 'pages/navbar';
import angkaTerbilang from '@develoka/angka-terbilang-js';

const Calculator = () => {
  const { palette } = useTheme();
  const [number1, setNumber1] = useState("");
  const [result, setResult] = useState("");
  const [terbilang, setTerbilang] = useState("")
  const opt = ['/','+','-','*','.'];
  

  const handleBtn=(n)=>{
    if(opt.includes(n) && number1==="" || opt.includes(n) && opt.includes(number1.slice(-1))){
      return;
    }
    setNumber1(number1+n);
    if(!opt.includes(n)){
      setResult(eval(number1+n).toString())
    }

  }

  const handleEqual=()=>{
    setNumber1(eval(number1).toString())
    setTerbilang(angkaTerbilang(eval(number1).toString()))
  }

  

  const handleClear=()=>{
    setResult("");
    setNumber1("");
    
  }

  return (
    <Box>
      <Navbar/>
      
      {/* calculator */}
      <Box
        padding="2rem 0"
        sx={{
          display: 'flex',
          columnGap: 1,
          rowGap: 0,
          justifyContent: 'center'
        }}
      >
        <TextField 
          label={result}                 
          name="result"
          value={number1 || "0"}
          sx={{ gridColumn: "span 2" }}
        />
        
        <Button variant="contained" onClick={handleClear}>C</Button>
      </Box>
      <Box sx={{
          display: 'flex',
          columnGap: 1,
          rowGap: 0,
          justifyContent: 'center'
        }}>
        <Typography
          sx={{
            textDecoration: "underline",
            color: palette.primary.main,
            
          }}
        
        >
          {terbilang}
        </Typography>
      </Box>
      <Box
        padding="2rem 0"
        sx={{
          display: 'flex',
          columnGap: 1,
          rowGap: 0,
          justifyContent: 'center'
        }}
      >
        <Button variant="contained" onClick={()=>{handleBtn("1")}}>1</Button>
        <Button variant="contained" onClick={()=>{handleBtn("2")}}>2</Button>
        <Button variant="contained" onClick={()=>{handleBtn("3")}}>3</Button>
        <Button variant="contained" onClick={()=>{handleBtn("+")}}><Add /></Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          columnGap: 1,
          rowGap: 0,
          justifyContent: 'center'
        }}
      >
        <Button variant="contained" onClick={()=>{handleBtn("4")}}>4</Button>
        <Button variant="contained" onClick={()=>{handleBtn("5")}}>5</Button>
        <Button variant="contained" onClick={()=>{handleBtn("6")}}>6</Button>
        <Button variant="contained" onClick={()=>{handleBtn("-")}}><Remove /></Button>
      </Box>
      <Box
        padding="2rem 0"
        sx={{
          display: 'flex',
          columnGap: 1,
          rowGap: 0,
          justifyContent: 'center'
        }}
      >
        <Button variant="contained" onClick={()=>{handleBtn("7")}}>7</Button>
        <Button variant="contained" onClick={()=>{handleBtn("8")}}>8</Button>
        <Button variant="contained" onClick={()=>{handleBtn("9")}}>9</Button>
        <Button variant="contained" onClick={()=>{handleBtn("*")}}> <Close /> </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          columnGap: 1,
          rowGap: 0,
          justifyContent: 'center'
        }}
      >
        <Button variant="contained" onClick={()=>{handleBtn(".")}}>.</Button>
        <Button variant="contained" onClick={()=>{handleBtn("0")}}>0</Button>
        <Button variant="contained" onClick={handleEqual}>=</Button>
        <Button variant="contained" onClick={()=>{handleBtn("/")}}>/</Button>
      </Box>
      
    </Box>
  )
}

export default Calculator
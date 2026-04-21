import React, { useState } from 'react'
import "./Calculator.css"
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculator() {
    const [num, setNum] = useState("0");

function inputNum(e) {
  const input = e.target.value;

  setNum((prev) => (prev === "0" ? input : String(prev) + input));
}

function clear() {
  setNum("0");
}

function clearone() {
  setNum((prev) => {
    const novo = String(prev).slice(0, -1);
    return novo === "" ? "0" : novo;
  });
}

function porcentage(){
  setNum(num /100);
}

function operatorHandler(){
  if(num > 0){
    setNum(-num)
  }else{
    setNum(Math.abs(num));
  }
}
  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <Box m={10} />
        <div className='wrapper'>
          <h1 className="result">{num}</h1>
          <button className='lihtgray' onClick={clearone}>C</button>
          <button className='lihtgray' onClick={clear}>AC</button>
          <button className='lihtgray'onClick={porcentage}>%</button>
          <button className='orange' >/</button>
          <button className='gray' onClick={inputNum} value={7}>7</button>
          <button className='gray'onClick={inputNum} value={8}>8</button>
          <button className='gray'onClick={inputNum} value={9}>9</button>
          <button className='orange'>X</button>
          <button className='gray'onClick={inputNum} value={4}>4</button>
          <button className='gray'onClick={inputNum} value={5}>5</button>
          <button className='gray'onClick={inputNum} value={6}>6</button>
          <button className='orange'>-</button>
          <button className='gray'onClick={inputNum} value={1}>1</button>
          <button className='gray'onClick={inputNum} value={2}>2</button>
          <button className='gray'onClick={inputNum} value={3}>3</button>
          <button className='orange'>+</button>
          <button className='gray' onClick={operatorHandler}>+/-</button>
          <button className='gray'onClick={inputNum} value={0}>0</button>
          <button className='gray'>,</button>
          <button className='orange'>=</button>      
        </div>
      </Container>
    </div>
  );
}
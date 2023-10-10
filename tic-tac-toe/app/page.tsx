'use client'
import Image from 'next/image'
import { useState } from 'react'
import Cell from './components/cell';

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");

  console.log(cells);
  
  return (
    <main className='container'>
      <div className='gameboard'>
        {cells.map((cell, index) => (
          <Cell 
            id={index}
            go={go}
            setGo={setGo}
            key={index}
            cells={cells}
            setCells={setCells}
            cell={cell}
          />
        ))}
      </div>
      <div>{`Its ${go} turn!`}</div>
    </main>
  )
}

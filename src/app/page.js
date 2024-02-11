"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const carta0 = {
  id: 0,
  imagem: '/zero.png'
}

const carta1 = {
  id: 1,
  nome: 'lanceiro',
  imagem: '/Spear.png',
  norte: 5,
  sul: 4,
  lest: 3,
  oeste: 1,
}

const carta2 = {
  id: 2,
  nome: 'cavalo',
  imagem: '/Horse.png',
  norte: 5,
  sul: 4,
  lest: 3,
  oeste: 1,
}

const carta3 = {
  id: 3,
  nome: 'archer',
  imagem: '/Archer.png',
  norte: 5,
  sul: 4,
  lest: 3,
  oeste: 1,
}

const carta4 = {
  id: 4,
  nome: 'lanceiro',
  imagem: '/Spear.png',
  norte: 5,
  sul: 4,
  lest: 3,
  oeste: 1,
}

const carta5 = {
  id: 5,
  nome: 'archer',
  imagem: '/Archer.png',
  norte: 5,
  sul: 4,
  lest: 3,
  oeste: 1,
}

let initialImage = carta0;

export default function Home() {
  const [cartas, setCartas] = useState([carta1, carta2, carta3, carta4, carta5]);
  const [board, setBoard] = useState(Array(9).fill(initialImage));
  const [selectedCard, setselectedCard] = useState(initialImage)
  const [moveSelected, setMoveSelected] = useState(selectedCard)

  const selectCard = (carta) => {
    setselectedCard(carta);
    console.log('SelectedCard = ', selectedCard)
  }

  const selectSquare = (square, carta) => {
    if (carta.id === 0) console.log('Selecione uma carta da mão primeiro')
    console.log(square);
    setMoveSelected(carta);
  }
  
  return (
    <main className="flex flex-col items-center p-32 bg-slate-800">
      <h1>Tabuleiro</h1>
      <div className="flex">
        <div className="w-40 h-40 bg-slate-400 border-2 hover:bg-sky-600">
          <button onClick={() => selectSquare(1, selectedCard)}>
            <Image src={`${moveSelected.imagem}`} width={400} height={10} alt={carta1.id}/>
          </button>
        </div>
        <div className="w-40 h-40 bg-slate-400 border-2 hover:bg-sky-600">
          <button onClick={() => selectSquare(2, selectedCard)}>
            <Image src={`${moveSelected.imagem}`} width={400} height={10} alt={carta1.id}/>
          </button>
        </div>
        <div className="w-40 h-40 bg-slate-400 border-2 hover:bg-sky-600">
          <button onClick={() => selectSquare(3, selectedCard)}>
            <Image src={`${moveSelected.imagem}`} width={400} height={10} alt={carta1.id}/>
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="w-40 h-40 bg-slate-400 border-2 hover:bg-sky-600">
          <button onClick={() => selectSquare(4, selectedCard)}>
            <Image src={`${moveSelected.imagem}`} width={400} height={10} alt={carta1.id}/>
          </button>
        </div>
        <div className="w-40 h-40 bg-slate-400 border-2 hover:bg-sky-600">
          <button onClick={() => selectSquare(5, selectedCard)}>
            <Image src={`${moveSelected.imagem}`} width={400} height={10} alt={carta1.id}/>
          </button>
        </div>
        <div className="w-40 h-40 bg-slate-400 border-2 hover:bg-sky-600">
          <button onClick={() => selectSquare(6, selectedCard)}>
            <Image src={`${moveSelected.imagem}`} width={400} height={10} alt={carta1.id}/>
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="w-40 h-40 bg-slate-400 border-2 hover:bg-sky-600">
          <button onClick={() => selectSquare(7, selectedCard)}>
            <Image src={`${moveSelected.imagem}`} width={400} height={10} alt={carta1.id}/>
          </button>
        </div>
        <div className="w-40 h-40 bg-slate-400 border-2 hover:bg-sky-600">
          <button onClick={() => selectSquare(8, selectedCard)}>
            <Image src={`${moveSelected.imagem}`} width={400} height={10} alt={carta1.id}/>
          </button>
        </div>
        <div className="w-40 h-40 bg-slate-400 border-2 hover:bg-sky-600">
          <button onClick={() => selectSquare(9, selectedCard)}>
            <Image src={`${moveSelected.imagem}`} width={400} height={10} alt={carta1.id}/>
          </button>
        </div>
      </div>

      <h1>Mão do jogador</h1>
      <div className="p-20 flex">
        <div className="w-40 h-40 bg-slate-400 border-2">
          <button onClick={() => selectCard(carta1)}>
            <Image src={carta1.imagem} width={400} height={10} alt={carta1.id}/>
          </button>
        </div>
        <div className="w-40 h-40 bg-slate-400 border-2">
          <button onClick={() => selectCard(carta2)}>
            <Image src={carta2.imagem} width={400} height={10} alt={carta2.id}/>
          </button>
        </div>
        <div className="w-40 h-40 bg-slate-400 border-2">
          <button onClick={() => selectCard(carta3)}>
            <Image src={carta3.imagem} width={400} height={10} alt={carta3.id}/>
          </button>
        </div>
        <div className="w-40 h-40 bg-slate-400 border-2">
          <button onClick={() => selectCard(carta4)}>
            <Image src={carta4.imagem} width={400} height={10} alt={carta4.id}/>
          </button>
        </div>
        <div className="w-40 h-40 bg-slate-400 border-2">
          <button onClick={() => selectCard(carta5)}>
            <Image src={carta5.imagem} width={400} height={10} alt={carta5.id}/>
          </button>
        </div>
      </div>
    </main>
  );
}

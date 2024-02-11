"use client"
import Image from "next/image";
import { useState } from "react";
import Hand from "./hand";
import Cartas from './dataCards';

let initialImage = Cartas.carta0;

export default function Home() {
  const [cardsOnHand, setCardsOnHand] = useState([Cartas.carta1, Cartas.carta2, Cartas.carta3, Cartas.carta4, Cartas.carta5]);
  const [board, setBoard] = useState(Array(9).fill(initialImage));
  const [selectedCard, setSelectedCard] = useState(initialImage);

  const selectCard = (carta) => {
    setSelectedCard(carta);
  }

  const selectSquare = (index) => {
    if (selectedCard.id === 0) {
      console.log('Selecione uma carta da mão primeiro');
      alert('Selecione uma carta da mão primeiro');
      return;
    }
    const newBoard = [...board];
    newBoard[index] = selectedCard;
    setBoard(newBoard);
    const novasCartasMao = cardsOnHand.splice(cardsOnHand.indexOf(selectedCard), 1);
    setCardsOnHand(cardsOnHand);
    setSelectedCard(Cartas.carta0);
  }
  
  return (
    <main className="flex flex-col items-center p-32 bg-slate-800">
      <h1>Tabuleiro</h1>
      <div className="grid grid-cols-3 ">
        {/* Renderizar o tabuleiro */}
        {board.map((card, indexOnBoard) => (
          <div onClick={() => selectSquare(indexOnBoard)} key={indexOnBoard}>
            {/* Renderizar a imagem da carta */}
            <Image src={card.imagem} width={170} height={10} alt={indexOnBoard}/>
          </div>
        ))}
      </div>
      <h1>Mão do jogador</h1>
      <Hand cards={cardsOnHand} selectCard={selectCard} />
    </main>
  );
}

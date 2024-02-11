import Image from "next/image";

const Hand = ({ cards, selectCard }) => {
  return (
    <div className="flex p-20">
      {cards.map((card, index) => (
        <div key={index} className="w-40 h-40 bg-slate-400 border-2">
          <button onClick={() => selectCard(card)}>
            <Image src={card.imagem} width={400} height={10} alt={card.id} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Hand;
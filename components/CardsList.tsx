interface CardProps {
  cardNo: string;
  expiry: string;
  cvv: string;
}

export default function CardsList({ cards }: { cards: CardProps[] }) {
  return (
    <div className="space-y-3 h-[300px] overflow-y-scroll hide-scrollbar">
      {cards.length === 0 && (
        <div className="text-center text-muted-foreground text-sm sm:text-base">
          No cards added yet
        </div>
      )}
      {cards.map((card: CardProps, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 bg-secondary rounded"
        >
          <span className="text-sm sm:text-base mb-2 sm:mb-0">
            {card.cardNo}
          </span>
          <span className="text-sm sm:text-base mb-2 sm:mb-0">
            {card.expiry} - {card.cvv}
          </span>
        </div>
      ))}
    </div>
  );
}

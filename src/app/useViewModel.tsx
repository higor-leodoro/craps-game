type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

export default function useViewModel() {
  const rollDice = (): DiceValue =>
    (Math.floor(Math.random() * 6) + 1) as DiceValue;

  return { rollDice };
}

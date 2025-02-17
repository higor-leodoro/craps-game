import { useRef, useState } from "react";
import { ReactDiceRef } from "react-dice-complete";

export default function useViewModel() {
  const reactDice = useRef<ReactDiceRef>(null);
  const [result, setResult] = useState("");

  const handleRollDone = (total: number) => {
    const pointers = [4, 5, 6, 8, 9, 10];

    if (result === "Ponto") {
    }

    if (total === 7 || total === 11) {
      return setResult("Viótia natural");
    } else if (total === 2 || total === 3 || total === 12) {
      return setResult("Craps");
    } else if (pointers.includes(total)) {
      return setResult("Ponto");
    }
  };

  const handleRollDice = () => {
    reactDice.current?.rollAll();
  };

  return { handleRollDone, reactDice, handleRollDice, result };
}

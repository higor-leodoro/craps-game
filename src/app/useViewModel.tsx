import { useRef, useState } from "react";
import { ReactDiceRef } from "react-dice-complete";

enum GamePhase {
  ComeOutRoll = "Come Out Roll",
  PointPhase = "Point Phase",
  EndGame = "End game",
}

export default function useViewModel() {
  const reactDice = useRef<ReactDiceRef>(null);
  const [result, setResult] = useState("");
  const [gamePhase, setIsGamePhase] = useState<GamePhase>(
    GamePhase.ComeOutRoll
  );
  const [point, setPoint] = useState(0);

  const handleRollDone = (total: number) => {
    const pointers = [4, 5, 6, 8, 9, 10];

    if (gamePhase === GamePhase.PointPhase) {
      if (total === 7) {
        setResult("Pedeu");
      } else if (total === point) {
        setResult("Vitória");
        return alert("fim de jogo");
      }
    } else if (gamePhase === GamePhase.ComeOutRoll) {
      if (total === 7 || total === 11) {
        return setResult("Viótia natural");
      } else if (total === 2 || total === 3 || total === 12) {
        return setResult("Craps");
      } else if (pointers.includes(total)) {
        setResult("Point (ponto): " + total);
        setPoint(total);
        setIsGamePhase(GamePhase.PointPhase);
      }
    } else {
      setResult("Fim de jogo");
    }
  };

  const handleRollDice = () => {
    reactDice.current?.rollAll();
  };

  return { handleRollDone, reactDice, handleRollDice, result };
}

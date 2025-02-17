"use client";

import { useState } from "react";
import Dice from "react-dice-roll";
import useViewModel from "./useViewModel";

export default function Home() {
  const { rollDice } = useViewModel();
  const [diceValue, setDiceValue] = useState(rollDice());

  const handleRoll = () => {
    setDiceValue(rollDice());
  };

  const value = rollDice();
  console.log(value);

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex gap-20">
        <Dice cheatValue={diceValue} />
      </div>
      <div className="mt-10">
        <button className="bg-red-400 p-4 rounded" onClick={handleRoll}>
          <h1 className="font-bold text-white text-xl">Roll Dice</h1>
        </button>
      </div>
    </main>
  );
}

"use client";

import ReactDice from "react-dice-complete";
import useViewModel from "./useViewModel";
import { useState } from "react";
import Image from 'next/image';
import Splash from './assets/splash.png';

export default function Home() {
  const { handleRollDone, reactDice, handleRollDice, result } = useViewModel();
  const [isSplash, setIsSplash] = useState(true);

  return isSplash ? (
    <Image 
      onClick={()=> setIsSplash(false)}
      src={Splash} 
      alt="Splash Image" 
      layout="responsive" 
      width={100}
    />
  ) : (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="flex gap-20">
        <ReactDice
          numDice={2}
          ref={reactDice}
          rollDone={handleRollDone}
          defaultRoll={1}
        />
      </div>
      <div className="mt-10">
        <button className="bg-red-400 p-4 rounded" onClick={handleRollDice}>
          <h1 className="font-bold text-white text-xl">Roll dices</h1>
        </button>
      </div>
      <div>
        <h1>{result}</h1>
      </div>
    </main>
  );
}

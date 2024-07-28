"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

interface DataItem {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
}
export default function Home() {
  const [sliderValue, setSliderValue] = useState([33]);
  const [data, setData] = useState<DataItem[]>([]);
  async function handleClick(choice: string) {
    console.log("You clicked", choice);
    try {
      const response = await axios.get('/api'); // Mock API call
      const fetchedData = response.data;
      console.log(fetchedData['mockData'])
      setData(fetchedData['mockData']);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  function setGamePoint(target:string){

  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10 m-0 dark:bg-white">
      <div className="mb-6">Set a point to beat the AI at Rock Paper Scissors</div>
      <Slider defaultValue={[33]} max={50} step={1} className="w-1/2"  onValueChange={(value) => setSliderValue(value)} />
      <div className="mt-4 text-lg">
        Target Point: {sliderValue[0]} {/* Display the first value from the slider array */}
      </div>
      <Button onClick={() => setGamePoint(sliderValue[0].toString())} className="m-4">
          Set Game Point
        </Button>
      
      <div className="flex flex-row items-start justify-center pt-4 m-0">
        <Button onClick={() => handleClick("Rock")} className="m-4">
          Rock
        </Button>
        <Button onClick={() => handleClick("Paper")} className="m-4">
          Paper
        </Button>
        <Button onClick={() => handleClick("Scissors")} className="m-4">
          Scissors
        </Button>
      </div>
      

      <div className="w-full max-w-4xl">
        {data.length > 0 && (
          <table className="table-auto border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th className="border border-white-400 px-4 py-2">Player</th>
                <th className="border border-gray-400 px-4 py-2">Computer</th>
                <th className="border border-gray-400 px-4 py-2">Won</th>
                <th className="border border-gray-400 px-4 py-2">Points</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 px-4 py-2">
                    You played {item.col1}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Computer Played {item.col2}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Round Won by {item.col3}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Player Score {item.col4}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Computer Score {item.col4}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}



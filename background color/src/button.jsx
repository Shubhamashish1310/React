import React from "react";
import { useState } from "react";

function Button() {
  const [color, setcolor] = useState("white");

  return (
    <div className="w-full h-screen p-4 flex justify-center items-center" style={{ backgroundColor: color }}>
      <div >
        <div className="flex justify-center flex-wrap bg-lime-200 align-center flex-row mx-2 gap-2 w-auto rounded-3xl">
          <button onClick={() => setcolor("red")} className="bg-red-700 flex flex-wrap p-2 px-4 rounded-xl text-xl text-white hover:bg-red-800">
            Red
          </button>
          <button onClick={() => setcolor("blue")} className="bg-blue-700 flex flex-wrap p-2 px-4 rounded-xl text-xl text-white hover:bg-blue-800">
            Blue
          </button>
          <button onClick={() => setcolor("purple")} className="bg-purple-700 flex flex-wrap p-2 px-4 rounded-xl text-xl text-white hover:bg-purple-800">
            Purple
          </button>
          <button onClick={() => setcolor("green")} className="bg-green-700 flex flex-wrap p-2 px-4 rounded-xl text-xl text-white hover:bg-green-800">
            Green
          </button>
          <button onClick={() => setcolor("black")} className="bg-black flex flex-wrap p-2 px-4 rounded-xl text-xl text-white hover:bg-black">
            Black
          </button>
          <button onClick={() => setcolor("yellow")} className="bg-yellow-400 flex flex-wrap p-2 px-4 rounded-xl text-xl text-white hover:bg-yellow-500">
            Yellow
          </button>
          <button onClick={() => setcolor("cyan")} className="bg-cyan-700 flex flex-wrap p-2 px-4 rounded-xl text-xl text-white hover:bg-cyan-800">
            Cyan
          </button>
          <button onClick={() => setcolor("lime")} className="bg-lime-500 flex flex-wrap p-2 px-4 rounded-xl text-xl text-white hover:bg-lime-600">
            Lime
          </button>
          <button onClick={() => setcolor("pink")} className="bg-pink-700 flex flex-wrap p-2 px-4 rounded-xl text-xl text-white hover:bg-pink-800">
            Pink
          </button>
          <button onClick={() => setcolor("orange")} className="bg-orange-700 flex flex-wrap p-2 px-4 rounded-xl text-xl text-white hover:bg-orange-800">
            Orange
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Button;

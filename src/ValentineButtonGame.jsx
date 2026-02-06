import React, { useState } from "react";

function ValentineButtonGame() {
  const [yesSize, setYesSize] = useState(1);
  const [noPosition, setNoPosition] = useState({ top: 55, left: 60 });
  const [answered, setAnswered] = useState(false);

  const moveNoButton = () => {
    const top = Math.random() * 80 + 10; // keep inside viewport
    const left = Math.random() * 80 + 10;
    setNoPosition({ top, left });
    setYesSize((prev) => prev + 0.15);
  };

  if (answered) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-pink-100">
        <h1 className="text-5xl font-bold text-pink-600 animate-bounce text-center px-6">
          Yayyy 💖 I knew you would say yes!
        </h1>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-pink-100 relative overflow-hidden">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-pink-600">
          Will you be my Valentine? 🌹
        </h1>

        {/* Buttons start next to each other */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setAnswered(true)}
            style={{ transform: `scale(${yesSize})` }}
            className="transition-transform duration-300 px-8 py-4 bg-pink-500 text-white rounded-2xl shadow-xl text-xl font-semibold hover:scale-110"
          >
            Yes 💘
          </button>

          <button
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            style={{
              position: "absolute",
              top: `${noPosition.top}%`,
              left: `${noPosition.left}%`,
            }}
            className="px-6 py-3 bg-gray-300 text-gray-800 rounded-2xl shadow-lg text-lg font-medium"
          >
            No 🙈
          </button>
        </div>
      </div>
    </div>
  );
}

export default ValentineButtonGame;

// import React, { useState, useMemo, useRef } from "react";
// import TinderCard from "react-tinder-card";
// import "./Advanced.css";
//
// // Initial character data
// const db = [
//   { name: "Richard Hendricks", url: "./img/richard.jpg" },
//   { name: "Erlich Bachman", url: "./img/erlich.jpg" },
//   { name: "Monica Hall", url: "./img/monica.jpg" },
//   { name: "Jared Dunn", url: "./img/jared.jpg" },
//   { name: "Dinesh Chugtai", url: "./img/dinesh.jpg" },
// ];
//
// function Advanced() {
//   const [currentIndex, setCurrentIndex] = useState(db.length - 1);
//   const [lastDirection, setLastDirection] = useState();
//
//   // Reference to track the current index
//   const currentIndexRef = useRef(currentIndex);
//
//   // Create references for all cards
//   const childRefs = useMemo(
//     () =>
//       Array(db.length)
//         .fill(0)
//         .map(() => React.createRef()),
//     []
//   );
//
//   // Update the current index both in state and reference
//   const updateCurrentIndex = (val) => {
//     setCurrentIndex(val);
//     currentIndexRef.current = val;
//   };
//
//   const canGoBack = currentIndex < db.length - 1;
//   const canSwipe = currentIndex >= 0;
//
//   // Handle swipe action
//   const swiped = (direction, nameToDelete, index) => {
//     setLastDirection(direction);
//     updateCurrentIndex(index - 1);
//   };
//
//   // Handle when card goes out of frame
//   const outOfFrame = (name, idx) => {
//     console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
//
//     // Restore card if needed
//     if (currentIndexRef.current >= idx) {
//       childRefs[idx].current.restoreCard();
//     }
//   };
//
//   // Programmatically trigger a swipe
//   const swipe = async (dir) => {
//     if (canSwipe && currentIndex < db.length) {
//       await childRefs[currentIndex].current.swipe(dir);
//     }
//   };
//
//   // Undo the last swipe
//   const goBack = async () => {
//     if (!canGoBack) return;
//     const newIndex = currentIndex + 1;
//     updateCurrentIndex(newIndex);
//     await childRefs[newIndex].current.restoreCard();
//   };
//
//   return (
//     <div>
//       <h1>Bún trộn</h1>
//       <div className="cardContainer">
//         {db.map((character, index) => (
//           <TinderCard
//             ref={childRefs[index]}
//             className="swipe"
//             key={character.name}
//             onSwipe={(dir) => swiped(dir, character.name, index)}
//             onCardLeftScreen={() => outOfFrame(character.name, index)}
//           >
//             <div
//               style={{ backgroundImage: "url(" + character.url + ")" }}
//               className="card"
//             >
//               <h3>{character.name}</h3>
//             </div>
//           </TinderCard>
//         ))}
//       </div>
//       <div className="buttons">
//         <button
//           style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
//           onClick={() => swipe("left")}
//         >
//           Swipe left!
//         </button>
//         <button
//           style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
//           onClick={() => goBack()}
//         >
//           Undo swipe!
//         </button>
//         <button
//           style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
//           onClick={() => swipe("right")}
//         >
//           Swipe right!
//         </button>
//       </div>
//       {lastDirection ? (
//         <h2 key={lastDirection} className="infoText">
//           You swiped {lastDirection}
//         </h2>
//       ) : (
//         <h2 className="infoText">
//           Swipe a card or press a button to get Restore Card button visible!
//         </h2>
//       )}
//     </div>
//   );
// }
//
// export default Advanced;
import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";

const db = [
  { name: "Richard Hendricks", url: "./img/richard.jpg" },
  { name: "Erlich Bachman", url: "./img/erlich.jpg" },
  { name: "Monica Hall", url: "./img/monica.jpg" },
  { name: "Jared Dunn", url: "./img/jared.jpg" },
  { name: "Dinesh Chugtai", url: "./img/dinesh.jpg" },
];

function Advanced() {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();

  const currentIndexRef = useRef(currentIndex);
  const childRefs = useMemo(() => Array(db.length).fill(0).map(() => React.createRef()), []);

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;
  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    if (currentIndexRef.current >= idx) {
      childRefs[idx].current.restoreCard();
    }
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div style={{
      minHeight: "100vh",
      overflow: "hidden",
    }}>
      <div className="flex flex-col items-center justify-center h-screen from-pink-500 to-blue-500 text-center">
        <h1 className="text-5xl font-bold text-white mb-8">Bún trộn</h1>
        <div className="relative w-[90vw] max-w-xs h-[300px]">
          {db.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="absolute w-full h-full"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name, index)}
              onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
              <div
                style={{ backgroundImage: `url(${character.url})` }}
                className="bg-cover bg-center w-full h-full shadow-xl rounded-2xl"
              >
                <h3 className="absolute bottom-0 left-0 p-4 text-white font-bold text-xl">{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>

        <div className="mt-8 flex space-x-4">
          <button
            onClick={() => swipe("left")}
            className={`px-4 py-2 text-lg font-semibold rounded-lg bg-blue-500 text-white shadow-md transition-transform transform hover:scale-105 ${
              !canSwipe && "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Swipe left!
          </button>
          <button
            onClick={goBack}
            className={`px-4 py-2 text-lg font-semibold rounded-lg bg-green-500 text-white shadow-md transition-transform transform hover:scale-105 ${
              !canGoBack && "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Undo swipe!
          </button>
          <button
            onClick={() => swipe("right")}
            className={`px-4 py-2 text-lg font-semibold rounded-lg bg-red-500 text-white shadow-md transition-transform transform hover:scale-105 ${
              !canSwipe && "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Swipe right!
          </button>
        </div>

        {lastDirection && (
          <h2 className="mt-4 text-white font-semibold animate-pulse">You swiped {lastDirection}</h2>
        )}
      </div>
    </div>
  );
}

export default Advanced;

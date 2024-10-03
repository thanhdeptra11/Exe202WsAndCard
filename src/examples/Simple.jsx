import { useState } from "react";
import TinderCard from "react-tinder-card";
import "./Simple.css";

// Initial character data
const db = [
  { name: "Richard Hendricks", url: "./assets/richard.jpg" },
  { name: "Erlich Bachman", url: "./assets/erlich.jpg" },
  { name: "Monica Hall", url: "./assets/monica.jpg" },
  { name: "Jared Dunn", url: "./assets/jared.jpg" },
  { name: "Dinesh Chugtai", url: "./assets/dinesh.jpg" },
];

function Simple() {
  // Use state to store the list of characters so we can update it dynamically
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  // Function that handles the swipe action
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);

    // Remove the swiped card from the list of characters
    // setCharacters((prevCharacters) =>
    //   prevCharacters.filter((character) => character.name !== nameToDelete)
    // );
  };

  // Function that logs when a card goes out of frame
  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div>
      <h1>phở bò</h1>
      <div className="cardContainer">
        {characters.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: "url(" + character.url + ")" }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : (
        <h2 className="infoText" />
      )}
    </div>
  );
}

export default Simple;

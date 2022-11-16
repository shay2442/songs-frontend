import { useState, useEffect } from "react";
import "./App.css";


function App() {
const [song, setSong] = useState("");
const [currentSong, setCurrentSong] = useState(18);



 useEffect(() => {
  fetch(`http://localhost:3001/songs/${currentSong}`)
    .then((r) => r.json())
    .then((song) => setSong(song));
},[currentSong]);



 

  return (
    <div className="App">

      <h1>Songstar</h1>
    
      <h1>{song ? <img height="100" width="180"src={song.cover}/> : "No song to show"}</h1>
      <h3>{song.title}</h3>
      <button onClick={() => setCurrentSong(currentSong - 1)}>Previous Song</button>
      <button onClick={() => setCurrentSong(currentSong + 1)}>Get Random Song</button>
      


    </div>
  );
}

export default App;
import { useState } from "react";
import "./App.css";

function App() {
  // data
  const singersList = {
    Kavita_Seth: [
      {
        songname: "Rangi Saari",
        link: "https://www.youtube.com/watch?v=jY8mAWdQFOA",
        pic: "/images/RangiSaari.jpg",
      },
      {
        songname: "Bombay Dreams",
        link: "https://www.youtube.com/watch?v=lYxjFOvFzb4",
        pic: "/images/bombayDreams.jpg",
      },
      {
        songname: "Iktara",
        link: "https://www.youtube.com/watch?v=4sMdGz8rbcs",
        pic: "/images/iktara.jpg",
      },
    ],
    Jonita_Gandhi: [
      {
        songname: " Vaseegara",
        link: "https://www.youtube.com/watch?v=zVgyZ-NPxHk",
        pic: "/images/Vaseegara.jpg",
      },
      {
        songname: "Arabic Kuthu",
        link: "https://www.youtube.com/watch?v=KUN5Uf9mObQ",
        pic: "/images/arabicKuttu.jpg",
      },
      {
        songname: "Tum hi ho",
        link: "https://www.youtube.com/watch?v=3AbmV04wZ4Y",
        pic: "/images/tumHiHo.jpg",
      },
    ],
    KK: [
      {
        songname: " Beete Lamhein",
        link: "https://www.youtube.com/watch?v=4P4Oa0pbZNQ",
        pic: "/images/BeeteLamhein.jpg",
      },
      {
        songname: "Zara Sa",
        link: "https://www.youtube.com/watch?v=gYpHek_hW1w",
        pic: "/images/ZaraSa.jpg",
      },
      {
        songname: "Alvida",
        link: "https://www.youtube.com/watch?v=qF179mXIahE",
        pic: "/images/Alvida.jpg",
      },
    ],
  };

  // -----------------object to array conversion--------------

  const singerNameArray = Object.keys(singersList); // get keys array from object

  // State
  const [singerName, setSingerName] = useState("Kavita_Seth");

  // handler
  function singerClickHandler(singerName) {
    setSingerName(singerName);
  }

  return (
    <div className="App">
      <header>
        <h1 className="heading">🎶 Playlist 2022 🎶</h1>
        <nav>
          {/* singers array map */}
          {singerNameArray.map((singerName) => {
            return (
              <span
                className="singer-name"
                key={singerName}
                onClick={() => singerClickHandler(singerName)}
                style={{ padding: "0.5rem", cursor: "pointer" }}
              >
                🎤{singerName}
              </span>
            );
          })}
        </nav>
      </header>

      {/* -------------- */}
      <main>
        <h3>Select Artist ⬆️ &amp; Click on songs ⬇️ to listen.</h3>

        <div
          style={{
            className: "song-container",
            width: "800px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* songs array map */}

          {singersList[singerName].map((songs) => {
            console.log(songs);
            return (
              <a className="song-details" href={songs.link} target="_blank">
                <img src={songs.pic} width="150px" height="150px" alt="songs" />
                <li
                  style={{
                    className: "songs-each",
                    // padding: "1rem",
                    listStyleType: "none",
                    fontSize: "16px",
                    textAlign: "start",
                  }}
                >
                  🎵 {songs.songname}
                </li>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;

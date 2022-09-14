import { useState } from "react";
import "./App.css";

function App() {
  // data
  const singersList = {
    Ananya_Bhat: [
      {
        songname: "Mehabooba KGF-2",
        link: "https://www.youtube.com/watch?v=WRpr1PGVEbc",
        pic: "/images/mehabooba.jpg",
        rating: "4.7/5",
      },
      {
        songname: "Sojugada_Sooju_Malige",
        link: "https://www.youtube.com/watch?v=yWmcMsI5dks",
        pic: "/images/Sojugada.jpg",
        rating: "4.5/5",
      },
      {
        songname: "Garbadhi",
        link: "https://www.youtube.com/watch?v=o_Gark2BmoQ",
        pic: "/images/garbhadi.jpg",
        rating: "4.3/5",
      },
      {
        songname: "Singara Siriye",
        link: "https://www.youtube.com/watch?v=G_TFYhW0D44",
        pic: "/images/Singara-Siriye.jpg",
        rating: "4.5/5",
      },
    ],
    Kavita_Seth: [
      {
        songname: "Rangi Saari",
        link: "https://www.youtube.com/watch?v=jY8mAWdQFOA",
        pic: "/images/RangiSaari.jpg",
        rating: "4.5/5",
      },
      {
        songname: "Bombay Dreams",
        link: "https://www.youtube.com/watch?v=lYxjFOvFzb4",
        pic: "/images/bombayDreams.jpg",
        rating: "4.6/5",
      },
      {
        songname: "Iktara",
        link: "https://www.youtube.com/watch?v=4sMdGz8rbcs",
        pic: "/images/iktara.jpg",
        rating: "4.2/5",
      },
      {
        songname: "Airee Sakhi",
        link: "https://www.youtube.com/watch?v=CtQ3UkEcQYI",
        pic: "/images/Airee-Sakhi.jpg",
        rating: "4.0/5",
      },
    ],
    KK: [
      {
        songname: " Beete Lamhein",
        link: "https://www.youtube.com/watch?v=4P4Oa0pbZNQ",
        pic: "/images/BeeteLamhein.jpg",
        rating: "4.6/5",
      },
      {
        songname: "Zara Sa",
        link: "https://www.youtube.com/watch?v=gYpHek_hW1w",
        pic: "/images/ZaraSa.jpg",
        rating: "4.4/5",
      },
      {
        songname: "Alvida",
        link: "https://www.youtube.com/watch?v=qF179mXIahE",
        pic: "/images/Alvida.jpg",
        rating: "4.2/5",
      },
      {
        songname: "Such Keh Raha Hai",
        link: "https://www.youtube.com/watch?v=nVB0Wqx1ytc",
        pic: "/images/Such-Keh-Raha.jpg",
        rating: "4.6/5",
      },
    ],
    Jonita_Gandhi: [
      {
        songname: " Vaseegara",
        link: "https://www.youtube.com/watch?v=zVgyZ-NPxHk",
        pic: "/images/Vaseegara.jpg",
        rating: "4.4/5",
      },
      {
        songname: "Arabic Kuthu",
        link: "https://www.youtube.com/watch?v=KUN5Uf9mObQ",
        pic: "/images/arabicKuttu.jpg",
        rating: "4.1/5",
      },
      {
        songname: "Tum hi ho",
        link: "https://www.youtube.com/watch?v=3AbmV04wZ4Y",
        pic: "/images/tumHiHo.jpg",
        rating: "4.3/5",
      },
      {
        songname: "Main Tumhara",
        link: "https://www.youtube.com/watch?v=8Q5d0P6x61k",
        pic: "/images/Main-Tumhara.jpg",
        rating: "4.4/5",
      },
    ],
  };

  // -----------------object to array conversion--------------

  const singerNameArray = Object.keys(singersList); // get keys array from object

  // State
  const [singerName, setSingerName] = useState("Ananya_Bhat");

  // handler
  function singerClickHandler(singerName) {
    setSingerName(singerName);
  }

  return (
    <div className="App">
      <header>
        <h1 className="heading">🎶 Songs Playlist 2022 🎶</h1>
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
                🎤 {singerName}
              </span>
            );
          })}
        </nav>
      </header>

      {/* -------------- */}
      <main>
        <h3 className="info">
          Select <span className="highlight">Artist</span> ⬆️ &amp; Click on
          image ⬇️ to listen song.
        </h3>

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
                <p>Ratings:⭐{songs.rating}</p>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;

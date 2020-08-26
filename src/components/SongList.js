import React, { useState } from "react";
import "./SongList.css";
import song1 from "../audio/I Want It That Way.mp3";
import song2 from "../audio/My Heart will go on.mp3";
import song3 from "../audio/No One Compares To You.mp3";
import Analytics from "../components/Analytics";

const SongList = () => {
  const [thumbColor, setThumbColor] = useState(false);
  const [filteredSong, setFilteredSong] = useState([]);
  const [showFilteredArray, setShowFilteredArray] = useState(false);
  const songsList = [
    {
      id: "1",
      song_name: "i want it that way",
      like_count: "3",
      singer: "Backstreet Boys",
      audio_src: song1,
      song_details: [{ composer: "Max Martin" }, { singer: "Backstreet Boys" }],
    },
    {
      id: "2",
      song_name: "my heart will go on",
      like_count: "2",
      singer: "Celine Dion",
      audio_src: song2,
      song_details: [{ composer: "Games Horner" }, { singer: "Celine Dion" }],
    },
    {
      id: "3",
      song_name: "no one compares to you",
      like_count: "3",
      singer: "Sinead Oconnor",
      audio_src: song3,
      song_details: [{ composer: "Jack" }, { singer: "Sinead Oconnor'" }],
    },
  ];

  const changeThumbColor = (id) => {
    setThumbColor(!thumbColor);
    if (thumbColor === true) {
      document.querySelector("#thumb" + id).style.color = "grey";
    } else if (thumbColor === false) {
      document.querySelector("#thumb" + id).style.color = "#2185d0";
    }
  };
  const expandSongDetails = (id) => {
    alert(id);
  };
  const getSearchTerm = (e) => {
    let result = songsList.filter((ele) => {
      return e.target.value === ele.song_name;
    });
    setFilteredSong(result);
    console.log(filteredSong);
    if (filteredSong.length > 0) {
      setShowFilteredArray(false);
    } else {
      setShowFilteredArray(true);
    }
  };
  return (
    <div>
      <div className="top-bar-song-list"> Songs list</div>
      <div className="search-box">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search by SongName..."
            onChange={(e) => getSearchTerm(e)}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Likes</th>
            <th></th>
            <th>Songs</th>
            <th>Singer</th>
            <th></th>
            <th>Songs Detail</th>
          </tr>
        </thead>
        <tbody>
          {!showFilteredArray &&
            songsList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.like_count}</td>
                  <td>
                    <i
                      className="large thumbs up icon"
                      id={"thumb" + index}
                      onClick={() => changeThumbColor(index)}
                      style={{ color: "grey" }}
                    ></i>
                  </td>
                  <td>{item.song_name}</td>
                  <td>{item.singer}</td>
                  <td>
                    <audio controls>
                      <source src={item.audio_src} type="audio/mp3" />
                    </audio>
                  </td>
                  <td className="song-details">
                    <i
                      className="large chevron circle down icon"
                      onClick={() => expandSongDetails(item.id)}
                    ></i>
                    <div className="content-song-details">
                      <p>
                        {" "}
                        <b> Composer : </b> {item.song_details[0].composer}
                      </p>
                      <p>
                        <b> Singer : </b> {item.song_details[1].singer}
                      </p>
                    </div>
                  </td>
                </tr>
              );
            })}

          {showFilteredArray &&
            filteredSong.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.like_count}</td>
                  <td>
                    <i
                      className="large thumbs up icon"
                      id={"thumb" + index}
                      onClick={() => changeThumbColor(index)}
                      style={{ color: "grey" }}
                    ></i>
                  </td>
                  <td>{item.song_name}</td>
                  <td>{item.singer}</td>
                  <td>
                    <audio controls>
                      <source src={item.audio_src} type="audio/mp3" />
                    </audio>
                  </td>
                  <td className="song-details">
                    <i
                      className="large chevron circle down icon"
                      onClick={() => expandSongDetails(item.id)}
                    ></i>
                    <div className="content-song-details">
                      <p>
                        {" "}
                        <b> Composer : </b> {item.song_details[0].composer}
                      </p>
                      <p>
                        <b> Singer : </b> {item.song_details[1].singer}
                      </p>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="analytics-div">
        {" "}
        <Analytics songs={songsList} />{" "}
      </div>
    </div>
  );
};
export default SongList;

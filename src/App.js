import "./styles.css";
import MoviePlayList from "./components/MoviePlayList";
import SongPlayList from "./components/SongPlayList";

export default function App() {
  const handleResetClick = () => {
    //
  };

  return (
    <div className="container is-fluid">
      <button
        onClick={() => handleResetClick()}
        className="button is-danger"
      >
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlayList />
      <hr />
      <SongPlayList />
    </div>
  );
}

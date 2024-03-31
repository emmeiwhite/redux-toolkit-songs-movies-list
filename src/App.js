import "./styles.css";
import MoviePlayList from "./components/MoviePlayList";
import SongPlayList from "./components/SongPlayList";
import { resetMovies, resetSongs } from "./store";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    // We are dispatching two actions to handle both cases for now
    dispatch(resetMovies());
    dispatch(resetSongs());
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

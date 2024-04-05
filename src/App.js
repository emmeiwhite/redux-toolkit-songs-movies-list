import "./styles.css";
import MoviePlayList from "./components/MoviePlayList";
import SongPlayList from "./components/SongPlayList";
import { useDispatch } from "react-redux";
import { reset } from "./store";

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset());
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

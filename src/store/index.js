import { configureStore } from "@reduxjs/toolkit";

/** We import the action creators from the slices but immediately re-export them */
import { addSong, removeSong, songsReducer } from "./slices/songsSlice";
import { addMovie, removeMovie, moviesReducer } from "./slices/moviesSlice";
import { reset } from "./actions.js";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

// 1. We need to export the store
export { store };

// 2. After slice is created, we need to export action creators which is automatically created by redux-toolkit
export { addMovie, removeMovie, addSong, removeSong, reset };

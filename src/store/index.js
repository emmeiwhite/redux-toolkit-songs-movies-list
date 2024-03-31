import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // 'song'+'/'+addSong = 'song/addSong' action type
    addSong(state, action) {
      state.push(action.payload);
    },

    // 'song'+'/'+removeSong = 'song/removeSong' - Action
    removeSong(state, action) {
      console.log("To remove the song");
      //   state.filter((song) => song !== action.payload); Filter didn't work, we have to directly mutate the state in this case

      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },

  // Also case about this action type
  extraReducers(builder) {
    builder.addCase("movie/resetMovies", (state, action) => {
      return [];
    });
  },
});

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetMovies(state, action) {
      console.log("Reset Movies!");
      return [];
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

// 1. We need to export the store
export { store };

// 2. After slice is created, we need to export action creators which is automatically created by redux-toolkit
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie, resetMovies } = moviesSlice.actions;

/** --- Dispatching an action in Redux with Slice ---
 * Note: It is not react-redux. We'll ultimately connect react with redux
 *  using react-redux library. This is just to debug and know the slices
 */
/* ---
console.log(store.getState());
store.dispatch(songsSlice.actions.addSong("Mai hun na!"));
console.log(store.getState());
--- */

// Just debugging
// console.log(store.getState()); // songs:[]

// Let's dispatch a special action | This is just for debugging purpose
/*
store.dispatch({
  type: "song/addSong",
  payload: "New Song!",
});
*/

// console.log(JSON.stringify(store.getState())); // songs:["New Song!"]

/** --- CHECKING HOW THE SLICE CREATES AN ACTION CREATOR and ACTION TYPE FOR US AUTOMATICALLY --- */

// Slices help us in 3 things:
// 1. Creates initial small state for a piece of state
// 2. Combines piece of reducer with the big reducer(app level)
// 3. Creates action creator for us (let's see this coz this is fun)
/*
console.log(songsSlice.actions); // Returns an object which contains two action creators addSong() and removeSong(), which when called returns ACTION with type and payload

console.log(songsSlice.actions.addSong("We are here!"));
console.log(songsSlice.actions.removeSong());
--- */

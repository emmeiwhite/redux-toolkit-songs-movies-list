import { createAction } from "@reduxjs/toolkit";

// This is a custom action - not to be confused with the  action creator functions which will go into centralized store index.js file to be exported by components

export const reset = createAction("app/reset"); // So it returns the action {type="app/reset"}

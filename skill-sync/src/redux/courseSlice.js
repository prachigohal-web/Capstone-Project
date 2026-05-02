import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const res = await axios.get(
      "https://api.sampleapis.com/codingresources/codingResources"
    );
    return res.data;
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    savedCourses: [],
    status: "idle",
  },
  reducers: {
    addToSaved: (state, action) => {
      state.savedCourses.push(action.payload);
    },
    removeFromSaved: (state, action) => {
      state.savedCourses = state.savedCourses.filter(
        (c) => c.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.status = "success";
      })
      .addCase(fetchCourses.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { addToSaved, removeFromSaved } = courseSlice.actions;
export default courseSlice.reducer;
import axios from "axios";

const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const fetchPosts = createAsyncThunk("posts/fetchPosts", () => {
  return axios.get(POSTS_URL).then((res) => res.data.posts);
});
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
  extraReducers: (builder) => {},
});
export const selectAllPosts = (state) => state.posts.posts;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;

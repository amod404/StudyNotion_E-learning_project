import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,  //where is this signup data used ?
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null, 
  // user Data is not modified by this slice..... it i modified by profile slice
  // can merge them that will also work fine
  // remeber that user in both have different states
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, action) {   
      state.signupData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;
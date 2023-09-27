import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const CosmeticsCategoryPost = createAsyncThunk(
  "PereparatCategory/post",
  async (body) => {
    return await axios
      .post(`${API_URL}/category_cosmetics`, body, {
        headers: { token: cookies.get("token") },
      })
      .then((res) => res);
  }
);
export const CosmeticsCategoryGet = createAsyncThunk(
  "CosmeticsCategory/get",
  async () => {
    return await axios
      .get(`${API_URL}/category_cosmetics`)
      .then((response) => response.data);
  }
);

export const CosmeticsCategoryDelete = createAsyncThunk(
  "CosmeticsCategory/delete",
  async (id) => {
    return await axios
      .delete(`${API_URL}/category_cosmetics/${id}`, {
        headers: { token: cookies.get("token") },
      })
      .then((response) => response.data);
  }
);
export const CosmeticsCategoryPut = createAsyncThunk(
  "CosmeticsCategory/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/category_cosmetics/${id}`, body, {
        headers: { token: cookies.get("token") },
      })
      .then((response) => console.log(response.data));
  }
);

const CosmeticsCategorySlice = createSlice({
  name: "CosmeticsCategory",
  initialState: {
    cosmeticsCategoryGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    cosmeticsCategoryPost: {
      Success: false,
      Error: false,
      loading: false,
    },
    cosmeticsCategoryDelete: {
      Success: false,
      Error: false,
      loading: false,
    },
    cosmeticsCategoryPut: {
      Error: false,
      Loading: false,
      Success: false,
    },
  },
  extraReducers: {
    // get
    [CosmeticsCategoryGet.pending]: (state, action) => {
      state.cosmeticsCategoryGet.loading = true;
    },
    [CosmeticsCategoryGet.fulfilled]: (state, action) => {
      state.cosmeticsCategoryGet.loading = false;
      state.cosmeticsCategoryGet.success = true;
      state.cosmeticsCategoryGet.data = action.payload;
      state.cosmeticsCategoryGet.error = false;
    },
    [CosmeticsCategoryGet.rejected]: (state, action) => {
      state.cosmeticsCategoryGet.loading = false;
      state.cosmeticsCategoryGet.error = true;
      state.cosmeticsCategoryGet.success = false;
    },
    // add
    [CosmeticsCategoryPost.pending]: (state, action) => {
      state.cosmeticsCategoryPost.loading = true;
    },
    [CosmeticsCategoryPost.fulfilled]: (state, action) => {
      state.cosmeticsCategoryPost.loading = false;
      state.cosmeticsCategoryPost.Success = true;
      state.cosmeticsCategoryPost.Error = false;
    },
    [CosmeticsCategoryPost.rejected]: (state, action) => {
      state.cosmeticsCategoryPost.loading = false;
      state.cosmeticsCategoryPost.Error = true;
      state.cosmeticsCategoryPost.Success = false;
    },
    // delete
    [CosmeticsCategoryDelete.pending]: (state, action) => {
      state.cosmeticsCategoryDelete.loadingDelete = true;
    },
    [CosmeticsCategoryDelete.fulfilled]: (state, action) => {
      state.cosmeticsCategoryDelete.loading = false;
      state.cosmeticsCategoryDelete.Success = true;
      state.cosmeticsCategoryDelete.Error = false;
    },
    [CosmeticsCategoryDelete.rejected]: (state, action) => {
      state.cosmeticsCategoryDelete.loading = false;
      state.cosmeticsCategoryDelete.Error = true;
      state.cosmeticsCategoryDelete.Success = false;
    },
    // put
    [CosmeticsCategoryPut.pending]: (state, action) => {
      state.cosmeticsCategoryPut.loading = true;
    },
    [CosmeticsCategoryPut.fulfilled]: (state, action) => {
      state.cosmeticsCategoryPut.Error = false;
      state.cosmeticsCategoryPut.Success = true;
      state.cosmeticsCategoryPut.Loading = false;
    },
    [CosmeticsCategoryPut.rejected]: (state, action) => {
      state.cosmeticsCategoryPut.Error = true;
      state.cosmeticsCategoryPut.Success = false;
      state.cosmeticsCategoryPut.Loading = false;
    },
  },
});

export const {} = CosmeticsCategorySlice.actions;
export default CosmeticsCategorySlice.reducer;

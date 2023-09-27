import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const CosmeticsPost = createAsyncThunk("Cosmetics/post", async (body) => {
  return await axios.post(`${API_URL}/cosmetics`, body , { headers:{ token : cookies.get("token")}}).then((res) => res);
});
export const CosmeticsGet = createAsyncThunk("cosmetics/get", async () => {
  return await axios
    .get(`${API_URL}/cosmetics`)
    .then((response) => response.data);
});
export const CosmeticsGetFilter = createAsyncThunk("CosmeticsProductFilter/get", async ({brand , category}) => {
  return await axios.get(`${API_URL}/cosmetics?brandId=${brand}&categoryId=${category}`)
    .then((response) => response.data);
});
export const CosmeticsDelete = createAsyncThunk("Cosmetics/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/cosmetics/${id}` , { headers:{ token : cookies.get("token")}})
    .then((response) => response.data);
});
export const CosmeticsPut = createAsyncThunk(
  "Cosmetics/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/cosmetics/${id}`, body , { headers:{ token : cookies.get("token")}})
      .then((response) => console.log(response.data));
  }
);

export const UploadImage = createAsyncThunk("Cosmetics/upload", async (e) => {
  const formData = new FormData();
  formData.append("file", e.target.files[0]);
  formData.append("upload_preset", "v0khd47o");
  try {
    return await axios
      .post("https://api.cloudinary.com/v1_1/dsdkp3672/upload", formData)
      .then((response) => response?.data.secure_url);
  } catch (error) {
    return error;
  }
});

export const UploadImage2 = createAsyncThunk("Aparat/upload2", async (e) => {
  const formData = new FormData();
  formData.append("file", e.target.files[0]);
  formData.append("upload_preset", "v0khd47o");
  try {
    return await axios
      .post("https://api.cloudinary.com/v1_1/dsdkp3672/upload", formData)
      .then((response) => response?.data.secure_url);
  } catch (error) {
    return error;
  }
});
export const UploadImage3 = createAsyncThunk("Aparat/upload3", async (e) => {
  const formData = new FormData();
  formData.append("file", e.target.files[0]);
  formData.append("upload_preset", "v0khd47o");
  try {
    return await axios
      .post("https://api.cloudinary.com/v1_1/dsdkp3672/upload", formData)
      .then((response) => response?.data.secure_url);
  } catch (error) {
    return error;
  }
});
export const UploadPdf = createAsyncThunk("Aparat/pdfupload", async (e) => {
  const formData = new FormData();
  formData.append("file", e.target.files[0]);
  formData.append("upload_preset", "v0khd47o");
  try {
    return await axios
      .post("https://api.cloudinary.com/v1_1/dsdkp3672/upload", formData)
      .then((response) => response?.data.secure_url);
  } catch (error) {
    return error;
  }
});
const CosmeticsSlice = createSlice({
  name: "Cosmetics",
  initialState: {
    CosmeticsGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    CosmeticsGetFilter: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    CosmeticsPost: {
      Success: false,
      Error: false,
      data: [],
      loading: false,
    },
    CosmeticsDelete: {
      Success: false,
      Error: false,
      loading: false,
    },
    CosmeticsPut: {
      Error: false,
      Loading: false,
      Success: false,
    },
    uploadCosmetics: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadCosmetics2: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadCosmetics3: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
    uploadCosmeticsPdf: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
  },
  extraReducers: {
    // get
    [CosmeticsGet.pending]: (state, action) => {
      state.CosmeticsGet.loading = true;
    },
    [CosmeticsGet.fulfilled]: (state, action) => {
      state.CosmeticsGet.loading = false;
      state.CosmeticsGet.success = true;
      state.CosmeticsGet.data = action.payload;
      state.CosmeticsGet.error = false;
    },
    [CosmeticsGet.rejected]: (state, action) => {
      state.CosmeticsGet.loading = false;
      state.CosmeticsGet.error = true;
      state.CosmeticsGet.success = false;
    },
    // get filter
    [CosmeticsGetFilter.pending]: (state, action) => {
      state.CosmeticsGetFilter.loading = true;
    },
    [CosmeticsGetFilter.fulfilled]: (state, action) => {
      state.CosmeticsGetFilter.loading = false;
      state.CosmeticsGetFilter.success = true;
      state.CosmeticsGetFilter.data = action.payload;
      state.CosmeticsGetFilter.error = false;
    },
    [CosmeticsGetFilter.rejected]: (state, action) => {
      state.CosmeticsGetFilter.loading = false;
      state.CosmeticsGetFilter.error = true;
      state.CosmeticsGetFilter.success = false;
    },
    // add
    [CosmeticsPost.pending]: (state, action) => {
      state.CosmeticsPost.loading = true;
    },
    [CosmeticsPost.fulfilled]: (state, action) => {
      state.CosmeticsPost.loading = false;
      state.CosmeticsPost.Success = true;
      state.CosmeticsPost.data = action.payload;
      state.CosmeticsPost.Error = false;
    },
    [CosmeticsPost.rejected]: (state, action) => {
      state.CosmeticsPost.loading = false;
      state.CosmeticsPost.Error = true;
      state.CosmeticsPost.Success = false;
    },
    // delete
    [CosmeticsDelete.pending]: (state, action) => {
      state.CosmeticsDelete.loadingDelete = true;
    },
    [CosmeticsDelete.fulfilled]: (state, action) => {
      state.CosmeticsDelete.loading = false;
      state.CosmeticsDelete.Success = true;
      state.CosmeticsDelete.Error = false;
    },
    [CosmeticsDelete.rejected]: (state, action) => {
      state.CosmeticsDelete.loading = false;
      state.CosmeticsDelete.Error = true;
      state.CosmeticsDelete.Success = false;
    },
    // put
    [CosmeticsPut.pending]: (state, action) => {
      state.CosmeticsPut.loading = true;
    },
    [CosmeticsPut.fulfilled]: (state, action) => {
      state.CosmeticsPut.Error = false;
      state.CosmeticsPut.Success = true;
      state.CosmeticsPut.Loading = false;
    },
    [CosmeticsPut.rejected]: (state, action) => {
      state.CosmeticsPut.Error = true;
      state.CosmeticsPut.Success = false;
      state.CosmeticsPut.Loading = false;
    },

    [UploadImage.pending]: (state, action) => {
      state.uploadCosmetics.Loading = true;
    },
    [UploadImage.fulfilled]: (state, action) => {
      state.uploadCosmetics.Error = false;
      state.uploadCosmetics.Success = true;
      state.uploadCosmetics.Loading = false;
      state.uploadCosmetics.data = action.payload;
      // console.log( );
    },
    [UploadImage.rejected]: (state, action) => {
      state.uploadCosmetics.Error = true;
      state.uploadCosmetics.Success = false;
      state.uploadCosmetics.Loading = false;
    },
    [UploadImage2.pending]: (state, action) => {
      state.uploadCosmetics2.Loading = true;
    },
    [UploadImage2.fulfilled]: (state, action) => {
      state.uploadCosmetics2.Error = false;
      state.uploadCosmetics2.Success = true;
      state.uploadCosmetics2.Loading = false;
      state.uploadCosmetics2.data = action.payload;
      // console.log( );
    },
    [UploadImage2.rejected]: (state, action) => {
      state.uploadCosmetics2.Error = true;
      state.uploadCosmetics2.Success = false;
      state.uploadCosmetics2.Loading = false;
    },
    [UploadImage3.pending]: (state, action) => {
      state.uploadCosmetics3.Loading = true;
    },
    [UploadImage3.fulfilled]: (state, action) => {
      state.uploadCosmetics3.Error = false;
      state.uploadCosmetics3.Success = true;
      state.uploadCosmetics3.Loading = false;
      state.uploadCosmetics3.data = action.payload;
      // console.log( );
    },
    [UploadImage3.rejected]: (state, action) => {
      state.uploadCosmetics3.Error = true;
      state.uploadCosmetics3.Success = false;
      state.uploadCosmetics3.Loading = false;
    },
    [UploadPdf.pending]: (state, action) => {
      state.uploadCosmeticsPdf.Loading = true;
    },
    [UploadPdf.fulfilled]: (state, action) => {
      state.uploadCosmeticsPdf.Error = false;
      state.uploadCosmeticsPdf.Success = true;
      state.uploadCosmeticsPdf.Loading = false;
      state.uploadCosmeticsPdf.data = action.payload;
      // console.log( );
    },
    [UploadPdf.rejected]: (state, action) => {
      state.uploadCosmeticsPdf.Error = true;
      state.uploadCosmeticsPdf.Success = false;
      state.uploadCosmeticsPdf.Loading = false;
    },
  },
});

export const {} = CosmeticsSlice.actions;
export default CosmeticsSlice.reducer;

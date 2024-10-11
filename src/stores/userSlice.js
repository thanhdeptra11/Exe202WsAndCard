import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // No user logged in initially
  isLoggedIn: false,
};

/**
 * Mỗi slide được tạo bằng hàm createSlice.
 * Trong hàm createSlice cần khai báo 3 tham số:
 * - name là 1 tên định danh duy nhất của slice,
 * - initialState là giá trị khởi đầu cho state,
 * - tham số thứ ba reducers chứa các hàm (gọi là hàm reducers) xử lý state (thêm sửa xóa…) .
 */
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;

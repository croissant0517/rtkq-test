import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: [],
  layerCount: 0,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addModal: (state, action) => {
      const modal = [...state.modals, action.payload];
      state.modals = modal;
      state.layerCount += 1;
    },
    deleteModal: (state) => {
      state.modals = state.modals.pop();
      state.layerCount -= 1;
    },
  },
});

export const { addModal, deleteModal } = modalSlice.actions;

export default modalSlice.reducer;

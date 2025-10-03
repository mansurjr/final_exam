import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types";

interface CartState {
  items: User[];
}

const loadFromLocalStorage = (): User[] => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (items: User[]) => {
  try {
    localStorage.setItem("cart", JSON.stringify(items));
  } catch {
    console.log("Error saving data to localStorage");
  }
};

const initialState: CartState = {
  items: loadFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<User>) => {
      if (!state.items.some((m) => m.id === action.payload.id)) {
        state.items.push(action.payload);
      } else {
        state.items.filter((student) => +student.id == +!action.payload.id);
      }
      saveToLocalStorage(state.items);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((m) => +m.id !== action.payload);
      saveToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveToLocalStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

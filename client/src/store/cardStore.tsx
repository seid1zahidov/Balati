import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface CartItem {
  id: string;
  cartQuantity: number;
  money: number;
  total: number;
}

interface CartState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
  total: number;
}

const cartItemsFromStorage = localStorage.getItem("cartItems");
const parsedCartItems = cartItemsFromStorage ? JSON.parse(cartItemsFromStorage) : [];

const initialState: CartState = {
  cartItems: parsedCartItems,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem: CartItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        state.cartItems = nextCartItems;
        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action: PayloadAction<CartItem>) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      toast.error("Product removed from cart", {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { money, cartQuantity } = cartItem;
          const itemTotal = money * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },

    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },

    productTotal(state, action: PayloadAction<string>) {
      const { id }:any = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === id);

      if (cartItem) {
        cartItem.total = cartItem.cartQuantity * cartItem.money;
      }

      state.total = state.cartItems.reduce((total, item) => total + item.total, 0);
    },

  },
});

export const {
  addToCart,
  decreaseCart,
  removeFromCart,
  getTotals,
  clearCart,
  productTotal,
} = cartSlice.actions;

export default cartSlice.reducer;

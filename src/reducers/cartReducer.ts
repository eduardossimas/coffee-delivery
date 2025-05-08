import type { Coffee } from "../context/CartContext";

export type ActionType =
  | { type: "ADD_ITEM"; payload: Coffee }
  | { type: "REMOVE_ONE_ITEM"; payload: { id: string } }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

export function cartReducer(state: Coffee[], action: ActionType): Coffee[] {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemExists = state.find(item => item.id === action.payload.id);

      if (itemExists) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }

      return [...state, action.payload];
    }

    case "REMOVE_ONE_ITEM": {
      const itemToRemove = state.find(item => item.id === action.payload.id);

      if (itemToRemove && itemToRemove.quantity > 1) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      return state.filter(item => item.id !== action.payload.id);
    }

    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.payload.id);

    case "UPDATE_QUANTITY":
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

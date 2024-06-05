import React, { createContext, useReducer } from 'react';

const initialState = {
  inventory: [],
};

const InventoryContext = createContext(initialState);

const inventoryReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INVENTORY':
      return {
        ...state,
        inventory: action.payload,
      };
    default:
      return state;
  }
};

const InventoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  return (
    <InventoryContext.Provider value={{ state, dispatch }}>
      {children}
    </InventoryContext.Provider>
  );
};

export { InventoryContext, InventoryProvider };

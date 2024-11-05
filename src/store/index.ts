// src/store/index.ts
import { legacy_createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"; // Import the Provider component
import rootReducer from "./reducers/rootReducer"; // Adjust the path based on your folder structure
import thunk from "redux-thunk"; // Import thunk

// Create the Redux store with thunk middleware
const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply middleware directly here
);

// Create a StoreProvider component to wrap your app
const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export { store, StoreProvider };

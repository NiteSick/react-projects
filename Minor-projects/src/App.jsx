import { useState } from "react";
import ShoppingList from "./components/shopping-list/Index";
import GlobalStyles from "./GlobalStyled";

function App() {
  return (
    <>
      <GlobalStyles />
      <ShoppingList />
    </>
  );
}
export default App;

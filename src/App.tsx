import { useState, useEffect } from "react";

import "./App.css";
import CardWidget from "./components/CardsWidget/CardsWidget";

const baseUrl =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/";

function App() {
  return <CardWidget baseUrl={baseUrl} />;
}

export default App;
